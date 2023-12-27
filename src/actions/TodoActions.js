export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export const addTaskAction = (taskInput) => ({
    type: ADD_TASK,
    payload: {
        id: Date.now(),
        text: taskInput,
        completed: false
    }
});

export const deleteTaskAction = (taskId) => ({
    type: DELETE_TASK,
    payload: {
        id: taskId
    }
});

export const completeTaskAction = (taskId) => ({
    type: COMPLETE_TASK,
    payload: {
        id: taskId
    }
});

export const editTaskAction = (task) => ({
    type: EDIT_TASK,
    payload: task
});

export const updateTaskAction = (updatedTask) => ({
    type: UPDATE_TASK,
    payload: updatedTask
});