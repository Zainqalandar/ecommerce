import { createSlice } from "@reduxjs/toolkit";
import Alldata from "./Alldata";

const DataSlice = createSlice({
    name: 'Ecommerce',
    initialState: {
        Items: [],
        Storecards: Alldata,
    },
    reducers: {

    }

})

export default DataSlice.reducer