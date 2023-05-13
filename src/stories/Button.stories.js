import Button from "../components/Button";

export default {
	title: "Components/Button",
	component: Button,
	// Define the type of args. And to define actions, such as for onClick. Button component is passed a event halder called 'handleClick'. The value of action can be any custom string.
	argTypes: { handleClick: { action: "handleClick" } },
	tags: ["autodocs"],
};

// create a function that returns our component with args passed into it
const Template = (args) => <Button {...args} />;

// export a function that returns our component
// export const Red = () => <Button label="Press me" backgroundColor="red" />;

// Copy the Template function with .bind({})
export const Red = Template.bind({});
Red.args = {
	backgroundColor: "red",
	label: "Press Me",
	size: "md",
};

export const Green = Template.bind({});
Green.args = {
	backgroundColor: "green",
	label: "Press Me",
	size: "md",
};
