import { Link } from "react-router-dom";

export default function MenuLink({ label, to, onClick }) {
	return (
		<Link
			to={to}
			className={`text-2xl text-center bg-secondary text-primary`}
			onClick={onClick}
		>
			{label}
		</Link>
	);
}