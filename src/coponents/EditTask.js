import React from 'react'
import Modal from 'react-modal';
import {useDispatch} from 'react-redux'
import {editTask} from '../redux/action/action'
import {useState} from 'react'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  Modal.setAppElement('#root');

const EditTask = ({task}) => {
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState(task.action);
    const [modalIsOpen, setIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const editedTask = {...task, action: newTask};
        dispatch(editTask(editedTask));
        closeModal();
      };

      function openModal() {
        setIsOpen(true);
      }

      function closeModal(){
        setIsOpen(false);
      }

    return (
        <div>
        <button onClick={openModal}>edit</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
        <button type="submit">Submit</button>
        <button onClick={closeModal}>close</button>
        </form>
        </Modal>
        </div>
    )
}

export default EditTask
