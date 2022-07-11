import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading({ children, loading }) {
	if (loading) {
		return (
			<div className="animate-pulse">
				<FontAwesomeIcon
					icon="fas fa-spinner"
					className="text-secondary text-7xl animate-spin"
				/>
				<span className="text-secondary text-5xl pl-5">Conecting to server...</span>
			</div>
		);
	}
	return children;
}
