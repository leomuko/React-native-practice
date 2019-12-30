import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, ShadowPropTypesIOS } from 'react-native';

const HomeScreen = ({navigation}) => {
   
    return <View>
        <Text style={styles.fst}>This is the homescreen</Text>
        <Button 
        onPress ={() => navigation.navigate('Components')}
        title="Go to components screen"
        />
       <Button 
        onPress ={() => navigation.navigate('List')}
        title="Go to Lists screen"
        />
        <Button 
        onPress ={() => navigation.navigate('Images')}
        title="Go to Images screen"
        />
        <Button 
        onPress ={() => navigation.navigate('Counter')}
        title="Go to Counter screen"
        />
        <Button 
        onPress ={() => navigation.navigate('Colors')}
        title="Go to Colors Screen"
        />
        <Button 
        onPress ={() => navigation.navigate('Squares')}
        title="Go to Squares Screen"
        />
        <Button 
        onPress ={() => navigation.navigate('Texts')}
        title="Go to Text Screen"
        />
        
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

export default HomeScreen;
