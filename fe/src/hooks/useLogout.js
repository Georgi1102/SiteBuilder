import { useDispatch } from "react-redux";
import { rLogoutUser } from "../redux/slices/userSlice";

export function useLogout() {
	const dispatch = useDispatch();
	return () => {
		dispatch(rLogoutUser());
        localStorage.removeItem("user")
	};
}