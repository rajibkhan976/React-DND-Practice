import { combineReducers } from 'redux';

const initialState = {
	images: [],
	error: null
};

const mediaReducer = (state = initialState, action) => {
	
	switch (action.type) {
		
		case 'GET_IMAGES':
		
		return { ...state, images: action.data };
		
		case 'GET_IMAGES_FAILED':
		
		return { ...state, error: action.data };
		
		default:
		
		return state;
	}
}

export default combineReducers({ mediaReducer });