import scss from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={scss.Footer}>
			<div className="container">
				<div className={scss.content}>
					<p>© 2024 Your Company Name. All rights reserved.</p>
					<p>Contact: info@yourcompany.com</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
