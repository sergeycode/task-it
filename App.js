import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { todosReducer } from './store/reducers';

import App from './components/App';

const rootReducer = combineReducers({
    todos: todosReducer,
});
const store = createStore(rootReducer);

export default function () {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
