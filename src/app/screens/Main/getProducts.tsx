import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

export const getProducts = {
	async getAll() {
		const { data } = await axios.get<IProducts[]>(API_URL);
		return data;
	},

	async getLimited() {
		const { data } = await axios.get<IProducts[]>(API_URL + "?limit=6");
		return data;
	},
};
