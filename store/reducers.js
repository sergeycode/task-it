import {
    ADD_TODO,
    SET_TODOS,
    TOGGLE_TODO,
    REMOVE_TODO,
    SELECT_FILTER,
} from './actions';
import { FILTERS } from './selectors';

const initialState = {
    todos: [],
    filter: FILTERS.ALL,
};

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return {
                todos: action.todos.map(todo => todo),
            };
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat({
                    id: action.todo.id.toString(),
                    title: action.todo.title,
                    completed: action.todo.completed,
                }),
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id),
            };

        default:
            return state;
    }
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_FILTER:
            return {
                ...state,
                filter: action.filter,
            };
        default:
            return state;
    }
};
