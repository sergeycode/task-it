import { insertTodo, fetchTodos } from '../helpers/db';

export const ADD_TODO = 'ADD_TODO';
export const SET_TODOS = 'SET_TODOS';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const SELECT_FILTER = 'SELECT_FILTER';

// export const addTodo = title => ({ type: ADD_TODO, title });
export const addTodo = (title, completed) => {
    return async dispatch => {
        try {
            const dbResult = await insertTodo(title, completed);
            dispatch({
                type: ADD_TODO,
                todo: {
                    id: dbResult.insertId,
                    title: title,
                    completed: completed,
                },
            });
        } catch (err) {
            console.log(err);
            throw err;
        }
    };
};
export const loadTodos = () => {
    return async dispatch => {
        try {
            const dbResult = await fetchTodos();
            dispatch({ type: SET_TODOS, todos: dbResult.rows._array });
        } catch (err) {
            throw err;
        }
    };
};
export const toggleTodo = id => ({ type: TOGGLE_TODO, id });
export const removeTodo = id => ({ type: REMOVE_TODO, id });
export const onFilterSelect = filter => ({ type: SELECT_FILTER, filter });
