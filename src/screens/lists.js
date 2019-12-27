import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {
            name: 'Leo',
            age: 12
        },
        {
            name: 'Vibem',
            age: 34
        },
        {
            name: 'Kyz',
            age: 32
        },
        {
            name: 'leaky',
            age: 23
        }
    ];
    return (
        <FlatList

            keyExtractor={(friends) => friends.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={{ marginVertical: 100 }}>{item.age}</Text>
            }}
        />
    );
};



export default ListScreen;
