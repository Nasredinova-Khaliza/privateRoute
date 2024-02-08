import axios from "axios";
import { useEffect, useState } from "react";
import scss from "./UserHome.module.scss";

const url = import.meta.env.VITE_BAKEND_URL;

const UserHome = () => {
	const [userProfile, setUserProfile] = useState([]);

	const getUserProfile = async () => {
		try {
			const response = await axios.get(url);
			const responseData = response.data;
			setUserProfile(responseData);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUserProfile();
	}, []);

	return (
		<div className={scss.UserHome}>
			<div className="container">
				{Object.keys(userProfile).length > 0 && (
					<div>
						<h1>{userProfile.login}</h1>
						<p>{userProfile.password}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default UserHome;
