import React from 'react';
import { Text, View, Image } from 'react-native';

const ImageDetail = (props) => {
    return <View>
        <Image source={props.imageSrc} />
        <Text>{props.title}</Text>
        <Text>{props.score}</Text>
    </View>
};

export default ImageDetail;