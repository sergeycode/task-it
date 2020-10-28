import 'react-native-gesture-handler';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { todosReducer, filterReducer } from './store/reducers';

import { composeWithDevTools } from 'redux-devtools-extension';
import AppNavigation from './navigation/AppNavigation';

const rootReducer = combineReducers({
    todos: todosReducer,
    filter: filterReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default function () {
    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    );
}
