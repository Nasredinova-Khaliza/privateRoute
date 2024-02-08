import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import ProtectRout from "./providers/ProtectRout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<ProtectRout>
				<App />
			</ProtectRout>
		</BrowserRouter>
	</React.StrictMode>
);
