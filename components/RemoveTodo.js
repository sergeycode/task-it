import React from 'react';
import { StyleSheet, Animated, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const RemoveTodo = ({ trans, onRemove }) => {
    return (
        <TouchableOpacity onPress={onRemove} style={styles.button}>
            <Animated.View style={{ transform: [{ translateX: trans }] }}>
                <Feather name="trash-2" size={24} color={Colors.primary} />
            </Animated.View>
        </TouchableOpacity>
    );
};

export default RemoveTodo;

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: '100%',
        backgroundColor: Colors.secondary,
        justifyContent: 'center',
    },
});
