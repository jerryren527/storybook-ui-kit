import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Badge.css";

export default function Badge({ label, primary, white }) {
	return (
		<button
			className={["badge", primary ? "badge--primary" : "badge--secondary", white && "badge--white"]
				.filter(Boolean)
				.join(" ")}
		>
			{label}
		</button>
	);
}

Badge.propTypes = {
	label: PropTypes.string.isRequired,
	primary: PropTypes.bool,
	white: PropTypes.bool,
};
