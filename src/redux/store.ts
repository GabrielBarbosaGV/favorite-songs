import { combineReducers, createSlice, createStore } from "@reduxjs/toolkit";

export {};

interface State {
    someValue: number
}

const initialState: State = {
    someValue: 0
};

const sliceStub = createSlice({
    name: 'main',
    initialState,
    reducers: {
        incrementValue: (state) => {
            state.someValue += 1;
        }
    }
});

const reducer = sliceStub.reducer;

const store = createStore(reducer);

export default store;