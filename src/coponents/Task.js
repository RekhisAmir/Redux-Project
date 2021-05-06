import React from 'react'
import { completeTask, deleteTask } from '../redux/action/action';
import {useDispatch} from 'react-redux'
import EditTask from './EditTask'

const Task = ({el}) => {
    const dispatch = useDispatch();
    return (
        <div className="task">
        <h5>{el.action}</h5>
        <div>
        <button onClick={()=>dispatch(completeTask(el.id))}>{el.isdone? "undo" : "complete"}</button>
        <EditTask task={el}/>
        <button onClick={()=>dispatch(deleteTask(el.id))}>Delete</button>
        </div>
        </div>
    )
}

export default Task
