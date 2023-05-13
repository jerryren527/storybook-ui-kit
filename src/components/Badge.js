import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Badge.css";

export default function Badge({ label, primary, white }) {
	// The filter(Boolean) method is used to remove any falsy values (i.e. undefined, null, false, 0, NaN, or "") from the array of class names.
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
