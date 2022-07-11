export function getToken() {
	const savedUser = JSON.parse(localStorage.getItem("user"));
	if (!savedUser) return "";
	return savedUser.token;
}