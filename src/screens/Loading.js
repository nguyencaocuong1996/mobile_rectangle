import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput, FlatList,
} from 'react-native';

export default class Loading extends Component<{}>
{
    render()
    {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


});