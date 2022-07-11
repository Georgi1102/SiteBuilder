import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Active from "./Active";
import Auth from "./Auth";
import MenuLink from "./MenuLink";

export default function LinksMenu({ active, setActive }) {
	return (
		<Active active={active}>
			<div
				className={`absolute w-40 border-2 rounded-2xl border-primary h-64 top-16 right-0 bg-secondary`}
			>
				<div className="flex right-0 top-auto h-full flex-col justify-center items-center ">
					<p className="text-2xl"></p>

					<MenuLink label="Home" to="/" onClick={() => setActive(false)} />
					<MenuLink label="About" to="about" onClick={() => setActive(false)} />
					<Auth reverse>
						<MenuLink
							label="Login"
							to="login"
							onClick={() => setActive(false)}
						/>
					</Auth>
					<Auth reverse>
						<MenuLink
							label="Sign Up"
							to="signup"
							onClick={() => setActive(false)}
						/>
					</Auth>
				</div>

				<button
					className="absolute top-0 right-0 justify-center items-center "
					onClick={() => setActive(false)}
				>
					<FontAwesomeIcon
						icon="fa-solid fa-xmark"
						className="text-2xl m-4 text-primary"
					/>
				</button>
			</div>
		</Active>
	);
}
