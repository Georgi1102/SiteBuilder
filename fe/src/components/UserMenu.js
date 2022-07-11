import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import Active from "./Active";
import { useLogout } from "../hooks/useLogout";
import MenuLink from "./MenuLink";

export default function UserMenu({ active, setActive }) {
	const user = useSelector((state) => state.user);

	const logout = useLogout();
	function handleLogOut() {
		logout();
	}

	return (
		<Active active={active}>
			<div
				className={`absolute h-60 w-60 border-2 rounded-2xl border-primary top-16 right-0 bg-secondary`}
			>
				<div className="flex pt-6 flex-col justify-items-center items-center">
					<button
						className="border-2 text-primary rounded-lg p-2 m-4 "
						onClick={() => handleLogOut()}
					>
						Log Out
					</button>
					<h1 className="text-xl text-primary font-semibold ">
						User: {user.username}
					</h1>

					<MenuLink
						label="Projects"
						to="projects"
						onClick={() => setActive(false)}
					/>
				</div>

				<button
					className="absolute top-0 right-0 justify-center items-center"
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
