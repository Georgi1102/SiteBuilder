import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../media/images/lonexLogo.png";
import LinksMenu from "./LinksMenu";
import UserMenu from "./UserMenu";
import Auth from "./Auth";

export default function Topbar() {
	const [menuActive, setMenuActive] = useState(false);
	const [userActive, setUserActive] = useState(false);

	function handleMenuActive() {
		setMenuActive(true);
		setUserActive(false);
	}
	function handleUserActive() {
		setUserActive(true);
		setMenuActive(false);
	}

	return (
		<div>
			<div className="fixed w-full flex justify-between items-center h-16 bg-secondary text-primary">
				<div className="flex justify-center items-center text-white">
					<Link to="/">
						<img src={logo} className="h-12 ml-3 mb-2" alt="Lonex Logo"></img>
					</Link>
				</div>

				<div className="flex flex-row">
					<button
						className="flex justify-center items-center text-primary"
						onClick={() => handleMenuActive(menuActive)}
					>
						<FontAwesomeIcon
							icon={"fa-solid fa-bars"}
							className="text-4xl m-4"
						/>
					</button>
					<Auth>
						<button
							className={`justify-center items-center text-primary`}
							onClick={() => handleUserActive(userActive)}
						>
							<FontAwesomeIcon
								icon={"fa-solid fa-user-gear"}
								className="text-4xl m-4"
							/>
						</button>
					</Auth>
				</div>

				<LinksMenu active={menuActive} setActive={setMenuActive} />
				<Auth>
					<UserMenu active={userActive} setActive={setUserActive} />
				</Auth>
			</div>
		</div>
	);
}