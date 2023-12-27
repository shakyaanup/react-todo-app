import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import Task from '../Task/Task';
import { addTaskAction, deleteTaskAction, completeTaskAction, editTaskAction, updateTaskAction } from '../../actions/TodoActions';


const TodoList = () => {
  const [ taskInput, setTaskInput ] = useState('');
  const [ error, setError ] = useState(false);
  const [ updateData, setUpdateData ] = useState('');
  const [ showUpdateForm, setShowUpdateForm ] = useState(false);

  const tasks = useSelector((state) => state.tasks.tasks);

  const dispatch = useDispatch();

  const addTask = (event) => {
    event.preventDefault();
    if(taskInput.trim() === '') {
      setError('Please add a task.');
      return;
    }
    dispatch(addTaskAction(taskInput));
    setTaskInput('');
  };

  const deleteTask = (taskId) => {
    dispatch(deleteTaskAction(taskId));
  };

  const completeTask = (taskId) => {
    dispatch(completeTaskAction(taskId));
  };

  const editTask = (task) => {
    dispatch(editTaskAction(task));
    setUpdateData({
      id: task.id,
      text: task.text,
      completed: task.completed,
    });
    setShowUpdateForm(true);
    setError(false);
  };

  const handleInputChnage = (e) => {
    setTaskInput(e.target.value);
    setError(false);
  }

  const handleUpdateInputChange = (e) => {
    setUpdateData({...updateData, text: e.target.value});
    setError(false);
  }

  const updateTask = (event) => {
    event.preventDefault();
    dispatch(updateTaskAction(updateData)); 
    setUpdateData('');
    setShowUpdateForm(false);
  };

  const handleCancle = () => {
    setUpdateData('');
    setShowUpdateForm(false);
    setError(false);
  }

  return (
    <div className="wrapper">
      <div className="holder">

        <h1 className="mail-title">Todo list</h1>
        { !showUpdateForm &&  
          <form 
            className={error ? 'add-form error' : 'add-form'} 
            onSubmit={addTask}
          >
            <input 
              type="text" 
              placeholder='write your todo'
              value={taskInput}
              onChange={handleInputChnage}
            />
            <button className="btn-add">Add</button>
          </form>
          
        }
        
        { showUpdateForm &&
          <form className="add-form" onSubmit={updateTask}>
            <input 
              type="text"
              value={ updateData.text } 
              onChange={handleUpdateInputChange}
            />
            <button className="btn-add">Update</button>
            <button className="btn-add btn-cancle" onClick={handleCancle}>Cancle</button>
          </form>
        }

        {error && <p className="error-message">{error}</p>}

        <div className="todolist-wrapper">
          {tasks && tasks.map(task => (
            <Task 
              key={task.id}
              task={task}
              onComplete={completeTask}
              onDelete={deleteTask}
              onEdit={editTask}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default TodoList;
