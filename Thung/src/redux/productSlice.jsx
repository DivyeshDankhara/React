import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchProducts = createAsyncThunk("products/fetchProducts" , async () => {
    const response = await axios.get('http://localhost:3000/profile')
    return response.data;
})

const productSlice = createSlice({
    name:"products",
    initialState:{
        items:[],
        status:"idle",
        error:null,
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchProducts.pending , (state) => {
            state.status = "loading";
        })
        .addCase(fetchProducts.fulfilled , (state , action) => {
            state.status = "succeeded";
            state.items = action.payload
        })
        .addCase(fetchProducts.rejected , (state) => {
            state.status = "failed";
        })
    }
})

export default productSlice.reducer
