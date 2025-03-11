import { ADD_ITEM, DELETE_ITEM } from "./Constant";

export const addToCartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            console.log("state", state);
            return [...state, action.payload]

        case DELETE_ITEM:
            return state.filter((state) => state.id !== action.payload)


        default: return state
    }
}

