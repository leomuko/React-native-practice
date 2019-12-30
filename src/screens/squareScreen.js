import React, { useState, useReducer } from 'react';
import { Text, View } from "react-native";
import ColorCounter from '../components/ColorCounter';


//Using Reducers
const COLOR_INCREAMENT = 15;

const reducer=(state, action) =>{
    switch(action.type){
        case 'change_red':
            if(state.red + action.payload > 255 || state.red + action.payload < 0){
                return state;
            }
            return {...state, red: state.red + action.payload};
        case 'change_green':
            if(state.green + action.payload > 255 || state.green + action.payload < 0){
                return state;
            }
            return {...state, green: state.green + action.payload};
        case 'change_blue':
            if(state.blue + action.payload > 255 || state.blue + action.payload < 0){
                return state;
            }
            return {...state, blue: state.blue + action.payload};
        default:
            return state;
    }

}

const SquareScreen = () =>{
    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0});
    return(
        <View>
            <ColorCounter
            color="red"
            onIncrease={()=> dispatch({type:'change_red', payload:COLOR_INCREAMENT})}
            onDecrease={()=> dispatch({type:'change_red', payload: -1 *COLOR_INCREAMENT})}
            />
            <ColorCounter
            color="green"
            onIncrease={()=> dispatch({type:'change_green', payload:COLOR_INCREAMENT})}
            onDecrease={()=> dispatch({type:'change_green', payload: -1 *COLOR_INCREAMENT})}
            />
            <ColorCounter
            color="green"
            onIncrease={()=> dispatch({type:'change_green', payload:COLOR_INCREAMENT})}
            onDecrease={()=> dispatch({type:'change_green', payload: -1 *COLOR_INCREAMENT})}
            />
            <View
                style={{
                    height:200,
                    width: 200,
                    backgroundColor:`rgb(${state.red},${state.green},${state.blue})`
                }}
            >

            </View>
        </View>  

    );
}

export default SquareScreen;



// First example of  creating the squareScreen without reducers
// ***************************************************************
//********************************************************** 

/* const COLOR_INCREAMENT = 20;
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
} */

