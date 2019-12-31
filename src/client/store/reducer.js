let initialState = {
	loggedIn: false,
	user: null,
	production:true, 
};

let reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				loggedIn: true,
				user: action.payload.user
			};
		case 'LOGOUT':
			return {
				...state,
				loggedIn: false,
				user: null
			};
		default:
			return { ...state };
	}
};

export default reducer;
