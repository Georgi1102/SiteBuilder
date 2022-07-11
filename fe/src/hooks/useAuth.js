import { useSelector } from "react-redux";

export function useAuth() {
	const user = useSelector((state) => state.user);
    if (user.token) {
        return true;
    }
    return false
}