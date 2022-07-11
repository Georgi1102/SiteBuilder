import React from "react";
import Pricing from "../components/Pricing";
import { Link } from "react-router-dom";
import Auth from "../components/Auth"
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();

	return (
		<div>
			<div className="flex justify-center items-center flex-col h-screen bg-primary">
				<span className="text-3xl text-secondary">Explore Create Design</span>
				<Auth>
					<Link
						to={"create"}
						className="m-4 p-2 text-lg text-primary bg-secondary outline outline-2 outline-secondary rounded-md hover:bg-secondary/70"
					>
						Create Web Project
					</Link>
				</Auth>
			</div>
			<div className="flex justify-center items-center flex-col md:flex-row bg-secondary">
				<Pricing name={"Standard"} price="12" onClick={()=> navigate("/payment")}/>
				<Pricing name={"Pro"} price="24" onClick={()=> navigate("/payment")}/>
				<Pricing name={"Enterprice"} price="124" onClick={()=> navigate("/payment")} />
			</div>
			<div className="flex justify-center items-center flex-col h-screen bg-primary">
				<span className="text-3xl text-secondary">
					Imagination is your only limit
				</span>
			</div>
		</div>
	);
}