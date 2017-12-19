import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonGradientToggle from "./ButtonGradientToggle";

const defaultButtonWidth = 120;

export default class SwitchMenuNavigation extends Component<{}> {
    constructor(props){
        super(props);
        this.buttonWidth = this.props.buttonWidth || defaultButtonWidth;
        this.width = this.props.buttons.length * this.buttonWidth;
        this.state = {
            currentIndex: 0,
        }
    }

    __onPress = (action, index)=>{
        this.setState({
            currentIndex: index
        });
        action();
    };

    __renderButtons(){
        return this.props.buttons.map((button, index)=>{
            const isHighLight = this.state.currentIndex === index;
            return <ButtonGradientToggle key={index}
                                         width={this.buttonWidth}
                                         text={button.text}
                                         isHighlight={isHighLight}
                                         onPress={()=>this.__onPress(button.action, index)}/>
        });
    }

    render() {
        return (
            <View style={[styles.container, {width: this.width}]}>
                {this.__renderButtons()}
            </View>
        );
    }
}

SwitchMenuNavigation.defaultProps = {
    buttons: [
        {
            text: 'button 1',
            action: ()=>{alert("button 1 click")}
        },{
            text: 'button 2',
            action: ()=>{alert("button 2 click")}
        },{
            text: 'button 3',
            action: ()=>{alert("button 3 click")}
        }
    ]
};


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        minWidth: 100,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#d5d6d7',
    },
    text: {
        color: '#D3DAE1',
        fontSize: 17,
    },
});