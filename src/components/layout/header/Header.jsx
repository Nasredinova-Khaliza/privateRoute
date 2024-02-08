import { Link } from "react-router-dom";
import scss from "./Header.module.scss";
import search from "./../../../assets/img/icons8-search.gif";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const url = import.meta.env.VITE_BAKEND_URL;

const Header = () => {
	const links = [
		{ name: "Home", href: "/" },
		{ name: "User", href: "/user" },
	];

	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [userProfile, setUserProfile] = useState([]);
	const getUserId = localStorage.getItem("isAuth");

	const getUserProfile = async () => {
		try {
			const response = await axios.get(url);
			const responseData = response.data;
			if (getUserId) {
				const findUser = responseData.find((item) => item._id === +getUserId);
				setUserProfile(findUser);
			} else {
				console.log("User not found");
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUserProfile();
	}, [pathname]);

	const removeUserSession = () => {
		localStorage.removeItem("isAuth");
		setUserProfile({});
		navigate("/login");
	};

	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<nav>
						<ul>
							{links.map((item, index) => (
								<li key={index}>
									<Link to={item.href}>{item.name}</Link>
								</li>
							))}
						</ul>
					</nav>

					{getUserId ? (
						<div>
							<h1>name: {userProfile.login}</h1>
							<button onClick={removeUserSession}>Exit</button>
						</div>
					) : (
						<>
							<Link to="/login">Sign in</Link>
							<Link to="/registration">Sign up</Link>
						</>
					)}
					<div className={scss.search}>
						<input type="text" placeholder="search" />
						<img src={search} alt="" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
