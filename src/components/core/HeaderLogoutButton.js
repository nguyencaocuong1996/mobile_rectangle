import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {common as commonHelper} from '../../helpers';
import {Icon} from "native-base";


export default class HeaderLogoutButton extends Component<{}> {
    constructor(props){
        super(props);
    }

    _logout(){
        commonHelper.logout();
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={()=>this._logout()}>
                <Icon style={styles.text} name={'sign-out'}/>
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