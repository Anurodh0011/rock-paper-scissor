import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducerSlice/counterSlice'
import boxSlice from './reducerSlice/boxSlice'

export default configureStore({
    reducer: {
        counter: counterSlice,
        box: boxSlice
    }
})