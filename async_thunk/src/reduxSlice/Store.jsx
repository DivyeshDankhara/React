import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice"
import cartReducer from "./Cart_Slice"
import wishlistReducer from "./Wishlist_Slice"

const Store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        wishlist: wishlistReducer
    }
})

export default Store