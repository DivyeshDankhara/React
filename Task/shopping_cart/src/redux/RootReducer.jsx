import { combineReducers } from "redux";
import { addToCartReducer } from "./Reducer";

export const rootReducer = combineReducers({
    Add_to_cart: addToCartReducer,
})