import React from 'react'
import AddTask from './AddTask'
import Task from './Task'
import {useSelector} from 'react-redux'
import {useState} from 'react' 

const TaskList = () => {
    const taskList = useSelector(state => state.tasks);
    const [filter, setFliter] = useState(false);
    const handleFilter = ()=>setFliter(!filter);
    return (
        <div>
            <AddTask handleFilter={handleFilter} filter={filter}/>
            {
                filter? taskList.filter(item =>item.isdone).map((el,index) => {<Task el={el} index={index}/> })
                    : taskList.map((el,index)=><Task el={el} index={index}/>)
            }
        </div>
    )   
    
}



export default TaskList
