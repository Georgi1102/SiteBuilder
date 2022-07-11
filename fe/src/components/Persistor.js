import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rLoginUser } from "../redux/slices/userSlice";

export default function Persistor({ children }) {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		if (user.token) {
			localStorage.setItem("user", JSON.stringify(user));
		} else {
			const savedUser = JSON.parse(localStorage.getItem("user"));
			try {
				if (savedUser.token) {
					dispatch(rLoginUser(savedUser));
				}
			} catch (error) {}
		}
	}, [user, dispatch]);

	return <>{children}</>;
}
