import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./features/wishlistSlice";
import cartSlice from "./features/cartSlice";
import buySlice from "./features/buySlice";
import notificationSlice from "./features/notificationSlice";
import deleteSlice from "./features/deleteSlice";

export const store = configureStore({
	reducer: {
		wishlist: wishlistSlice,
		cart: cartSlice,
		buy: buySlice,
		delete: deleteSlice,
		notification: notificationSlice,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {cart: cartState, wishlist: wishlistState, buy: buyState}
export type AppDispatch = typeof store.dispatch;
