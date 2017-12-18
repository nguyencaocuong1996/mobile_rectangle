import React, {Component} from 'react';
import {Icon, Button} from 'native-base';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';


export default class MenuItemWithTextUnderline extends Component<{}> {
    constructor(props){
        super(props);
    }

    __onPress=()=>{
        this.props.onPress();
    };

    render() {
        return (
            <TouchableOpacity style={[styles.container,]} onPress={this.__onPress.bind(this)}>
                <Icon style={styles.icon} name={this.props.iconName} />
                <View style={styles.infoWrapper}>
                    <Text style={[styles.text,]}>{this.props.title}</Text>
                    {this.props.showUnderLine && <View style={styles.breakLine}/>}
                </View>
            </TouchableOpacity>
        )
    }
}


MenuItemWithTextUnderline.defaultProps = {
    onPress: ()=>null,
    iconName: 'home',
    text: 'text of menu item',
    showUnderLine: true,
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: 'red',
        paddingBottom: 3,
        // height: 40,
        paddingTop: 10,
        // borderWidth: 1,
    },
    icon: {
        marginTop: 0,
        fontSize: 25,
        color: '#A1D0FA',
    },
    text: {
        marginLeft: 7,
        color: '#9EA9C1',
        fontSize: 20,
    },
    active: {
        borderBottomColor: '#000',
        // borderBottomWidth: 1,
    },
    infoWrapper: {
        marginLeft: 10,
        // borderWidth: 1,
        width: '100%',
    },
    txtActive: {
        color: '#323232',
    },
    breakLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#d9dbdd',
        width: '95%',
        marginLeft: 5,
        marginTop: 15,
    }
});