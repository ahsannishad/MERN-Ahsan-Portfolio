import React from "react";

function SectionImage(props) {
	return (
		<img
			src={props.image}
			loading="lazy"
			alt={props.alt}
			className="section-image"
		></img>
	);
}

export default SectionImage;
