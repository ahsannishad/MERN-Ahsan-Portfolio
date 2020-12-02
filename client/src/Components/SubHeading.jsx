import React from "react";

function SubHeading(props) {
	return (
		<p
			className="sub-heading"
			style={{ textAlign: props.textAlign, color: props.color }}
		>
			{props.SubHeading}
		</p>
	);
}

export default SubHeading;
