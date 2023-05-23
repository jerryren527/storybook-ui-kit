import Files from "../components/Files";

export default {
	title:"components/Files",
	component: Files,
	tags: ["autodocs"],
	argTypes: {
		state: {
			options: ['default', 'drag', 'uploading', 'uploaded', 'error', 'network-error'],
			control: {type: 'radio'}
		},
		icon: {
			options: ["🦁.svg", ""],
			control: {type: 'radio'}
		}
	}
};

export const Default = {
	args: {
		percent: 66,
		file: "myfile.txt",
	}
};

export const CustomIcon = {
	args: {
		...Default.args,
		icon: "🦁.svg"
	},
};

export const Drag = {
	args: {
		...Default.args,
		state: "drag",
	},
};

export const Uploading = {
	args: {
		...Default.args,
		state: 'uploading',
		percent: 66
	}
}

export const Uploaded = {
	args: {
		...Default.args,
		state: 'uploaded',
		file: "my/filepath.txt",
	}
}

export const Error = {
	args: {
		state: 'error',
	}
}
export const NetworkError = {
	args: {
		...Default.args,
		state: 'network-error',
	}
}