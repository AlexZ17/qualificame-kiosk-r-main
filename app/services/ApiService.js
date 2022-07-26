import axios from 'axios';
import store from 'qualificame-kiosk/app/Store.js';
import { refreshAuth, logout } from 'qualificame-kiosk/app/actions/AuthActions';
import { getAuthData }  from 'qualificame-kiosk/app/reducers';
import ChannelConfig from 'qualificame-kiosk/config/Constants';

const { API_HOST, API_CLIENT_ID, AUTH_HOST } = ChannelConfig;

const authAxios = axios.create();
axios.defaults.headers.common['Content-Type'] = 'application/json';
authAxios.defaults.headers.common['Content-Type'] = 'application/json';

authAxios.interceptors.request.use(request => {
	const tokenData = getAuthData(store.getState());
	const accessToken = tokenData.access_token;
	request.headers['Authorization'] = `Bearer ${accessToken}`;
	return request;
});

export default {

	isRefreshingToken: false,
	refreshCall: null,

	//Auth
	getUser() {
		const method = 'GET';
		const url = `${API_HOST}/api/me`;
		return this.makeAuthorizedRequest({method, url})
	},

	getNewToken ( refresh_token ) {
		const url = `${API_HOST}/oauth/token`;
		const method = 'POST';
		const data = {
			grant_type: 'refresh_token',
			refresh_token
		};
		return this.makeRequest({ method, url, data });
	},

	// async registerDevice(token) {
	// 	const url = `${API_HOST}/api/mobile_devices`;
	// 	const method = 'POST';
	// 	const data = {
	// 		mobile_device: { expo_token: token }
	// 	}
	// 	return this.makeAuthorizedRequest({ method, url, data });
	// },

	// WelcomeScreen
	getKiosk(uuid) {
		const method = 'GET';
		let params = uuid ? `?uuid=${uuid}`: '';
		const url = `${API_HOST}/kiosk${params}`;

		return this.makeRequest({ method, url })
	},

	getKioskData (kioskId) {
		const method = 'GET';
		const url = `${API_HOST}/api/kiosks/${kioskId}`;

		return this.makeAuthorizedRequest({ method, url });
	},

	// MainScreen
	createEvent({ kiosk_id, value }) {
		const method = 'POST';
		const url = `${API_HOST}/api/events`;
		const data = {
			event: {
				value,
				kiosk_id
			}
		}
		return this.makeAuthorizedRequest({ method, url, data });
	},
	// DetailScreen
	getKioskQuestions(kiosk_id) {
		const method = 'GET';
		// filters is not yet implemented
		let params = this.makeQueryParams({
			filters: `kiosk_id=${kiosk_id}`,
		})
		const url = `${API_HOST}/api/questions?${params}`;

		return this.makeAuthorizedRequest({ method, url });
	},
	getQuestionChoices(question_id) {
		const method = 'GET';
		let params = this.makeQueryParams({
			filters: 'active=true',
		})
		const url = `${API_HOST}/api/questions/${question_id}/choices?${params}`;

		return this.makeAuthorizedRequest({ method, url });
	},
	selectChoice({ event_id, choice_id }) {
		const method = 'PUT';
		const url = `${API_HOST}/api/events/${event_id}`;
		const data = {
			event: {
				choice_id
			}
		}

		return this.makeAuthorizedRequest({ method, url, data });
	},

	makeQueryParams (params) {
		let queries = '';
		for(var key in params){
			queries += `${key}=${params[key]}&`;
		}
		return queries;
	},

	async makeRequest ( requestData={} ) {
		let res = await axios(requestData);
		return res.data;
	},

	async makeAuthorizedRequest ( requestData={}, secondTry=false ) {
		try {
			const tokenData = getAuthData(store.getState());
			const uuid = tokenData.uuid;
			if (!requestData.url.includes('uuid')) {
				if (requestData.url.includes('?'))
					requestData.url = `${requestData.url}uuid=${uuid}`;
				else
					requestData.url = `${requestData.url}?uuid=${uuid}`;
			}
			let res = await authAxios(requestData);
			return res.data;
		} catch (error) {
			let status = error.response ? error.response.status : 0;
			if (secondTry)
				return store.dispatch(logout());
			if ( status === 401 ) {
				await this.suscribeForRefreshAuth();
				let retryResult = await this.makeAuthorizedRequest(requestData, true);
				return retryResult;
			} else {
				throw error;
			}
		}
	},

	async suscribeForRefreshAuth() {
		if (this.isRefreshingToken) {
			await this.refreshCall;
		} else {
			this.isRefreshingToken = true;
			let refreshPromise = store.dispatch(refreshAuth());
			this.refreshCall = refreshPromise;
			await refreshPromise;
			this.isRefreshingToken = false;
		}
	},
};
// 	// makeRequest ({url = '/', method = 'GET', data={}, headers={}}) {

// 	// 	//default headers
// 	// 	if (!headers['Content-Type']) {
// 	// 		headers['Content-Type'] = 'application/json';
// 	// 	}

// 	// 	// Encode URL data or set body data
// 	// 	var body;
// 	// 	if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
// 	// 		body = Object.keys(data).map((key) => {
// 	// 			return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
// 	// 		}).join('&');
// 	// 	} else {
// 	// 		body = JSON.stringify(data);
// 	// 	}


// 	// 	let options = {
// 	// 		method,
// 	// 		headers,
// 	// 	};

// 	// 	if (method === 'POST' || method === 'PUT') options.body = body;

// 	// 	return new Promise((resolve, reject) => {
// 	// 		fetch(url, options).then((response) => {
// 	// 			response.text().then((text) => {
// 	// 				try {
// 	// 					let json = JSON.parse(text);
// 	// 					if (!response.ok) {
// 	// 						response.responseJSON = json;
// 	// 						reject(response);

// 	// 					} else if (json.Error) {
// 	// 						reject(json);
// 	// 					} else {
// 	// 						resolve(json);
// 	// 					}
// 	// 				} catch (SyntaxError) {
// 	// 					response.responseText = text;
// 	// 					reject(response);
// 	// 				}
// 	// 			});
// 	// 		}).catch(error => reject(error));
// 	// 	});
// 	// }
// };
