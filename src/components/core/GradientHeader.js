import React, {Component} from 'react';
import {Icon} from 'native-base';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default class GradientHeader extends Component<{}>{
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
            <LinearGradient
                startPoint={{x: 0, y: 1}} endPoint={{x: 1, y: 1}}
                locations={[0,0.4,0.6,0.8]}
                colors={['#57A6F7', '#5BB4F9', '#63C7FA', '#66CDF9']}
                style={styles.linearGradient}>
                <Text style={styles.title}>{this.props.title}</Text>
                <TouchableOpacity style={styles.buttonBack} onPress={()=>this._goBack()}>
                    <Icon name={'chevron-left'} style={[styles.icon, {color: backColor}]}/>
                </TouchableOpacity>
            </LinearGradient>
        )
    }
}

GradientHeader.defaultProps = {
    title: ""
};

const styles = StyleSheet.create({
    linearGradient: {
        height: 60,
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderColor: 'red',
    },
    title:{
        color: '#9BD5F8',
        fontSize: 18,
        position: 'absolute',
        top: 20,
        alignSelf: 'center',
        backgroundColor: 'transparent',
        fontWeight: 'bold',
    },
    buttonBack:{
        position: 'absolute',
        top: 20,
        backgroundColor: 'transparent',
        width: 30,
        height: 30,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
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