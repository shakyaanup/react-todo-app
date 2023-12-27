import React from 'react';
import './style.scss';

const Task = ({ task, onComplete, onDelete, onEdit }) => {

  return (
    <div className="todo-list-item">

      <div className="todo-list-left">
        <div className="checkbox-holder">
          <input 
            type="checkbox"
            checked={task.completed}
            onChange={() => onComplete(task.id)} 
          />
          <span></span>
        </div>
        <span className="task-title" style={{textDecoration: task.completed ? 'line-through' : 'none'}}>{task.text}</span>
      </div>

      <div className="btn-holder">
        {
          !task.completed ?
          <button className="btn-edit" onClick={() => onEdit(task)}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M10.2733 1.25C10.6826 1.25 11.0748 1.41339 11.3613 1.70214L13.2994 3.6402C13.5879 3.92875 13.75 4.32011 13.75 4.72817C13.75 5.13624 13.5879 5.5276 13.2994 5.81615L6.22344 12.8898C5.78689 13.3934 5.16806 13.7028 4.45913 13.7515H1.25V13.1265L1.25203 10.4921C1.30527 9.83302 1.61167 9.22021 2.07906 8.80839L9.18462 1.70289C9.47274 1.41302 9.86459 1.25 10.2733 1.25ZM4.41499 12.503C4.74888 12.4794 5.05968 12.324 5.30925 12.0385L10.0354 7.31232L7.68895 4.96575L2.93506 9.71849C2.68184 9.94245 2.52519 10.2558 2.5 10.5424V12.5018L4.41499 12.503ZM8.57294 4.08197L10.9193 6.42844L12.4155 4.93226C12.4696 4.87814 12.5 4.80472 12.5 4.72817C12.5 4.65163 12.4696 4.57821 12.4155 4.52409L10.4757 2.58429C10.4222 2.53034 10.3493 2.5 10.2733 2.5C10.1974 2.5 10.1245 2.53034 10.071 2.58429L8.57294 4.08197Z" fill="black"/></svg>
          </button>: ''
        }
        <button className="btn-delete" onClick={() => onDelete(task.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M12.5 11.875V5.625C13.1904 5.625 13.75 5.06536 13.75 4.375V3.125C13.75 2.43464 13.1904 1.875 12.5 1.875H2.5C1.80964 1.875 1.25 2.43464 1.25 3.125V4.375C1.25 5.06536 1.80964 5.625 2.5 5.625V11.875C2.5 12.5654 3.05964 13.125 3.75 13.125H11.25C11.9404 13.125 12.5 12.5654 12.5 11.875ZM3.75 11.875V5.625H11.25V11.875H3.75ZM5.625 7.5V6.25H9.375V7.5H5.625ZM2.5 4.375V3.125H12.5V4.375H2.5Z" fill="black"/></svg>
        </button>
      </div>

    </div>
  )
}

export default Task;
