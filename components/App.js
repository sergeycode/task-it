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
import { addTodo } from '../store/actions';

const TodoItem = ({ title, completed, style }) => (
    <TouchableOpacity>
        <Text style={style}>{title}</Text>
    </TouchableOpacity>
);

export default function App() {
    const [inputText, setInputText] = useState('');

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos.todos);

    const renderTodoItem = ({ item }) => (
        <TodoItem
            title={item.title}
            style={{
                textDecorationLine: item.completed ? 'line-through' : 'none',
            }}
        />
    );

    const addTodoHandler = () => {
        dispatch(addTodo(inputText));
        setInputText('');
    };

    return (
        <View style={styles.container}>
            <View>
                <Text>Add Task:</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => setInputText(text)}
                        value={inputText}
                    />
                    <Button title="Add" onPress={addTodoHandler} />
                </View>
                <Text>Tasks List:</Text>
                <FlatList data={todos} renderItem={renderTodoItem} />
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
        height: 110,
    },
    textInput: {
        width: 200,
        height: 30,
        marginTop: 5,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
    },
});
