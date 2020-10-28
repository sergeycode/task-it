import React from 'react';
import { useDispatch } from 'redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import AddTodoModalScreen from '../screens/AddTodoModalScreen';

const MainStack = createStackNavigator();
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

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            {/* <Tab.Screen
                name="Main"
                component={MainStackScreen}
                options={{ title: 'Home' }}
            /> */}
            <Tab.Screen
                name="All"
                component={MainStackScreen}
                listeners={() => ({
                    tabPress: e => {
                        e.preventDefault();
                        filterSelect(FILTERS.ALL);
                    },
                })}
            />
            <Tab.Screen
                name="TodoModal"
                component={AddTodoModalScreen}
                listeners={({ navigation }) => ({
                    tabPress: e => {
                        e.preventDefault();
                        navigation.navigate('AddTodoModal');
                    },
                })}
                options={{
                    title: 'Add',
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigation;
