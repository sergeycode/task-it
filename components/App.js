import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
    addTodo,
    removeTodo,
    toggleTodo,
    onFilterSelect,
} from '../store/actions';
import { FILTERS, filterVisible } from '../store/selectors';

const TodoItem = ({ title, style, onPress, onRemove }) => (
    <View style={{ flex: 1, flexDirection: 'row', marginBottom: 5 }}>
        <TouchableOpacity onPress={onPress} style={{ flexGrow: 1 }}>
            <Text style={style}>{title}</Text>
        </TouchableOpacity>
        <Button title="Remove" onPress={onRemove} />
    </View>
);

export default function App() {
    const [inputText, setInputText] = useState('');

    const dispatch = useDispatch();

    const visibleTodos = useSelector(state =>
        filterVisible(state.todos.todos, state.filter.filter)
    );

    const handleAddTodo = () => {
        if (inputText.trim() != '') {
            dispatch(addTodo(inputText.trim()));
            setInputText('');
        }
    };

    const handleCompleted = id => dispatch(toggleTodo(id));
    const handleRemove = id => dispatch(removeTodo(id));

    const filterSelect = selectedFilter =>
        dispatch(onFilterSelect(selectedFilter));

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
                <Text>Add Task:</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => setInputText(text)}
                        value={inputText}
                        onSubmitEditing={handleAddTodo}
                    />
                    <Button title="Add" onPress={handleAddTodo} />
                </View>
                <Text>Tasks List:</Text>
                <FlatList data={visibleTodos} renderItem={renderTodoItem} />
                <View style={styles.filterContainer}>
                    <Button
                        title="All"
                        onPress={() => filterSelect(FILTERS.ALL)}
                    />
                    <Button
                        title="Active"
                        onPress={() => filterSelect(FILTERS.ACTIVE)}
                    />
                    <Button
                        title="Completed"
                        onPress={() => filterSelect(FILTERS.COMPLETED)}
                    />
                </View>
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
        marginTop: 50,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    textInput: {
        width: 200,
        height: 30,
        borderColor: 'grey',
        borderWidth: 1,
        paddingVertical: 2,
        paddingHorizontal: 5,
    },
    filterContainer: {
        flex: 1,
        flexDirection: 'row',
    },
});
