import 'react-native-gesture-handler';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { todosReducer, filterReducer } from './store/reducers';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { composeWithDevTools } from 'redux-devtools-extension';

import AddTodoModalScreen from './screens/AddTodoModalScreen';

import { FILTERS } from './store/selectors';

import MainNavigation from './navigation/MainNavigation';

const rootReducer = combineReducers({
    todos: todosReducer,
    filter: filterReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

const RootStack = createStackNavigator();

export default function () {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStack.Navigator mode="modal" headerMode="none">
                    <RootStack.Screen name="Tabs" component={MainNavigation} />
                    <RootStack.Screen
                        name="AddTodoModal"
                        component={AddTodoModalScreen}
                        options={{ animationEnabled: true }}
                    />
                </RootStack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
