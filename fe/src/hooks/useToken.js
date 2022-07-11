import { useSelector } from "react-redux";

export function useToken() {
	const user = useSelector((state) => state.user);
	return user.token;
}
