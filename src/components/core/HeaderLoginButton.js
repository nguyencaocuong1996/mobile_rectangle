import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon} from "native-base";

export default class HeaderLoginButton extends Component<{}> {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={()=>this.props.navigation.navigate('Login')}>
                <Icon style={styles.text} name={'sign-in'}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        position: 'absolute',
        right:20,
        top: 20,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});