import Badge from "../components/Badge";

export default {
	title: "Badge",
	component: Badge,
	tags: ["autodocs"],
};

const Template = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: "Primary",
	primary: true,
	white: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: "Secondary",
	primary: false,
	white: false,
};

export const White = Template.bind({});
White.args = {
	label: "White",
	primary: true,
	white: true,
};
