import React from "react";

function Heading(props) {
	return (
		<h1
			className="heading"
			style={{
				textAlign: props.textAlign,
				color: props.color,
				fontSize: props.size,
			}}
		>
			{props.Heading}
		</h1>
	);
}

export default Heading;
