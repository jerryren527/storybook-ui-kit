import Button from "../components/Button";

export default {
	title:"components/Button",
	component: Button,
	tags: ["autodocs"],
	parameters: {
		backgrounds: {
			values: [
				{ name: "white", value: "#fff" },
				{ name: "purple", value: "hsla(257, 74%, 57%, 1)" },
			],
		},
	},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: "Primary",
	primary: true,
	white: false,
	flat: false,
	dark: false,
	disabled: false,
	loader: false,
};
export const Secondary = Template.bind({});
Secondary.args = {
	...Primary.args,
	label: "Secondary",
	primary: false,
};

export const Flat = Template.bind({});
Flat.args = {
	...Primary.args,
	label: "Flat",
	flat: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	...Primary.args,
	disabled: true,
};

export const Loader = Template.bind({});
Loader.args = {
	...Primary.args,
	loader: true,
};
