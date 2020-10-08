import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';

const initialState = {
    todos: [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Hey!',
            completed: false,
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Ho!',
            completed: true,
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: `Let's Go`,
            completed: false,
        },
    ],
};

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat({
                    id: uuidv4(),
                    title: action.title,
                    completed: false,
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
