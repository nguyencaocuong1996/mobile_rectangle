import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, TouchableOpacity,

} from 'react-native';
import {Icon} from "native-base";
import commonHelper from "../../helpers/commonHelper";



export default class HotelBookedItem extends Component<{}>
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

    __renderStar(starCount){
        let listStar = [];
        for(let i=0; i<starCount; i++){
            listStar.push(i)
        }
        return listStar.map((star)=>{
            return <Icon key={star} style={styles.star} name={'star'} />
        })
    }


    __onPress = ()=>{
        this.props.onPress(this.state.item.hotel);
    };

    render() {
        return (

            <View style={styles.container}>
                <TouchableOpacity onPress={this.__onPress}>
                    <View style={styles.imageWrapper}>
                        <Image
                            resizeMode={"stretch"}
                            source={{uri: this.state.item.hotel.image}}
                            style={styles.image}/>
                    </View>
                </TouchableOpacity>

                <View style={styles.infoWrapper}>
                    <TouchableOpacity onPress={this.__onPress}>
                        <View style={styles.starSection}>
                            {this.__renderStar(this.state.item.hotel.star)}
                        </View>
                        <Text style={styles.titleText}>{this.state.item.hotel.name}</Text>
                        <View style={styles.viewAddress}>
                            <Icon style={styles.icon} name={'map-marker'} />
                            <Text numberOfLines={1} style={styles.addressText}>{this.state.item.hotel.address}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.viewService}>
                        <Icon style={styles.icon} name={'calendar'} />
                        <Text numberOfLines={1} style={styles.addressText}>
                            {commonHelper.formatDateTimeToDMYHM(this.state.item.bookedAt) }
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

HotelBookedItem.defaultProps = {
    isLeft: true,
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

    },
    viewService: {
        flexDirection: 'row',
        marginTop: 5,

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