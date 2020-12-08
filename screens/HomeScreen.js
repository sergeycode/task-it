import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo, loadTodos } from '../store/actions';
import { filterVisible } from '../store/selectors';

import TodoItem from '../components/TodoItem';
import RemoveTodo from '../components/RemoveTodo';
import Colors from '../constants/Colors';

import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function HomeScreen() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos());
    }, [dispatch]);

    const visibleTodos = useSelector(state =>
        filterVisible(state.todos.todos, state.filter.filter)
    );

    const handleCompleted = (id, completed) =>
        dispatch(toggleTodo(id, !completed));
    const handleRemove = id => dispatch(removeTodo(id));

    const renderTodoItem = ({ item }) => {
        const rightSwipe = dragX => {
            const trans = dragX.interpolate({
                inputRange: [0, 50, 100],
                outputRange: [50, -500, 50],
            });
            return (
                <RemoveTodo
                    trans={trans}
                    onRemove={() => handleRemove(item.id)}
                />
            );
        };
        return (
            <View style={styles.itemContainer}>
                <Swipeable renderRightActions={rightSwipe}>
                    <TodoItem
                        title={item.title}
                        dotStyle={{
                            color: item.completed
                                ? Colors.primaryFade
                                : Colors.secondary,
                        }}
                        textStyle={{
                            color: item.completed
                                ? Colors.primaryFade
                                : Colors.white,
                        }}
                        onPress={() => handleCompleted(item.id, item.completed)}
                    />
                </Swipeable>
            </View>
        );
    };

    return (
        <View style={styles.mainContainer}>
            {visibleTodos.length === 0 ? (
                <Text style={styles.text}>
                    There are no tasks in this category
                </Text>
            ) : (
                <FlatList
                    data={visibleTodos}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderTodoItem}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: '500',
    },
    itemContainer: {
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.primaryDark,
    },
});
