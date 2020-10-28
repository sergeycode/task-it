import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddTodoModalScreen from '../screens/AddTodoModalScreen';

import MainNavigation from '../navigation/MainNavigation';

const RootStack = createStackNavigator();

const AppNavigation = () => {
    return (
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
    );
};

export default AppNavigation;
