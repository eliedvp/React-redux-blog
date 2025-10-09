import {createStore} from "redux";
import {taskReducer} from "../reducers/taskReducers";

export const store = createStore(
    taskReducer ,
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()

);