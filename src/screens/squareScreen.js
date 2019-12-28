import React, { useState } from 'react';
import { Text, View } from "react-native";
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREAMENT = 20;



const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    const setColor =(color, change) =>{
        if(color === "red" ){
            if(red + change  > 255 || red + change < 0){
                return;
            }else{
                setRed(red + change);
            }
        }
        else if(color === "green" ){
            if(green + change  > 255 || green + change < 0){
                return;
            }else{
                setGreen(green + change);
            }
        }
        else if(color === "blue" ){
            if(blue + change  > 255 || blue + change < 0){
                return;
            }else{
                setBlue(blue + change);
            }
        }else{
            return;
        }
    };

    return <View>
        <ColorCounter
            onIncrease={() => {
                setColor('red', COLOR_INCREAMENT)
               }}
            onDecrease={() =>{ 
                setColor('red', -1 *COLOR_INCREAMENT)
                }}
            color='Red' />
        <ColorCounter
            onIncrease={() => setColor('blue', COLOR_INCREAMENT)}
            onDecrease={() => setColor('blue', -1 * COLOR_INCREAMENT)}
            color='Blue'
        />
        <ColorCounter
            onIncrease={() => setColor('green', COLOR_INCREAMENT)}
            onDecrease={() => setColor('green', -1 * COLOR_INCREAMENT)}
            color='Green'
        />
        <View style={{height:150, width:200, backgroundColor:`rgb(${red},${green},${blue})`}}></View>
    </View>
}

export default SquareScreen;