import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import scss from "./RegistrationPage.module.scss";

const url = import.meta.env.VITE_BAKEND_URL;

const RegistrationPage = () => {
	const navigate = useNavigate();
	const [userLogin, setUserLogin] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const handleAuth = async () => {
		const newUser = {
			login: userLogin,
			password: userPassword,
		};
		await postUser(newUser);
	};

	const postUser = async (newUser) => {
		try {
			const response = await axios.post(url, newUser);
			console.log("Response from server:", response.data);
			navigate("/login");
		} catch (error) {
			console.error("Error while posting user:", error);
			if (error.response) {
				console.error("Server responded with status:", error.response.status);
				console.error("Response data:", error.response.data);
			} else if (error.request) {
				console.error("No response received:", error.request);
			} else {
				console.error("Error setting up request:", error.message);
			}
		}
	};

	return (
		<div className={scss.RegistrationPage}>
			<div className="container">
				<div className={scss.card}>
					<h1>Registration</h1>
					<input
						type="text"
						value={userLogin}
						placeholder="login"
						onChange={(e) => setUserLogin(e.target.value)}
					/>
					<input
						type="password"
						value={userPassword}
						placeholder="password"
						onChange={(e) => setUserPassword(e.target.value)}
					/>
					<button onClick={handleAuth}>registration</button>
				</div>
			</div>
		</div>
	);
};

export default RegistrationPage;
