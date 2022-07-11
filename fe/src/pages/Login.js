import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Error from "../components/Error";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { rLoginUser } from "../redux/slices/userSlice";
import {useApi} from '../hooks/useApi'
import axios from "axios";

export default function Login() {
	const api = useApi()
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorUsername, setErrorUsername] = useState("");
	const [errorPassword, setErrorPassword] = useState("");
	const dispatch = useDispatch();

	function checkInput() {
		let isOk = true;
		
		if (password === "") {
			setErrorPassword("Password is empty");
			isOk = false;
		} else setErrorPassword("");

		if (username === "") {
			setErrorUsername("Username is empty!");
			isOk = false;
		} else setErrorUsername("");

		return isOk;
	}

	const loginUser = async (e) => {
		if (!checkInput()) return;

		try {
			const loginUser = await axios({
				method: "post",
				url: `${api}/users/login`,
				data: {
					username,
					password,
				},
			});

			
			dispatch(rLoginUser({
				email: loginUser.data.email,
				token: loginUser.data.token,
				username: loginUser.data.name,
			}));
			navigate("/");
		} catch (err) {
			setErrorPassword(err.response.data.message);
		}
	};

	return (
		<div>
			<div className="h-screen w-full flex justify-center items-center">
				<div className="px-8 py-3 rounded border border-secondary w-70 shadow-xl shadow-secondary">
					<div className="flex flex-col items-center justify-center mb-4">
						<FontAwesomeIcon
							icon={"fa-solid fa-lock-open"}
							className="text-4xl m-4 text-secondary"
						/>
						<h2 className="text-secondary text-2xl font-bold">Login</h2>
					</div>
					<div>
						<div className="flex justify-between">
							Don't have an account?
							<Link to="/signup" className="text-primary hover:text-secondary">
								Sign up
							</Link>
						</div>
						<Input
							label="Username"
							onChange={(e) => setUsername(e.target.value)}
							value={username}
							className={`${
								errorUsername ? "border-red-500 animate-wiggle" : ""
							}`}
						></Input>
						<Error error={errorUsername}></Error>
						<Input
							label="Password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							className={`${
								errorPassword ? "border-red-500 animate-wiggle" : ""
							}`}
							password
						></Input>
						<Error error={errorPassword}></Error>
						<Button text={"Login"} onClick={(e) => loginUser(e)} />
					</div>
				</div>
			</div>
		</div>
	);
}
