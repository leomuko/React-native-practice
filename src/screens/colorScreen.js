import React,{useState} from 'react';
import { View, Button, FlatList} from 'react-native';

const ColorDisplay =() =>{
    const [color, setColor] = useState([]);
    return(
        <View>
            <Button 
            title="Display color boxes"
            onPress={()=>{
                setColor([...color, randomRgb()])
            }}
            />
            
            <FlatList
            keyExtractor={item =>item}
            data={color}
            renderItem={({item}) =>{
                return <View style={{backgroundColor:item, height:100, width:100}}></View>
            }}
            />

        </View>
    )
}
const randomRgb =() =>{
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    return `rgb(${red},${blue},${green})`;
}
export default ColorDisplay;