import {
	GET_KIOSK_BEGIN,
	GET_KIOSK_SUCCESS,
	SET_GOOD_QUESTION,
	SET_BAD_QUESTION,
	SET_GOOD_CHOICES,
	SET_BAD_CHOICES,
	GET_KIOSK_FAILURE,
	RESET_KIOSK,
} from 'qualificame-kiosk/app/actions/KioskActions';

const initialState = {
	kiosk: {},
	goodQuestion: {},
	badQuestion: {},
	goodChoices: [],
	badChoices: [],
	isLoading: false,
	error: '' 
};

export default function KioskReducer (state = initialState, action) {
	switch (action.type) {
		case GET_KIOSK_BEGIN:
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case GET_KIOSK_SUCCESS:
			return {
				...state,
				kiosk: action.payload.data,
				isLoading: false
			}
		case SET_GOOD_QUESTION:
			return {
				...state,
				goodQuestion: action.payload.question,
			}
		case SET_BAD_QUESTION:
			return {
				...state,
				badQuestion: action.payload.question,
			}
		case SET_GOOD_CHOICES:
			return {
				...state,
				goodChoices: action.payload.choices,
			}
		case SET_BAD_CHOICES:
			return {
				...state,
				badChoices: action.payload.choices,
			}
		case GET_KIOSK_FAILURE:
			return {
				...state,
				error: action.payload.error.status,
				isLoading: false
			}
		case RESET_KIOSK:
			return {
				...initialState
			}
		default:
			return state;
	}
};

export const getKiosk = state => {
	return state.kiosk
}

export const getQuestions = state => {
	return {
		goodQuestion: state.goodQuestion,
		badQuestion: state.badQuestion,
		goodChoices: state.goodChoices,
		badChoices: state.badChoices
	}
}