import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { todosReducer, filterReducer } from './store/reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';

const rootReducer = combineReducers({
    todos: todosReducer,
    filter: filterReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default function () {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
