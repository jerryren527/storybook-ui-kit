import Stack from "../components/Stack";

export default {
	title: "Components/Stack",
	component: Stack,
	// Define the type of arguments, set their default value. IDK why defaultValue does not work.
	argTypes: {
		numberOfChildren: {
			type: "number",
			defaultValue: 4, // doesn't work
		},
	},
	tags: ["autodocs"],
};

// create a function that returns our component with args passed into it
const Template = ({ numberOfChildren, ...args }) => (
	<Stack {...args}>
		{[...Array(numberOfChildren).keys()].map((n) => (
			<div
				style={{
					width: "50px",
					height: "50px",
					backgroundColor: "red",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{n + 1}
			</div>
		))}
	</Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
	numberOfChildren: 5,
	direction: "row",
	spacing: 2,
	wrap: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
	numberOfChildren: 5,
	direction: "column",
	spacing: 2,
	wrap: false,
};

export const NoSpacing = Template.bind({});
NoSpacing.args = {
	numberOfChildren: 5,
	direction: "row",
	spacing: 0,
	wrap: false,
};

export const WrapOverFlow = Template.bind({});
WrapOverFlow.args = {
	numberOfChildren: 40,
	direction: "row",
	spacing: 2,
	wrap: true,
};

export const Empty = Template.bind({});
Empty.args = {
	numberOfChildren: 0,
	direction: "row",
	spacing: 2,
	wrap: false,
};
