import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

// Define a type for the slice state

// Define the initial state using that type
const initialState: ButtonsState = {
	id: [],
};

export const cartSlice = createSlice({
	name: "cart",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setCart: (state, action: PayloadAction<number>) => {
			state.id.push(action.payload);
		},
	},
});

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.id;

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
