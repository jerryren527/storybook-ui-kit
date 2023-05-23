import Checkbox from "../components/Checkbox";

export default {
	title:"components/Checkbox",
	component: Checkbox,
	tags: ["autodocs"],
};

export const Default = {
	args: {
		text: "Text",
		indeterminate: false,
		disabled: false,
		error: false,
	},
};

export const Unselected = {
	args: {
		...Default.args,
	},
};

export const Selected = {
	args: {
		...Default.args,
		checked: true,
	},
};

export const Indeterminate = {
	args: {
		...Default.args,
		indeterminate: true,
	},
};

export const Error = {
	args: {
		...Default.args,
		error: true,
	},
};

export const Disabled = {
	args: {
		...Default.args,
		disabled: true,
	},
};
