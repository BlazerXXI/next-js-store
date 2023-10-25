import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./features/wishlistSlice";
import cartSlice from "./features/cartSlice";
import buySlice from "./features/buySlice";

export const store = configureStore({
	reducer: {
		wishlist: wishlistSlice,
		cart: cartSlice,
		buy: buySlice,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {cart: cartState, wishlist: wishlistState, buy: buyState}
export type AppDispatch = typeof store.dispatch;
