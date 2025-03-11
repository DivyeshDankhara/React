import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlistItem: [],
    },
    reducers: {
        add_To_Wishlist: (state = initialState, action) => {
            const existItem = state.wishlistItem.find((item) => item.id === action.payload.id)
            console.log("existItem", existItem);

            if (existItem) {
                return {
                    ...state,
                    wishlistItem: state.wishlistItem.map(item => item.product === existItem.product ? action.payload : item),
                }
            } else {
                return {
                    ...state,
                    wishlistItem: [...state.wishlistItem, action.payload]
                }

            }

            // if (!existItem) {
            //     state.push(action.payload)
            // }
            // state.Cartitem.push(action.payload)

        },

        remove_To_Wishlist: (state = initialState, action) => {
            return {
                ...state,
                wishlistItem: state.wishlistItem.filter((item) => item.id !== action.payload.id)
            }
            // return [...state.cartItem, state.cartItem.filter((item) => item.id !== action.payload)];
        },

        empty_Wishlist: () => {
            return []
        },
    }
})

export const { add_To_Wishlist, remove_To_Wishlist, empty_Wishlist } = WishlistSlice.actions
export default WishlistSlice.reducer