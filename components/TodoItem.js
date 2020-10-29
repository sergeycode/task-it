import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const TodoItem = ({ title, dotStyle, textStyle, onPress, onRemove }) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <View style={styles.itemContainer}>
                <View style={styles.lineTop} />
                <View style={styles.lineBottom} />
                <MaterialCommunityIcons
                    name="circle-small"
                    size={24}
                    color={dotStyle.color}
                />
                <Text style={{ ...styles.text, ...textStyle }}>{title}</Text>
            </View>
        </TouchableOpacity>
        {/* <Button title="x" onPress={onRemove} /> */}
    </View>
);

export default TodoItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    item: {
        flexGrow: 1,
        width: '100%',
        paddingHorizontal: 5,
        paddingVertical: 20,
        color: '#fff',
        backgroundColor: Colors.primary,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.primaryDark,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    },
    lineTop: {
        borderLeftWidth: 2,
        height: 28,
        borderLeftColor: Colors.primaryLightest,
        position: 'absolute',
        top: -20,
        left: 11,
    },
    lineBottom: {
        borderLeftWidth: 2,
        height: 28,
        borderLeftColor: Colors.primaryLightest,
        position: 'absolute',
        left: 11,
        bottom: -20,
    },
});