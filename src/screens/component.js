import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
    const name = 'Leo';
    return <View>
        <Text style={styles.fst}>Getting started with react-native</Text>
        <Text style={styles.snd}>Hi my name is {name}</Text>
    </View>
};

const styles = StyleSheet.create({
    fst: {
        fontSize: 45
    },
    snd:{
        fontSize: 20
    }
});

export default ComponentScreen;
