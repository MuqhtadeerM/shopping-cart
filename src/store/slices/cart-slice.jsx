// create a slices
// initialize the initial state
//slice -- name, mention intial state, action

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addCart(state, action) {
			console.log(action);
			state.push(action.payload);
		},

		removeFromCart(state, action) {
			return state.filter((item) => item.id !== action.payload);
		},
	},
});

export const { addCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
