// Types
type IProducts = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
};

type IButton = {
	cart?: boolean;
	wishlist?: boolean;
	buy?: boolean;
	buttonStyle?: string;
};

type ISidebar = {
	propStyles?: string;
};
