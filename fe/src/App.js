import { Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AuthRoute from "./components/AuthRoute";
import CreateProject from "./pages/CreateProject";
import Projects from "./pages/Projects";
import Payment from "./pages/Payment";
import Test from "./pages/Test";
import { useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";


library.add(fas, fab, far);

function App() {
	useEffect(() => { }, []);

	return (
		<div>
			<Topbar></Topbar>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/test" element={<Test />} />
				<Route path="about" element={<About />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<SignUp />} />
				<Route
					path="create"
					element={
						<AuthRoute>
							<CreateProject />
						</AuthRoute>} />
				<Route
					path="projects"
					element={
						<AuthRoute>
							<Projects />
						</AuthRoute>} />
				<Route
					path="payment"
					element={
						<AuthRoute>
							<Payment />
						</AuthRoute>} />
			</Routes>
		</div>
	);
}

export default App;
