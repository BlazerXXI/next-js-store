import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

// Define a type for the slice state

// Define the initial state using that type
const initialState: ButtonsState = {
	id: [],
};

export const buySlice = createSlice({
	name: "buy",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setBuy: (state, action: PayloadAction<number>) => {
			state.id.push(action.payload);
		},
	},
});

// Other code such as selectors can use the imported `RootState` type
export const selectBuy = (state: RootState) => state.buy.id;

export const { setBuy } = buySlice.actions;

export default buySlice.reducer;
