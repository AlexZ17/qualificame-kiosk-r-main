export const GET_KIOSK_BEGIN = 'GET_KIOSK_BEGIN';
export const GET_KIOSK_SUCCESS = 'GET_KIOSK_SUCCESS';
export const SET_GOOD_QUESTION = 'SET_GOOD_QUESTION';
export const SET_BAD_QUESTION = 'SET_BAD_QUESTION';
export const SET_GOOD_CHOICES = 'SET_GOOD_CHOICES';
export const SET_BAD_CHOICES = 'SET_BAD_CHOICES';
export const GET_KIOSK_FAILURE = 'GET_KIOSK_FAILURE';
export const RESET_KIOSK = 'RESET_KIOSK';

import ApiService from 'qualificame-kiosk/app/services/ApiService';

export function getKiosk(kioskId) {
	return async dispatch => {
		dispatch(getKioskBegin());
		try {
			const result = await ApiService.getKioskData(kioskId);
			await dispatch(getQuestions(kioskId));
			dispatch(getKioskSuccess(result.kiosk));
		} catch (e) {
			dispatch(getKioskFailure(e));
		}
	}
}

export function getQuestions(kioskId) {
	return async dispatch => {
		try {
			let response = await ApiService.getKioskQuestions(kioskId);
			await Promise.all(response.questions.map(async question => {
				if(question.question_type === 1) {
					dispatch(setGoodQuestion(question));
				} else {
					dispatch(setBadQuestion(question));
				}
				await dispatch(getChoices(question.id, question.question_type));
			}));
		} catch(e) {
			throw 'Get questions error';
		}
	}
}

export function getChoices (questionId, questionType) {
	return async dispatch => {
		try {
			let response = await ApiService.getQuestionChoices(questionId);
			let choices = response.choices;
			if(questionType === 1) {
				dispatch(setGoodChoices(choices));
			} else {
				dispatch(setBadChoices(choices));
			}
		} catch(e) {
			throw 'Get choices error';
		}
	}
}

// Action: Function that returns an object with action data for reducer
export const getKioskBegin = () => ({
	type: GET_KIOSK_BEGIN
});
export const getKioskSuccess = data => ({
	type: GET_KIOSK_SUCCESS,
	payload: { data }
});
export const setGoodQuestion = question => ({
	type: SET_GOOD_QUESTION,
	payload: { question }
});
export const setBadQuestion = question => ({
	type: SET_BAD_QUESTION,
	payload: { question }
});
export const setGoodChoices = choices => ({
	type: SET_GOOD_CHOICES,
	payload: { choices }
});
export const setBadChoices = choices => ({
	type: SET_BAD_CHOICES,
	payload: { choices }
});
export const getKioskFailure = error => ({
	type: GET_KIOSK_FAILURE,
	payload: { error }
});
export const resetKiosk = () => ({
	type: RESET_KIOSK
});

