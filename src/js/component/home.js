import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<Jumbotron />
			<div className="row mr-5 ml-5 mb-3">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</div>
	);
}
