import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItem: [],
    },
    reducers: {
        add_To_Cart: (state = initialState, action) => {
            const existItem = state.cartItem.find((item) => item.id === action.payload.id)
            console.log("existItem", existItem);

            if (existItem) {
                return {
                    ...state,
                    cartItem: state.cartItem.map(item => item.product === existItem.product ? action.payload : item),
                }
            } else {
                return {
                    ...state,
                    cartItem: [...state.cartItem, action.payload]
                }

            }

            // if (!existItem) {
            //     state.push(action.payload)
            // }
            // state.Cartitem.push(action.payload)

        },

        remove_To_Cart: (state = initialState, action) => {
            return {
                ...state,
                cartItem: state.cartItem.filter((item) => item.id !== action.payload.id)
            }
            // return [...state.cartItem, state.cartItem.filter((item) => item.id !== action.payload)];
        },

        empty_Cart: () => {
            return []
        },
    }
})

export const { add_To_Cart, remove_To_Cart, empty_Cart } = cartSlice.actions
export default cartSlice.reducer