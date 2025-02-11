import { BUY_ITEM } from "./Constant";

const initialState1 = 20
const initialState2 = 40

const reducer = (state = initialState1 , action) => {
  switch(action.type){
    case BUY_ITEM:return state - 1
    default: return state
  }
}

export const demoReducer = (state = initialState2 , action) => {
  switch(action.type){
    case BUY_ITEM:return state - 1
    default: return state
  }
} 

export default reducer