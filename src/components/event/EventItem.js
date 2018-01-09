import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image, TouchableOpacity,

} from 'react-native';
import {Icon} from "native-base";



export default class EventItem extends Component<{}>
{

    constructor(props){
        super(props);
        this.state = {
            item: props.item
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            item: nextProps.item
        });
    }

    __onPress = ()=>{
        this.props.onPress(this.state.item);
    };
    __onJoin = ()=>{
        this.props.onJoin(this.state.item);
    };

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.imageWrapper}>
                    <TouchableOpacity onPress={this.__onPress}>
                        <Image
                            resizeMode={"stretch"}
                            source={{uri: this.state.item.cover}}
                            style={styles.image}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.infoWrapper}>
                    <TouchableOpacity onPress={this.__onPress}>
                        <Text style={styles.titleText}>{this.state.item.name}</Text>
                        <View style={styles.viewAddress}>
                            <Icon style={styles.icon} name={'map-marker'} />
                            <Text  numberOfLines={1} style={styles.addressText}>{this.state.item.address}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btnJoin} onPress={this.__onJoin}>
                    <Icon style={{fontSize: 25, color: '#aeb1b5'}} name={'bookmark'} />
                </TouchableOpacity>
            </View>
        );
    }
}

EventItem.defaultProps = {
    isLeft: true,
    onJoin: ()=>alert('join'),
};

const styles = StyleSheet.create({
    btnJoin:{
      position: 'absolute',
      top: 0,
      right: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        //justifyContent: 'center',
        height: 200,
        shadowColor: '#b6b6b6',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        // overflow: 'hidden',
    },
    imageWrapper: {
        flex: 8,
        overflow: 'hidden',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
    },
    image: {
        //flex: 1,
        height: 150,
        width: '100%',
        //alignSelf: 'stretch',
    },
    icLocation: {
        //flex: 1,
        height: 14,
        width: 20,
        //alignSelf: 'stretch',
    },
    infoWrapper: {
        padding:5,
        paddingLeft: 10,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        flex: 2,
        // borderWidth: 1,

    },
    textRight: {
        alignItems: 'flex-end',
    },
    titleText: {
        marginTop: 4,
        color: '#64749A',
        fontWeight: 'bold',
        fontSize: 13,
    },
    viewAddress:{
        marginTop: 3,
        flexDirection: 'row',
    },
    addressText: {
        color: '#aeb1b5',
        fontSize: 12,
        marginLeft: 5,

    },
    servicesText: {
        color: '#64749A',
        alignSelf: 'center',
        fontSize: 11,

        backgroundColor: 'transparent',
        //borderRadius: 5
    },
    descriptionText: {
        color: '#fff',
    },
    icon: {
        color: 'gray',
        fontSize: 14,
    },

});