import {
	LOGIN_BEGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	CLEAR_AUTH,
	FETCH_USER_BEGIN,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE,
	UPDATE_AUTH_DATA,
	RESET_LOADING,
	HUE
} from 'qualificame-kiosk/app/actions/AuthActions';

const initialState = {
	authData: {},
	userData: {},
	isLoading: false,
	error: '',
	loggedIn: false
};

export default function AuthReducer (state = initialState, action) {
	switch (action.type) {
		case HUE: 
			return {
				...state,
				authData: {
					...state.authData,
					access_token: '123456'
				}
			}
		case LOGIN_BEGIN: 
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case LOGIN_SUCCESS: 
			return {
				...state,
				authData: action.payload.authData,
				isLoading: false,
				loggedIn: true
			}	
		case CLEAR_AUTH: 
			return {
				...initialState,
			}
		case FETCH_USER_BEGIN: 
			return {
				...state,
				error: ''
			}
		case FETCH_USER_SUCCESS: 
			return {
				...state,
				userData: action.payload.userData,
			}	
		case LOGIN_FAILURE: 
			return {
				...state,
				error: action.payload.error,
			}	
		case UPDATE_AUTH_DATA: 
			return {
				...state,
				authData: {
					...state.authData,
					...action.payload.authData,
				}
			}
		
		case RESET_LOADING: 
			return {
				...state,
				isLoading: false,
				error: '',
			}
		default:
			return state;
	}
};

export const getIsLoading = state => {
	return state.isLoading
}

export const getIsLoggedIn = state => {
	return state.loggedIn
}

export const getAuthData = state => {
	return state.authData
}

export const getUserData = state => {
	return state.userData
}