import React from "react";

export default function Input({ label, password, onChange, value, className }) {
	return (
		<div className="flex flex-col my-2">
			<label className="text-sm text-secondary">{label}</label>
			{password ? (
				<input
					onChange={onChange}
					className={`border border-secondary text-secondary rounded px-3 py-1 mt-2 ${className}`}
					type="password"
					value={value}
				/>
			) : (
				<input
					onChange={onChange}
					className={`border border-secondary text-secondary rounded px-3 py-1 mt-2 ${className}`}
					type="text"
					value={value}
				/>
			)}
		</div>
	);
}