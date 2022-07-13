import {combineReducers} from "redux";
import FReducer from "./reducer";
import movieReducerTh from "./movieReducerT";

export default combineReducers ({
    favoritereducer : FReducer,
    MovieReducer : movieReducerTh,
})