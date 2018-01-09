import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,

} from 'react-native';
import {Icon} from "native-base";



export default class SearchItem extends Component<{}>
{

    constructor(props){
        super(props);
        this.state = {
            item: this.__checkItem(props.item)
        }
    }

    __checkItem = (item)=>{
        console.log("item", item);
        item.image = item.image || item.cover;
        return item;
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            item: this.__checkItem(nextProps.item)
        });
    }

    __onPress = ()=>{
        this.props.onPress(this.state.item);
    };

    render() {
        return (

            <View style={styles.container}>
                <TouchableOpacity onPress={this.__onPress}>
                    <View style={styles.imageWrapper}>
                        <Image
                            resizeMode={"stretch"}
                            source={{uri: this.state.item.image}}
                            style={styles.image}/>
                    </View>
                </TouchableOpacity>

                <View style={styles.infoWrapper}>
                    <TouchableOpacity onPress={this.__onPress}>
                        <Text style={styles.titleText}>{this.state.item.name}</Text>
                        <View style={styles.viewAddress}>
                            <Icon style={styles.icon} name={'folder'} />
                            <Text numberOfLines={1} style={styles.addressText}>
                                {this.state.item.type}
                            </Text>
                        </View>
                        <View style={styles.viewAddress}>
                            <Icon style={styles.icon} name={'map-marker'} />
                            <Text numberOfLines={3} style={styles.addressText}>
                                {this.state.item.address}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

SearchItem.defaultProps = {
    item: {
        name: "Ten item",
        type: "loai item",
        address: "asdasd",
    },
    isLeft: true,
    onPress: ()=>null,
};

const styles = StyleSheet.create({
    btnFavorite: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    star: {
        fontSize: 10,
        color: "#ffe921",
        marginRight: 5,
    },
    starSection:{
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        //justifyContent: 'center',
        height: 110,
        shadowColor: '#b6b6b6',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        // overflow: 'hidden',
    },
    imageWrapper: {
        overflow: 'hidden',
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
    },
    image: {
        //flex: 1,
        height: 110,
        width: 120,
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
        // width: '80%',
        marginTop: 3,
        flexDirection: 'row',
        // borderWidth: 1,
    },
    addressText: {
        color: '#aeb1b5',
        fontSize: 12,
        marginLeft: 5,
        width: '90%',

    },
    viewService: {
        flexDirection: 'row',

    },
    viewServiceItem: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        borderRadius: 5,
        padding: 3,
        marginTop: 4,
        marginRight: 10,
        height: 24,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
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
    txtPrice: {
        position: 'absolute',
        right: 10,
        bottom: 5,
        color: '#60ACF8',
        fontSize: 14,
    }

});