import React, { useState } from 'react';
import AddTodo from '../components/AddTodo';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions';
import { onFilterSelect } from '../store/actions';
import { FILTERS } from '../store/selectors';

const AddTodoModalScreen = ({ navigation }) => {
    const [inputText, setInputText] = useState('');

    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (inputText.trim() != '') {
            dispatch(addTodo(inputText.trim(), false));
            setInputText('');
            dispatch(onFilterSelect(FILTERS.ALL));
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
