import React from "react";

function Introduction(props) {
	return (
		<p className="introduction" style={{ textAlign: props.textAlign }}>
			{props.Introduction}
		</p>
	);
}

export default Introduction;
