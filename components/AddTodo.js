import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import { Feather } from '@expo/vector-icons';

const AddTodo = ({ inputText, setInputText, handleAddTodo, handleDismiss }) => {
    const [inputFocusColor, setInputFocusColor] = useState(Colors.primaryFade);
    const [buttonFocusColor, setButtonFocusColor] = useState(
        Colors.primaryFade
    );
    const handleOnChange = text => {
        setInputText(text);
        if (text.trim() != '') {
            setButtonFocusColor(Colors.white);
        } else {
            setButtonFocusColor(Colors.primaryFade);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>Add Task</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={[
                            styles.textInput,
                            { borderColor: inputFocusColor },
                        ]}
                        onChangeText={handleOnChange}
                        value={inputText}
                        onSubmitEditing={handleAddTodo}
                        onFocus={() => {
                            setInputFocusColor(Colors.secondary);
                        }}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.buttonAdd}
                        onPress={handleAddTodo}
                    >
                        <Feather
                            name="check-circle"
                            size={35}
                            color={buttonFocusColor}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDismiss}>
                        <Feather
                            name="x-circle"
                            size={35}
                            color={Colors.white}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default AddTodo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        alignItems: 'center',
        height: 200,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    text: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: '500',
    },
    textInput: {
        width: '60%',
        maxWidth: 500,
        height: 30,
        marginTop: 20,
        borderWidth: 2,
        borderRadius: 15,
        paddingVertical: 2,
        paddingHorizontal: 10,
        color: Colors.white,
        fontSize: 16,
        fontWeight: '500',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonAdd: {
        marginRight: 50,
    },
});
