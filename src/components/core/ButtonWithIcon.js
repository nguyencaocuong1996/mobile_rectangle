import React, {Component} from 'react';
import {Icon, Button} from 'native-base';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';


export default class ButtonWithIcon extends Component<{}> {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={()=>this.props.onPress()}>
                <Icon style={styles.icon} name={this.props.iconName} />
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}


ButtonWithIcon.defaultProps = {
    onPress: ()=>null,
    iconName: 'home',
    text: 'text of button',
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'red',
    },
    icon: {
        fontSize: 15,
        color: '#A1D0FA',
    },
    text: {
        marginLeft: 10,
        color: '#9EA9C1',
        fontSize: 14,
    }
});