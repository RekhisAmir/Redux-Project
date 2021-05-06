import React from 'react'
import {addTask, deleteTask, completeTask, editTask} from '../action/action'

const init = {
    tasks : [{id:Math.random(), action:"wake up", isdone:true}],
};



const reducer = (state = init, action) => {
    switch (action.type) {
        case addTask.type:
            return {
                ...state,
                tasks : [...state.tasks,addTask.payload],
            };
        case deleteTask.type:
            return {
                ...state,
                tasks : state.tasks.filter(elt => elt.id!==action.payload.id),
            };
        case editTask.type:
            return {
                ...state,
                tasks : state.tasks.map(elt => elt.id === editTask.payload.id? editTask.payload : elt),
            };
        case completeTask.type:
            return {
                ...state,
                tasks : state.tasks.map(elt => elt.id === completeTask.payload.id? {...elt, isdone:!elt.isdone} :elt),
            };
        default:
            return state;
    }
};

export default reducer
