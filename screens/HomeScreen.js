import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/actions';
import { filterVisible } from '../store/selectors';

import TodoItem from '../components/TodoItem';
import Colors from '../constants/Colors';

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
            dotStyle={{
                color: item.completed ? Colors.primaryFade : Colors.secondary,
            }}
            textStyle={{
                color: item.completed ? Colors.primaryFade : Colors.white,
            }}
            onPress={() => handleCompleted(item.id)}
            onRemove={() => handleRemove(item.id)}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList data={visibleTodos} renderItem={renderTodoItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
