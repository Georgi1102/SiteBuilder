import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import axios from "axios";
import Error from "../components/Error";
import { useApi } from "../hooks/useApi";

export default function SignUp() {
  const api = useApi();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  function checkInput() {
    let isOk = true;
    if (password !== passwordAgain || password === "") {
      setErrorPassword("Passwords do not match!");
      isOk = false;
    } else setErrorPassword("");

    if (email === "") {
      setErrorEmail("E-mail is empty!");
      isOk = false;
    } else setErrorEmail("");

    if (username === "") {
      setErrorUsername("Username is empty!");
      isOk = false;
    } else setErrorUsername("");

    return isOk;
  }

  async function signUpUser(e) {
    if (!checkInput()) return;
    try {
      await axios({
        method: "post",
        url: `${api}/users/signup`,
        data: {
          email,
          username,
          password,
        },
      });

	navigate("/login");
    } catch (err) {
      setErrorEmail(err.response.data.message);
    }
  }
  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center ">
        <div className="px-8 py-3 rounded border border-secondary w-70 shadow-xl shadow-secondary">
          <div className="flex flex-col items-center justify-center mb-4">
            <FontAwesomeIcon
              icon={"fa-solid fa-user-large"}
              className="text-4xl m-4 text-secondary"
            />
            <h2 className="text-secondary text-2xl font-bold">SignUp</h2>
          </div>
          <div className="flex justify-between">
            Already have an account?
            <Link to="/login" className="text-primary hover:text-secondary">
              Login
            </Link>
          </div>
          <div>
            <Input
              label="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className={`${errorEmail ? "border-red-500 animate-wiggle" : ""}`}
            ></Input>
            <Error error={errorEmail}></Error>

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
              password
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className={`${
                errorPassword ? "border-red-500 animate-wiggle" : ""
              }`}
            ></Input>
            <Input
              label="Confirm password"
              password
              onChange={(e) => setPasswordAgain(e.target.value)}
              value={passwordAgain}
              className={`${
                errorPassword ? "border-red-500 animate-wiggle" : ""
              }`}
            ></Input>
            <Error error={errorPassword}></Error>

            <Button text={"Sign Up"} onClick={(e) => signUpUser(e)} />
          </div>
        </div>
      </div>
    </div>
  );
}
