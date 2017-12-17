import React, {Component} from 'react';
import {Icon} from 'native-base';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class OpacityHeader extends Component<{}>{
    constructor(props){
        super(props);
        // console.log(props.navigation);
    }

    _goBack = ()=>{
        if(this.props.backScreen){
            this.props.navigation.navigate(this.props.backScreen);
        } else {
            this.props.navigation.goBack();
        }
    };

    render(){
        let backColor = !this.props.backColor ? '#fff' : this.props.backColor;
        return (
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>this._goBack()}>
                        <Icon name={'chevron-left'} style={[styles.icon, {color: backColor}]}/>
                    </TouchableOpacity>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 15,
        // flex: 1,
        width: '100%',
        height: 30,
        // borderWidth: 1,
        // borderColor: 'black',
        backgroundColor: 'transparent',
    },
    icon:{
        color: '#3274F6',
        fontSize: 30,
    }
});