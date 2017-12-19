import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from "native-base";

const defaultWidth = 30;
const defaultHeight = 30;
const defaultOuterSize = 31;
const defaultInnerSize = 20;
const defaultColor = '#F5F5F5';
const defaultActiveColor = '#8AC5FA';
export default class NestedIcon extends Component<{}> {
    constructor(props){
        super(props);
    }
    render() {
        const style = styles(this);
        return <View style={style.container}>
            <Icon style={[style.icon, style.outer,]} name={this.props.outer} />
            <Icon style={[style.icon, style.inner,]} name={this.props.inner} />
        </View>;
    }
}

NestedIcon.defaultProps = {
    inner: 'angle-left',
    outer: 'circle-thin',
    width: defaultWidth,
    height: defaultHeight,
    outerSize: defaultOuterSize,
    innerSize: defaultInnerSize,
    isActive: false,
    color: defaultColor,
    activeColor: defaultActiveColor,
};

const styles = (instance) =>StyleSheet.create({
    container: {
        width: instance.props.width,
        height: instance.props.height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        position: 'absolute',
        color: instance.props.isActive ? instance.props.activeColor : instance.props.color,
        backgroundColor:'transparent',
        alignSelf:'center'
    },
    outer: {
        fontSize: instance.props.outerSize,
    },
    inner: {
        fontSize: instance.props.innerSize,
    }
});