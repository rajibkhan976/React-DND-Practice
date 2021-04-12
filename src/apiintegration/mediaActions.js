import * as Api from './mediaApi';

export function getImages(limit) {
	return function (dispatch) {
		return Api.getImages(limit)
		.then((result) => {
			return dispatch({
				type: 'GET_IMAGES',
				data: result.data
			});
		})
		.catch((error) => {
			return dispatch({
				type: 'GET_IMAGES_FAILED',
				data: `Loading images failed due to ${error}`
			});
		})
	}
}