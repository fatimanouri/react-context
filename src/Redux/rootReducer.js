import { combineReducers } from "redux";
import Increase from "./increase";

const rootReducer =combineReducers({
            counter:Increase,
})
export default rootReducer;