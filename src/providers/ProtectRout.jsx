import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProtectRout = ({ children }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const isAuth = localStorage.getItem("isAuth");
	const isAuthBoolean = !!isAuth;

	useEffect(() => {
		switch (pathname) {
			case "/login":
			case "/registration":
				if (isAuthBoolean) {
					navigate("/");
				}
				break;
			case "/":
			case "/user":
				// case "/contact":
				if (!isAuthBoolean) {
					navigate("/login");
				}
				break;
			default:
				break;
		}
		// if (isAuthBoolean && pathname === "/login") {
		// 	navigate("/");
		// } else if (isAuthBoolean && pathname === "/registration") {
		// 	navigate("/");
		// } else if (!isAuthBoolean && pathname === "/") {
		// 	navigate("/login");
		// } else if (!isAuthBoolean && pathname === "/about") {
		// 	navigate("/login");
		// } else if (!isAuthBoolean && pathname === "/contact") {
		// 	navigate("/login");
		// }
	}, [pathname]);

	return children;
};

export default ProtectRout;
