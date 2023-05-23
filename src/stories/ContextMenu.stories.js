import ContextMenu from "../components/ContextMenu";

export default {
	title:"components/ContextMenu",
	component: ContextMenu,
	tags: ["autodocs"],
	args: {
		items: [
			{ id: 1, name: "Russia" },
			{ id: 2, name: "USA" },
			{ id: 3, name: "Germany" },
		],
	},
};

// You don't need this Template nor bind({}) in CSF 3 (Component Story Format 3). Instead use the simple args syntax, which implies the same thing.
// const Template = (args) => <ContextMenu {...args} />;

export const Default = {
	args: {
		multiple: false,
	},
};

export const Multiple = {
	args: {
		multiple: true,
	},
};
