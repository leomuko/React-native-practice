import React from 'react';
import {Text, View} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () =>{
    return<View>
        <ImageDetail title="Beach" 
        imageSrc={require("../../assets/beach.jpg")}
        score={3}
        />
        <ImageDetail title="Forest" 
        imageSrc={require("../../assets/forest.jpg")}
        score={1}
        />
        <ImageDetail title="Mountain" 
        imageSrc={require("../../assets/mountain.jpg")}
        score={10}
        />
        </View>
};

export default ImageScreen;