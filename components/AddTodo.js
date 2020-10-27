import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const AddTodo = ({ inputText, setInputText, handleAddTodo, handleDismiss }) => {
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
                    <Button title="Dismiss" onPress={handleDismiss} />
                </View>
            </View>
        </View>
    );
};

export default AddTodo;

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
});
