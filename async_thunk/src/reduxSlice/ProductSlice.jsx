import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

export const fetchProduct = createAsyncThunk('product/fetchProduct', async () => {
    const response = await axios.get('http://localhost:3000/Products');

    return response.data;
})

const product_Slice = createSlice({
    name: "product",
    initialState: {
        item: [],
        status: "OK!",
        eror: null
    },
    extraReducers: (userBuilder) => {
        userBuilder
            .addCase(fetchProduct.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.item = action.payload
            })
            .addCase(fetchProduct.rejected, (state) => {
                state.status = "failed";
            })
    }
})

export default product_Slice.reducer