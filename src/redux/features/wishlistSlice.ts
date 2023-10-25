import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

// Define the initial state using that type as an array
const initialState: ButtonsState = {
	id: [],
};

export const wishlistSlice = createSlice({
	name: "wishlist",
	initialState, // Use the initial state as defined above
	reducers: {
		setWishlist: (state, action: PayloadAction<number>) => {
			state.id.push(action.payload);
		},
	},
});

// Export the action creator
export const { setWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;

// Update the selector to correctly access the id array
export const selectWishlist = (state: RootState) => state.wishlist.id;
