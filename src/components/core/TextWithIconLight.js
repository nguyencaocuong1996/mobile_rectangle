import React, {Component} from 'react';
import {Item, Input, Icon} from 'native-base';
import {StyleSheet, Text, View} from 'react-native';


export default class TextWithIconLight extends Component<{}> {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={[styles.wrapper, this.props.wrapperStyle]}>
                <Icon style={styles.icon} name={this.props.iconName} />
                <Text numberOfLines={this.props.numberOfLines} style={styles.txt}>{this.props.text}</Text>
            </View>
        )
    }
}

TextWithIconLight.defaultProps = {
    iconName: 'Name of service',
    numberOfLines: 1,
    wrapperStyle: {

    }
};

const styles = StyleSheet.create({
    wrapper:{
        marginBottom: 5,
        flexDirection: 'row',
    },
    icon: {
        color: '#5e5e5e',
        fontSize: 16,
    },
    txt: {
        marginLeft: 10,
        fontSize: 14,
        color: '#8B8B8B',
    }
});