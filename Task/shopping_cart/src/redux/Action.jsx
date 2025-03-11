import { ADD_ITEM, DELETE_ITEM } from "./Constant";

export const add_item = (cart) => {
    return {
        type: ADD_ITEM,
        info: "add_item",
        payload: cart,
    }
}
export const Remove_item = (id) => {


    return {
        type: DELETE_ITEM,
        info: "delete item",
        payload: id,


    }
}