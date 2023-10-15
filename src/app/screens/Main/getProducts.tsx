import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

export const getProducts = {
	getLimited: async () => {
		const { data } = await axios.get(API_URL + "?limit=6");
		return data;
	},
	getAll: async () => {
		const { data } = await axios.get(API_URL);
		return data;
	},
};
