import 'react-native-gesture-handler';
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import { todosReducer, filterReducer } from './store/reducers';
import { initDb } from './helpers/db';

import AppNavigation from './navigation/AppNavigation';

initDb();
// .then(() => {
//     console.log('Initialized database');
// })
// .catch(err => {
//     console.log('Initializing db failed');
//     console.log(err);
// });

const rootReducer = combineReducers({
    todos: todosReducer,
    filter: filterReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function () {
    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    );
}
