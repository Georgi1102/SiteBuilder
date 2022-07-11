import React from "react";

export default function Button({text, onClick}) {
	return (
		<div className="flex flex-col items-center justify-center my-3">
			<button className="bg-secondary text-primary my-3 py-1 w-full rounded" onClick={onClick}>
				{text}
			</button>
		</div>
	);
}
