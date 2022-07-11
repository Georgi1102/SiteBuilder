import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../helpers/auth";
import { useApi } from "../hooks/useApi";
import { useToken } from "../hooks/useToken";
import { useLogout } from "../hooks/useLogout";

export default function AuthRoute({ children }) {
	const [loggedIn, setLoggedIn] = useState(true);
	const logout = useLogout();
	const token = useToken();
	const api = useApi();

	const getLocalToken = useCallback(() => {
		return getToken();
	}, []);

	const checkToken = useCallback(async () => {
		//Get token from localstorage
		let localToken = getLocalToken();
		if (!localToken) {
			setLoggedIn(false);
			return;
		}
		try {
			await axios({
				method: "get",
				url: `${api}/users/protected`,
				headers: {
					Authorization: `Bearer ${localToken}`,
				},
			});
			setLoggedIn(true);
		} catch (err) {
			logout();
			setLoggedIn(false);
		}
	}, [api, getLocalToken, logout]);

	useEffect(() => {
		checkToken();
	}, [checkToken, token]);

	if (loggedIn) {
		return <>{children}</>;
	} else {
		return <Navigate to="/login" />;
	}
}
