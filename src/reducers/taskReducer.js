import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK, UPDATE_TASK } from "../actions/TodoActions";

const initialState = {
    tasks: [],
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload] 
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.id)
            }
        case COMPLETE_TASK:
            return{
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? { ...task, completed: !task.completed } : task)
            }
        case EDIT_TASK:
            return{
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload.id ? action.payload : task)
            }
        case UPDATE_TASK:
            return{
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload.id ? action.payload : task)
            }
    
        default:
            return state
    }
}

export default taskReducer