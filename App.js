import 'react-native-gesture-handler';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { todosReducer, filterReducer } from './store/reducers';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { composeWithDevTools } from 'redux-devtools-extension';

import HomeScreen from './screens/HomeScreen';
import AddTodoModalScreen from './screens/AddTodoModalScreen';

const rootReducer = combineReducers({
    todos: todosReducer,
    filter: filterReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackScreen = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Todo List',
                }}
            />
        </MainStack.Navigator>
    );
};

const MainTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Main" component={MainStackScreen} />
            <Tab.Screen
                name="TodoModal"
                component={AddTodoModalScreen}
                listeners={({ navigation }) => ({
                    tabPress: e => {
                        e.preventDefault();
                        navigation.navigate('AddTodoModal');
                    },
                })}
            />
        </Tab.Navigator>
    );
};

export default function () {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStack.Navigator mode="modal" headerMode="none">
                    <RootStack.Screen name="Tabs" component={MainTab} />
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
