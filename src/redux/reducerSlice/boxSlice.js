import { createSlice } from '@reduxjs/toolkit'

export const boxSlice = createSlice({
    name: 'box',
    initialState: {
        width: 40,
        height: 40,
        backgroundColor: 'red',
        borderRadius: 0,
        padding: 20,
        margin: 20,
        marginLeft: 50,
        marginTop: 50,
    },
    reducers: {
        changeShape: (state, action) => {
            if (state.borderRadius == '50%') {
                state.borderRadius = 0
            } else {
                state.height = state.width
                state.borderRadius = '50%'
            }
        },
        increaseWidth: (state, action) => {
            state.width++
        },
        changeBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload
        },
        moveRight: (state, action) => {
            state.marginLeft = state.marginLeft + 20
        },
        moveLeft: (state, action) => {
            state.marginLeft = state.marginLeft - 20
        },
        moveUp: (state, action) => {
            state.marginTop = state.marginTop - 20
        },
        moveDown: (state, action) => {
            state.marginTop = state.marginTop + 20
        },
    }
})


export const { changeShape, increaseWidth, changeBackgroundColor, moveRight, moveLeft, moveUp, moveDown } = boxSlice.actions

export default boxSlice.reducer