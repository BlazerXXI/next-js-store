import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

// Define a type for the slice state

// Define the initial state using that type
const initialState: ButtonsState = {
	id: [],
};

export const deleteSlice = createSlice({
	name: "deleteBtn",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setDelete: (state, action: PayloadAction<number>) => {
			state.id.push(action.payload);
		},
	},
});

// Other code such as selectors can use the imported `RootState` type
export const selectDelete = (state: RootState) => state.delete.id;

export const { setDelete } = deleteSlice.actions;

export default deleteSlice.reducer;
