import React from 'react';
import { useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import AddTodoModalScreen from '../screens/AddTodoModalScreen';

import { onFilterSelect } from '../store/actions';
import { FILTERS } from '../store/selectors';

import Colors from '../constants/Colors';
// import { LinearGradient } from 'expo-linear-gradient';

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
                    headerStyle: {
                        backgroundColor: Colors.primary,
                        shadowOffset: { width: 0, height: 0 },
                        shadowColor: Colors.primaryDark,
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                    },
                    headerTintColor: '#fff',
                }}
            />
        </MainStack.Navigator>
    );
};

const MainNavigation = () => {
    const dispatch = useDispatch();
    const filterSelect = selectedFilter =>
        dispatch(onFilterSelect(selectedFilter));
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
                name="Active"
                component={MainStackScreen}
                listeners={() => ({
                    tabPress: e => {
                        e.preventDefault();
                        filterSelect(FILTERS.ACTIVE);
                    },
                })}
            />
            <Tab.Screen
                name="Completed"
                component={MainStackScreen}
                listeners={() => ({
                    tabPress: e => {
                        e.preventDefault();
                        filterSelect(FILTERS.COMPLETED);
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

export default MainNavigation;
