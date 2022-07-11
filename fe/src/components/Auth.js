import React from "react";
import { useAuth } from "../hooks/useAuth";

export default function Auth({ children, reverse }) {
	const loggedIn = useAuth();

	if (reverse) {
		if (loggedIn) {
			return;
		}
		return <>{children}</>;
	}
	if (loggedIn) {
		return <>{children}</>;
	}
	return;
}
