import { ADD_TASK,TOGGLE_TASK,EDIT_TASK,SET_FILTER } from "../constants/taskConstants";

let nextId = 1;

export const addTask = (description) => ({
    type: ADD_TASK,
    payload:{
        id: nextId++,
        description,
        isDone: false,
    },
});

export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload : id,
});

export const editTask = (id,newDesc) =>({
    type: EDIT_TASK,
    payload:{
        id,
        newDesc
    }
  
});

export const setFilter = (filter) =>({
    type: SET_FILTER,
    payload: filter,
});

