import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default class ButtonGradientToggle extends Component<{}> {
    constructor(props){
        super(props);
        this.styleWrapper = {
            width: props.width,
            height: props.height,
            borderRadius: props.height / 2,
        }
    }

    __onPress = ()=>{
        this.props.onPress();
    };

    __renderRawButton(){
        const textHighlightStyle = this.props.isHighlight ? {color: '#fff'} : null;
        return (
            <View style={[styles.container, this.styleWrapper]}>
                <TouchableOpacity
                    onPress={this.__onPress.bind(this)}
                    disabled={this.props.disabled}
                    style={styles.touchable}
                >
                    {this.props.children}
                    <Text style={[styles.text, textHighlightStyle]}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>

        );
    }

    render() {
        const isHighLight = this.props.isHighlight;
        return (
            !isHighLight ?
                this.__renderRawButton():
                <LinearGradient
                    startPoint={{x: 0, y: 1}} endPoint={{x: 1, y: 1}}
                    locations={[0,0.4,0.6,0.8]}
                    colors={['#57A6F7', '#5BB4F9', '#63C7FA', '#66CDF9']}
                    style={[styles.linearGradient, this.styleWrapper ]}>
                    {this.__renderRawButton()}
                </LinearGradient>

        )
    }
}

ButtonGradientToggle.defaultProps = {
    width: 100,
    height: 40,
    disabled: false,
    isHighlight: false,
    onPress: ()=>null,
};


const styles = StyleSheet.create({
    touchable: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        // minWidth: 100,
        height: 40,
        borderRadius: 20,
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        minWidth: 100,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        // borderWidth: 1,
    },
    text: {
        color: '#D3DAE1',
        fontSize: 17,
    },
});