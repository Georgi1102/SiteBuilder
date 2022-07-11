import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pricing({name, price, onClick}) {
	return (
		<div className="h-[70vh] w-80 bg-primary hover:bg-primary/90 transition-all rounded-lg m-4 p-4 flex flex-col justify-between">
			<div className="flex flex-col">
				<span className="text-2xl">{name}</span>
				<span className="text-3xl">
					${price} <span className="text-lg">/ Month</span>
				</span>
			</div>
			<div>
                <div className="flex items-center">
					<FontAwesomeIcon icon="fa-solid fa-circle-check" className="text-secondary text-3xl m-4"/>
					<span>Fast Website</span>
				</div>
                <div className="flex items-center">
					<FontAwesomeIcon icon="fa-solid fa-circle-check" className="text-secondary text-3xl m-4"/>
					<span>Responsive</span>
				</div>
                <div className="flex items-center">
					<FontAwesomeIcon icon="fa-solid fa-circle-check" className="text-secondary text-3xl m-4"/>
					<span>Very Good</span>
				</div>
                <div className="flex items-center">
					<FontAwesomeIcon icon="fa-solid fa-circle-check" className="text-secondary text-3xl m-4"/>
					<span>Very Good 2??</span>
				</div>
			</div>
			<button className="bg-secondary text-primary px-2 py-3 rounded-md hover:bg-secondary/95" onClick={onClick}>Choose Plan</button>
		</div>
	);
}
