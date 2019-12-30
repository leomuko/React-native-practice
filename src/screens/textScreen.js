import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('')
    return (
        <View>
            <Text>Enter Name</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>My name is {name}</Text>
            {name.length < 5 ? <Text>That is a short name</Text>: null }
        </View>

    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen