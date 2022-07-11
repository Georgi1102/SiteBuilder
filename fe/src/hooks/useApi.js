export function useApi() {
    const { REACT_APP_API_HOST } = process.env;
	return REACT_APP_API_HOST
}