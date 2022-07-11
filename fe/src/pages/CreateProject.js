import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Error from "../components/Error";
import ChooseTheme from "../components/ChooseTheme"
//import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToken } from "../hooks/useToken";
import { useApi } from '../hooks/useApi'
import Auth from "../components/Auth";
import { Link } from "react-router-dom";

export default function CreateProject() {
	//const navigate = useNavigate()
	const token = useToken()
	const api = useApi()
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [errorName, setErrorName] = useState("");
	const [errorDescription, setErrorDescription] = useState("");
	const [themeActive, setThemeActive] = useState(false);


	function checkInput() {
		let isOk = true;

		if (name === "") {
			setErrorName("Name is empty");
			isOk = false;
		} else setErrorName("");

		if (description === "") {
			setErrorDescription("Description is empty!");
			isOk = false;
		} else setErrorDescription("");

		return isOk;
	}

	async function createProject() {
		if (!checkInput()) return;

		try {
			await axios({
				method: "post",
				url: `${api}/projects`,
				data: {
					name,
					description,
				},
				headers: {
					'Authorization': `Bearer ${token}`
				}
			});

			setThemeActive(true);
		} catch (err) {
			setErrorDescription(err.response.data.message);
		}
	}

	return (
		<div>
			<div className="h-screen w-full flex justify-center items-center">
				<div className="px-8 py-3 rounded border border-secondary w-70 shadow-xl shadow-secondary">
					<div className="flex flex-col items-center justify-center mb-4">
						<FontAwesomeIcon
							icon="fa-solid fa-diagram-project"
							className="text-4xl m-4 text-secondary"
						/>
						<h2 className="text-secondary text-2xl font-bold">Create Project</h2>
					</div>
					<div>
						<Input
							label="Project Name"
							onChange={(e) => setName(e.target.value)}
							value={name}
							className={`${errorName ? "border-red-500 animate-wiggle" : ""
								}`}
						></Input>
						<Error error={errorName}></Error>
						<Input
							label="Description"
							onChange={(e) => setDescription(e.target.value)}
							value={description}
							className={`${errorDescription ? "border-red-500 animate-wiggle" : ""
								}`}
						></Input>
						<Error error={errorDescription}></Error>
						<Auth>
							<Link
								to={"/projects"}
								onClick={() => createProject()}
								className="m-4 p-2 flex justify-center items-center text-lg text-primary bg-secondary outline outline-2 outline-secondary rounded-md hover:bg-secondary/70"
							>
								Create
							</Link>
						</Auth>
						
					</div>
				</div>
			</div>
			<ChooseTheme active={themeActive} setActive={setThemeActive} />

		</div>
	);
}
