import { createSlice } from "@reduxjs/toolkit";

const uiState = {
    cartIsVisible: false,
    notification: null
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: uiState,
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification(state, action) {
            state.notification = {
                title: action.payload.title,
                message: action.payload.message,
                status: action.payload.status
            }
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;