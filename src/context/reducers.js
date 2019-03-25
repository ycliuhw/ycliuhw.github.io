export const LOAD_MEDIA = 'LOAD_MEDIA'
export const LOAD_PROFILE = 'LOAD_PROFILE'
export const SET_TOKEN = 'SET_TOKEN'
export const START_LOADING = 'START_LOADING'

export const appReducer = (state, action) => {
	switch (action.type) {
		case LOAD_MEDIA:
			return {
				...state,
				isLoading: false,
				media: action.media,
			};
		case LOAD_PROFILE:
			return {
				...state,
				isLoading: false,
				profile: action.profile,
			};
		case SET_TOKEN:
			return {
				...state,
				token: action.token,
			}
		case START_LOADING:
			return {
				...state,
				isLoading: true,
			}
		default:
			return state;
	}
};