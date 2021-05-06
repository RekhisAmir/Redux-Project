import React from 'react'
import {useDispatch} from 'react-redux'
import { addTask } from '../redux/action/action';
import {useState} from 'react'

const AddTask = ({handleFilter,filter})=> {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const handleChange = (e) => setText(e.target.value);
    const handleAdd = dispatch(addTask({id:Math.random(), action: "text", isdone: false}));
    return (
        <div>
        <h1>Our to-do list</h1>
            <input type="text" value={text} placeholder="Enter todo action" onChange={handleChange}/>
            <div>
            <button type="submit" onClick={handleAdd}>Add</button>
            <button onClick={handleFilter}>{filter? "all" : "filter"}</button>
            </div>
        </div>
    )
}

export default AddTask
