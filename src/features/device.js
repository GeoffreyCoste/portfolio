import {
    createSlice
} from '@reduxjs/toolkit';

let initialState;
let width = window.innerWidth;

if (width < 768) {
    initialState = 'small';
} else if (width >= 768 && width < 1024) {
    initialState = 'medium';
} else {
    initialState = 'large';
}


const deviceSlice = createSlice({
    name: 'device',
    initialState: initialState,
    reducers: {
        set: (state, action) => {
            return action.payload
        },
    },
});

const {
    actions,
    reducer
} = deviceSlice;

export const {
    set
} = actions;

export default reducer;