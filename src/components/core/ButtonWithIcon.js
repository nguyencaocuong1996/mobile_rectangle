import React, {Component} from 'react';
import {Icon, Button} from 'native-base';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';


export default class ButtonWithIcon extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            isActive: props.isActive,
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            isActive: nextProps.isActive
        });
    }

    __onPress=()=>{
        this.setState({
            isActive: !this.state.isActive,
        });
        this.props.onPress();
    };

    render() {
        let activeStyle = this.state.isActive ? styles.active : null;
        let txtActive = this.state.isActive ? styles.txtActive: null;
        return (
            <TouchableOpacity style={[styles.container, activeStyle]} onPress={this.__onPress.bind(this)}>
                <Icon style={styles.icon} name={this.props.iconName} />
                <Text style={[styles.text, txtActive]}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}


ButtonWithIcon.defaultProps = {
    onPress: ()=>null,
    iconName: 'home',
    text: 'text of button',
    isActive: false,
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: 'red',
        paddingBottom: 3,
    },
    icon: {
        fontSize: 17,
        color: '#A1D0FA',
    },
    text: {
        marginLeft: 7,
        color: '#9EA9C1',
        fontSize: 14,
    },
    active: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
    txtActive: {
        color: '#323232',
    }
});