import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import AddTodoModalScreen from '../screens/AddTodoModalScreen';

import { onFilterSelect } from '../store/actions';
import { FILTERS } from '../store/selectors';

import Colors from '../constants/Colors';
import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackScreen = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: (
                        <View style={styles.titleContainer}>
                            <Feather
                                name="check-circle"
                                size={24}
                                color={Colors.secondary}
                            />
                            <Text style={styles.titleText}>Task-it</Text>
                        </View>
                    ),
                    headerStyle: {
                        backgroundColor: Colors.primary,
                        shadowOffset: { width: 0, height: 0 },
                        shadowColor: Colors.primaryDark,
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                    },
                    headerTintColor: Colors.white,
                }}
            />
        </MainStack.Navigator>
    );
};

const MainNavigation = () => {
    const dispatch = useDispatch();
    const filterSelect = selectedFilter =>
        dispatch(onFilterSelect(selectedFilter));

    const filter = useSelector(state => state.filter.filter);

    const activeColor = activeFilter =>
        filter === activeFilter ? Colors.secondary : Colors.white;

    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: Colors.primary,
                    borderTopColor: Colors.primaryFade,
                },
                showLabel: false,
            }}
        >
            <Tab.Screen
                name="All"
                component={MainStackScreen}
                listeners={() => ({
                    tabPress: e => {
                        e.preventDefault();
                        filterSelect(FILTERS.ALL);
                    },
                })}
                options={{
                    tabBarIcon: () => (
                        <Feather
                            name="list"
                            size={28}
                            color={activeColor(FILTERS.ALL)}
                        />
                    ),
                }}
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
                options={{
                    tabBarIcon: () => (
                        <Feather
                            name="circle"
                            size={24}
                            color={activeColor(FILTERS.ACTIVE)}
                        />
                    ),
                }}
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
                options={{
                    tabBarIcon: () => (
                        <Feather
                            name="check-circle"
                            size={24}
                            color={activeColor(FILTERS.COMPLETED)}
                        />
                    ),
                }}
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
                    tabBarIcon: () => (
                        <Feather
                            name="plus-circle"
                            size={24}
                            color={Colors.white}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default MainNavigation;

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.white,
        marginLeft: 10,
    },
});
