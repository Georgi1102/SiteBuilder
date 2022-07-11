import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		username: "",
		email: "",
		token: "",
	},
	reducers: {
		rSetUsername: (state, action) => {
			state.username = action.payload;
		},
		rSetEmail: (state, action) => {
			state.email = action.payload;
		},
		rSetToken: (state, action) => {
			state.token = action.payload;
		}, 
		rLoginUser: (state, action) => {
			state.username = action.payload.username;
			state.email = action.payload.email;
			state.token = action.payload.token;
		},
		rLogoutUser: (state) => {
			state.username = "";
			state.email = "";
			state.token = "";
		}
	},
});

export const { rSetUsername, rSetEmail, rSetToken, rLoginUser, rLogoutUser } = userSlice.actions;
export default userSlice.reducer;