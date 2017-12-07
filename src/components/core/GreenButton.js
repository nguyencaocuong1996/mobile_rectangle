import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import imgGreenButton from '../../assets/img/GreenButton.png';

export default class GreenButton extends Component<{}> {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Image style={styles.image} source={imgGreenButton} />
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: 326,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    image:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 10,
    }
});