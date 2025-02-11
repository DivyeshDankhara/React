import { combineReducers } from "redux";
import reducer , {demoReducer} from "./Reducer";


const rootReducer = combineReducers({
reducer1:reducer,
reducer2:demoReducer
})
export default rootReducer