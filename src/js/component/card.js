import React from "react";

export function Card() {
	const myStyle = { width: "270px", height: "400px" };

	return (
		<div className="card ml-2 mr-2" style={myStyle}>
			<img
				src="https://picsum.photos/270/180"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card&apos;s content.
				</p>
			</div>
			<div className="card-footer">
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
