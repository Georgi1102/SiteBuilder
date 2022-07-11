import React from "react";

export default function Error({ error }) {
	let text;
	if (error) {
		text = <p className="text-red-600">{error}</p>;
	} else {
		text = <p></p>;
	}

	return <div>{text}</div>;
}