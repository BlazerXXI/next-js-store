import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

// Define a type for the slice state

// Define the initial state using that type
const initialState: notificationState = {
	text: "",
};

export const notificationSlice = createSlice({
	name: "notification",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setNotification: (state, action: PayloadAction<string>) => {
			state.text = action.payload;
		},
	},
});

// Other code such as selectors can use the imported `RootState` type
export const selectNotification = (state: RootState) => state.notification.text;

export const { setNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
