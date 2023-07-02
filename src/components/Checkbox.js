import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Checkbox.css";

export default function Checkbox({ text, indeterminate, error, disabled }) {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	let mark;
	if (isChecked) {
		if (indeterminate) {
			mark = (
				<svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="12" height="2" rx="1" fill="white" />
				</svg>
			);
		} else {
			mark = (
				<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M2.43762 6.64248C2.1635 6.41757 1.80629 6.29554 1.43766 6.30087C1.06903 6.3062 0.716246 6.43849 0.450066 6.67121C0.183887 6.90393 0.0240054 7.21987 0.00249123 7.55564C-0.0190229 7.89142 0.0994217 8.22219 0.334067 8.48162L3.57705 11.5868C3.71283 11.7168 3.87598 11.8204 4.05672 11.8913C4.23745 11.9623 4.43205 11.9993 4.62883 12C4.82456 12.001 5.01853 11.9662 5.19921 11.8975C5.37989 11.8288 5.54359 11.7277 5.68061 11.6002L15.5849 2.27119C15.7191 2.14518 15.8249 1.99628 15.8961 1.83298C15.9673 1.66968 16.0026 1.49518 15.9999 1.31945C15.9971 1.14372 15.9565 0.970196 15.8803 0.80879C15.8041 0.647384 15.6938 0.501255 15.5556 0.378745C15.4175 0.256235 15.2543 0.159744 15.0753 0.094782C14.8963 0.0298196 14.705 -0.00234234 14.5124 0.000132731C14.3198 0.0026078 14.1296 0.0396712 13.9527 0.109207C13.7758 0.178743 13.6156 0.279389 13.4813 0.405399L4.64344 8.74816L2.43762 6.64248Z"
						fill="currentColor"
					/>
				</svg>
			);
		}
	}
	return (
		<div className="checkbox-container">
			<label htmlFor="checkbox-input"></label>
			<div
				id="checkbox-input"
				className={[
					"checkbox",
					isChecked && "checkbox-checked",
					indeterminate && "checkbox-indeterminate",
					error && "checkbox-error",
					disabled && "checkbox-disabled",
				]
					.filter(Boolean)
					.join(" ")}
				onClick={handleCheckboxChange}
				disabled={disabled ? true : false}
			>
				{mark && mark}
			</div>
			<span
				className={[error && "checkbox-error-text", disabled && "checkbox-disabled-text"].filter(Boolean).join(" ")}
			>
				{text}
			</span>
		</div>
	);
}

Checkbox.propTypes = {
	text: PropTypes.string,
	indeterminate: PropTypes.bool,
	error: PropTypes.bool,
	disabled: PropTypes.bool,
};
