// create a slices
// initialize the initial state
//slice -- name, mention intial state, action

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {},
});

export default cartSlice.reducer;
