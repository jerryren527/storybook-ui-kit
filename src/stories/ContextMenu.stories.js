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
