let initialState = {
	loggedIn: false,
	user: null,
	production:true, 
};

let reducer = (state = initialState, action) => {
	console.log(process.env);
	switch (action.type) {
		case 'LOGIN':
			return {
				...state, 
				user: action.payload.user,
				loggedIn: true,
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
