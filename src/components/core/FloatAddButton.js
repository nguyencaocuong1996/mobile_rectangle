import React, {Component} from 'react';
import {Icon, Button} from 'native-base';
import {StyleSheet, View} from 'react-native';
import ButtonGradientToggle from "./ButtonGradientToggle";


export default class FloatAddButton extends Component<{}> {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.addButton}>
                <ButtonGradientToggle
                    width={50}
                    height={50}
                    isHighlight={true}
                    onPress={()=>this.props.onPress()}>
                    <Icon style={{marginTop: 10, color: '#fff'}} name={'plus'} />
                </ButtonGradientToggle>
            </View>
        )
    }
}

FloatAddButton.defaultProps = {
    onPress: ()=>{},
};

const styles = StyleSheet.create({
    addButton:{
        // borderWidth: 1,
        width:50,
        height: 50,
        borderRadius: 25,
        position: 'absolute',
        bottom: 50,
        right: 30,
        justifyContent: 'flex-start',
    },
});