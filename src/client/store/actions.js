import axios from 'axios';

export const getUser = (proxy, user) => {
	// console.log(user);
	return (dispatch) => {
		axios
			.post(`${proxy}/user`, user)
			.then((res) => {
				// console.log(res);
				if (res.data.status) dispatch({ type: 'LOGIN', payload: { user: res.data.data } });
				else dispatch({ type: 'LOGOUT' });
			})
			.catch((err) => {
				dispatch({ type: 'LOGOUT' });
			});
	};
};
