import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class HeaderLoginButton extends Component<{}> {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={()=>this.props.navigation.navigate('Login')}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
    },
    text: {
        color: '#3274F6',
        fontSize: 17,
        fontWeight: 'bold',
    }
});