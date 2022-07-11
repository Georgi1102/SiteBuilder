import React from "react";

export default function Active({ children, active }) {
	if (active) {
		return <>{children}</>;
	}
	return;
}
