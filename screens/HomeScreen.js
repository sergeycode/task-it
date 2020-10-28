import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/actions';
import { filterVisible } from '../store/selectors';

const TodoItem = ({ title, style, onPress, onRemove }) => (
    <View style={{ flex: 1, flexDirection: 'row', marginBottom: 5 }}>
        <TouchableOpacity onPress={onPress} style={{ flexGrow: 1 }}>
            <Text style={style}>{title}</Text>
        </TouchableOpacity>
        <Button title="Remove" onPress={onRemove} />
    </View>
);

export default function HomeScreen() {
    const dispatch = useDispatch();

    const visibleTodos = useSelector(state =>
        filterVisible(state.todos.todos, state.filter.filter)
    );

    const handleCompleted = id => dispatch(toggleTodo(id));
    const handleRemove = id => dispatch(removeTodo(id));

    const renderTodoItem = ({ item }) => (
        <TodoItem
            title={item.title}
            style={{
                textDecorationLine: item.completed ? 'line-through' : 'none',
                borderWidth: 1,
                borderColor: '#ccc',
                paddingHorizontal: 3,
                paddingVertical: 8,
            }}
            onPress={() => handleCompleted(item.id)}
            onRemove={() => handleRemove(item.id)}
        />
    );

    return (
        <View style={styles.container}>
            <View>
                <FlatList data={visibleTodos} renderItem={renderTodoItem} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
