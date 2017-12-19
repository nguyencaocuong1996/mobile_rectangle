import React, {Component} from 'react';
import {Icon, Button} from 'native-base';
import {StyleSheet, View} from 'react-native';
import ButtonGradientToggle from "./ButtonGradientToggle";


export default class FloatButton extends Component<{}> {
    constructor(props){
        super(props);
        this.iconName = this.props.iconName;
    }

    render() {
        const style = styles(this);
        return (
            <View style={style.addButton}>
                <ButtonGradientToggle
                    width={50}
                    height={50}
                    isHighlight={true}
                    onPress={()=>this.props.onPress()}>
                    <Icon style={{marginTop: 10, color: '#fff'}} name={this.iconName} />
                </ButtonGradientToggle>
            </View>
        )
    }
}

FloatButton.defaultProps = {
    onPress: ()=>{},
    iconName: '',
    bottom: 50,
    right: 30,
};

const styles = (instance) => StyleSheet.create({
    addButton:{
        // borderWidth: 1,
        width:50,
        height: 50,
        borderRadius: 25,
        position: 'absolute',
        bottom: instance.props.bottom,
        right: instance.props.right,
        justifyContent: 'flex-start',
    },
});