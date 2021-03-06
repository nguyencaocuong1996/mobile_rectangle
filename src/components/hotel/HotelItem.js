import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image, TouchableOpacity,

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import icLocation from '../../../src/assets/img/icLocation.png'
import {Icon} from "native-base";



export default class HotelItem extends Component<{}>
{

    constructor(props){
        super(props);
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

    __renderService(services){
        return services.map((service, index)=>{
            return (
                <View key={index} style={styles.viewServiceItem}>
                    <Text numberOfLines={1} style={styles.servicesText}>{service}</Text>
                </View>
            );
        })
    }

    render() {
        return (
           
            <View style={styles.container}>
                <View style={styles.imageWrapper}>
                    <Image
                        resizeMode={"stretch"}
                        source={{uri: this.props.item.image}}
                        style={styles.image}/>
                </View>
                <View style={styles.infoWrapper}>
                    <View style={styles.starSection}>
                        {this.__renderStar(3)}
                    </View>
                    <Text style={styles.titleText}>{this.props.item.name}</Text>
                        <View style={styles.viewAddress}>
                            <Icon style={styles.icon} name={'map-marker'} />
                            <Text style={styles.addressText}>{this.props.item.address}</Text>
                        </View>
                        <View style={styles.viewService}>
                            {this.__renderService(this.props.item.services)}
                        </View>
                </View>
                <TouchableOpacity style={styles.btnFavorite}>
                    <Icon style={{fontSize: 20, color: '#aeb1b5'}} name={'heart-o'} />
                </TouchableOpacity>
                <Text style={styles.txtPrice}>
                    {this.props.item.price} VNĐ
                </Text>
            </View>
        );
    }
}

HotelItem.defaultProps = {
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
        marginTop: 3,
        flexDirection: 'row',
    },
    addressText: {
      color: '#aeb1b5',
      fontSize: 12,
        marginLeft: 5,

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