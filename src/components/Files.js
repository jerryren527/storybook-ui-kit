import React from "react";
import PropTypes from "prop-types";
import "../styles/Files.css";

export default function Files({ state = "default", percent, file, icon }) {

	let titleToRender;
	let messageToRender;
	let iconToRender;
	if (state === "uploaded") {
		titleToRender = <p className="files__filename">{file}</p>
		messageToRender = <p className="files__message--delete">Delete file</p>
		iconToRender = <div className="files__icon--icon"><img src={`${process.env.PUBLIC_URL}/file.svg`} alt="My SVG file" /></div>
	} else if (state === "uploading") {
		titleToRender = <p>Downloading</p>
		messageToRender = <p>PNG, jpg, gif files up to 10 MB in size are available for download</p>
		iconToRender = <div className="files__icon--percent">{percent && percent}%</div>
	} else if (state === "error" || state === 'network-error') {
		titleToRender = <p><span id="files__title--colored">Select a file</span> or drag in form</p>
		messageToRender = state === 'error' ? (<p className="files__message--error">The file weight is more than 10 MB</p>) : (<p className="files__message--error">An error has occurred, upload the file again.</p>)
		if (state === 'network-error') {
			iconToRender = <div className="files__icon--percent">{percent && percent}%</div>
		}
	} else {
		titleToRender = <p className="files__title"><span id="files__title--colored">Select a file</span> or drag in form</p>
		messageToRender = <p>PNG, jpg, gif files up to 10 MB in size are available for download</p>
		if (icon) {
			iconToRender = <div className="files__icon--icon"><img src={`${process.env.PUBLIC_URL}/${icon}`} alt="My SVG file" /></div>
		}
	}
	return (
		<>
			{state === "drag" ? (
				<div className="drag_container">
					<img src={`${process.env.PUBLIC_URL}/file-white.svg`} alt="My SVG file" />
				</div>
			) : (
				<div className="files__container">
					<div className="files__content">
						<div className="files__content--left">
							<div className="files__title">
								{titleToRender}
							</div>
							<div className="files__message">
								{messageToRender}
							</div>
						</div>
						<div className="files__content--right">
							<div className="files__icon">
								{iconToRender}
							</div>
						</div>
					</div>
					{((state === 'uploading' || state === 'network-error') && percent > 0) && (<div className="files__container__progress-bar"
						style={{width: `${percent}%`}}
						>&nbsp;</div>)}
					
				</div>
			)}
		</>
	);
}

Files.propTypes = {
	state: PropTypes.string,
	file: PropTypes.string,
	icon: PropTypes.string,
};

