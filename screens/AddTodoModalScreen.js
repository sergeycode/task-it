import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AddTodo from '../components/AddTodo';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions';

const AddTodoModalScreen = ({ navigation }) => {
    const [inputText, setInputText] = useState('');

    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (inputText.trim() != '') {
            dispatch(addTodo(inputText.trim()));
            setInputText('');
            navigation.goBack();
        }
    };

    const handleDismiss = () => {
        navigation.goBack();
    };

    return (
        <AddTodo
            inputText={inputText}
            setInputText={setInputText}
            handleAddTodo={handleAddTodo}
            handleDismiss={handleDismiss}
        />
    );
};

export default AddTodoModalScreen;

const styles = StyleSheet.create({});
