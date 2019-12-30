import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentScreen from './src/screens/component';
import {Text} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/homescreen';
import ListScreen from './src/screens/lists';
import ImageScreen from './src/screens/imageScreen';
import CounterScreen from './src/screens/counterScreen';
import ColorDisplay from './src/screens/colorScreen';
import SquareScreen from './src/screens/squareScreen';
import TextScreen from './src/screens/textScreen';

 const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorDisplay,
    Squares: SquareScreen,
    Texts: TextScreen
  },
  {
    initialRouteName:'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
); 
const ddd = () =>{
  return <Text></Text>
}
export default createAppContainer(navigator); 


