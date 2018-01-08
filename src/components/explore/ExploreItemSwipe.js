import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, TouchableOpacity,

} from 'react-native';
import {Icon} from "native-base";

const innerItemWidth = 140;
export const horizontalMargin = 4;
export const itemWidth = innerItemWidth + horizontalMargin * 2;
const itemHeight = 80;

export default class ExploreItemSwipe extends Component<{}>
{

    constructor(props){
        super(props);
        this.state = {
            item: props.item,
            onPress: props.onPress
        };
    }

    __onPress = ()=>{
        this.state.onPress(this.state.item);
    };

    render() {
        return (
            <TouchableOpacity onPress={this.__onPress}>
                <View style={styles.slide}>
                    <View style={styles.slideInnerContainer}>
                        <View style={styles.wrapper}>
                            <Image
                                resizeMode={"stretch"}
                                source={{uri: this.state.item.image}}
                                style={styles.image}/>
                            <Text style={styles.txtName}>
                                {this.state.item.name}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

ExploreItemSwipe.defaultProps = {
    item: {
        name: 'this is name of item',
        image: 'urlofimage',
    },
    onPress: ()=>null,
};

const styles = StyleSheet.create({
    slide: {
        paddingHorizontal: horizontalMargin,
        width: itemWidth,
        height: itemHeight,
        borderTopStartRadius: 5,
        borderTopEndRadius: 5,
        flexDirection: 'column',
        backgroundColor: 'transparent',
    },
    slideInnerContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
    },
    wrapper: {
        width: innerItemWidth,
        height: itemHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top:0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 5,

    },
    txtName: {
        fontSize: 20,
        color: '#fff',
    }

});