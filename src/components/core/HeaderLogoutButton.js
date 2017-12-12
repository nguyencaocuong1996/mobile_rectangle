import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {common as commonHelper} from '../../helpers';


export default class HeaderLogoutButton extends Component<{}> {
    constructor(props){
        super(props);
    }

    _logout(){
        commonHelper.logout();
        this.props.navigation.navigate('Hotel');
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={()=>this._logout()}>
                <Text style={styles.text}>Logout</Text>
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