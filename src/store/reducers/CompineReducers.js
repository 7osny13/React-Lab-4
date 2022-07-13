
import {combineReducers} from "redux";
import LangReducer from "../reducers/LangReducer"
import CounterReducer from "./CounterReducer";

export default combineReducers ({
        langCompine: LangReducer,
        counter: CounterReducer
})

// state.lang.lang