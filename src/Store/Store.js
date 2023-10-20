import { configureStore } from '@reduxjs/toolkit'
import DataSlice from './DataSlice'

const store = configureStore({
    reducer: {
        store: DataSlice
    }
})

export default store