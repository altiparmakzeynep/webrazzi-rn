import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import newsDetailReducer from "./newsDetailReducer";

export default combineReducers({
    homeReducer,
    newsDetailReducer
})