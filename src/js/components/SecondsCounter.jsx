import React from "react";
import PropTypes from "prop-types";



//create your first component
function SecondsCounter(props) {
	console.log("SecondsCounter rendered with:");

	const padded = String(props.seconds).padStart(6, "0");

	return (
		<div className="container">
			<div className="container group d-flex justify-content-center align-items-center">
				<div className="clock d-flex gap-3 align-items-center bg-dark text-white p-4 rounded shadow">
					<i className="fa-solid fa-clock"></i>
					<div>{padded[0]}</div>
					<div>{padded[1]}</div>
					<div>{padded[2]}</div>
					<div>{padded[3]}</div>
					<div>{padded[4]}</div>
					<div>{padded[5]}</div>
				</div>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number

};

export default SecondsCounter;