// Types
interface IProducts {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
}

interface IButton {
	cart?: boolean;
	wishlist?: boolean;
	buy?: boolean;
	buttonStyle?: string;
	id: number;
	btnText?: boolean;
	btnContainerStyle?: string;
}

// Define a type for the slice state

interface ButtonsState {
	id: number[];
}

interface notificationState {
	text: string;
}

interface ISidebar {
	propStyles?: string;
}

interface INotFound {
	text?: string;
}
