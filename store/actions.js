export const ADD_TODO = 'ADD_TODO';

export const addTodo = title => ({ type: ADD_TODO, title });
export const removeTodo = id => ({ type: ADD_TODO, id });
