import Auth, * as fromAuth from 'qualificame-kiosk/app/reducers/AuthReducer.js';
import Kiosk, * as fromKiosk from 'qualificame-kiosk/app/reducers/KioskReducer.js';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    Auth,
    Kiosk
});

export default rootReducer;

//Auth
export const getIsLoggedIn = state =>
	fromAuth.getIsLoggedIn(state.Auth);

export const getIsLoading = state =>
	fromAuth.getIsLoading(state.Auth);

export const getAuthData = state =>
	fromAuth.getAuthData(state.Auth);

export const getUserData = state =>
	fromAuth.getUserData(state.Auth);

//Kiosk
export const getKiosk = state =>
	fromKiosk.getKiosk(state.Kiosk);

export const getQuestions = state =>
	fromKiosk.getQuestions(state.Kiosk);