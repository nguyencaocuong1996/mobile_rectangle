import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default class GradientSection extends Component<{}>{
    constructor(props){
        super(props);
        this.height = this.props.height;
    }

    render(){
        return (
            <LinearGradient
                startPoint={{x: 0, y: 1}} endPoint={{x: 1, y: 1}}
                locations={[0,0.4,0.6,0.8]}
                colors={['#57A6F7', '#5BB4F9', '#63C7FA', '#66CDF9']}
                style={[styles.linearGradient, {height: this.height}]}>
                {this.props.children}
            </LinearGradient>
        )
    }
}

GradientSection.defaultProps = {
    height: 150,
};

const styles = StyleSheet.create({
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderColor: 'red',
    },
    buttonBack:{
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