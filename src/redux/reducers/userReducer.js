import { createSlice} from "@reduxjs/toolkit";

export const userReducer = createSlice({
    name: 'user',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
            console.log('redux: ', state.value);
        },
        decrement: (state) => {
            state.value -= 1;
            console.log('redux:', state.value);
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
})

export const { increment, decrement, incrementByAmount } = userReducer.actions;

export default userReducer.reducer;