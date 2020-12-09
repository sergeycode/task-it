import React from 'react';
import { Animated, Easing } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const Spinner = () => {
    const spinValue = new Animated.Value(0);
    Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
        })
    ).start();

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-360deg'],
    });

    return (
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Feather name="rotate-ccw" size={24} color={Colors.secondary} />
        </Animated.View>
    );
};

export default Spinner;
