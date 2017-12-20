import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions, TouchableOpacity,
} from 'react-native';
import Carousel from "react-native-snap-carousel";
import { Item, Input, Icon } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import myTheme from '../../themes/fontAwsome';


const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;


export default class HotelListCarousel extends Component<{}>
{
    static navigationOptions = {
        title: 'List Hotel',
    };

    constructor(props){
        super(props);
        this.state = {
            isHide: false,
        }
    }


    __renderStar(star){
        let stars = [];
        for (let i=0; i<star; i++){
            stars.push(i);
        }
        return stars.map(star=>{
            return <Icon key={star} style={[styles.iconStyle, styles.iconStar]} active name={'star'}/>;
        })
    }

    __renderService(services){
        return services.map((service, index)=>{
            return (
                <View key={index} style={styles.serviceWrapper}>
                    <Text numberOfLines={1} style={styles.txtService}> service </Text>
                </View>
            );
        })
    }

    _renderItem = ({item}) => {
        const listStar = [];
        for (let i=1; i<item.star; i++){
            listStar.push({i});
        }
        return (
            <View style={styles.slide}>
                <View style={styles.slideInnerContainer}>
                    <View style={styles.imageWrapper}>
                        <Image style={styles.itemImage} source={{uri: item.image}} />
                    </View>
                    <View style={styles.infoWrapper}>
                        <View style={styles.infoTop}>
                            <View style={styles.infoView}>
                                {/*<Icon style={styles.iconStyle} active name={'home'}/>*/}
                                <Text style={styles.title}>{ item.name }</Text>
                            </View>
                            <View style={[styles.infoView, ]}>
                                {this.__renderStar(item.star)}
                            </View>
                            <View style={styles.infoView}>
                                <Icon style={[styles.iconStyle, ]} active name={'map-marker'}/>
                                <Text style={styles.txtAddress} numberOfLines={1}> {item.address}</Text>
                            </View>
                            <View style={styles.infoView}>
                                <Icon style={[styles.iconStyle, ]} active name={'money'}/>
                                <Text numberOfLines={1}> {item.price} </Text>
                            </View>
                            <View style={styles.infoView}>
                                {this.__renderService(item.services)}
                            </View>
                        </View>
                        <View style={styles.breakLine} />
                        <View style={styles.infoBottom}>
                            <Text style={styles.txtDescription}>{ item.description }</Text>
                        </View>
                    </View>

                </View>
            </View>
        )
    };

    __onSnapToItem(index){
        let hotel = this.props.listHotel[index];
        this.props.updateMapRegion(hotel);
    }

    __toggleCarousel(){
        this.setState({
            isHide: !this.state.isHide,
        })
    }

    render()
    {
        return (
                <View style={styles.container}>
                    {!this.state.isHide &&
                        <Carousel
                            data={this.props.listHotel}
                            renderItem={this._renderItem}
                            sliderWidth={sliderWidth}
                            itemWidth={itemWidth}
                            ref={(c)=>{this.__carousel = c;}}
                            containerCustomStyle={styles.carousel}
                            onSnapToItem={this.__onSnapToItem.bind(this)}
                        />
                    }

                    <TouchableOpacity style={styles.toggleButton} onPress={()=>{this.__toggleCarousel();}}>
                        <Text>
                            { this.state.isHide && <Icon name={'eye'} style={{fontSize: 20}} /> }
                            { !this.state.isHide && <Icon name={'eye-slash'} style={{fontSize: 20}} /> }
                        </Text>
                    </TouchableOpacity>
                </View>
        );
    }
}


HotelListCarousel.defaultProps = {
    listHotel: [
        {
            "id": 1,
            "name": "Nông lâm",
            "phone": "01564654",
            "address": "dasd asd 4as54d",
            "lat": 10.871981,
            "long": 106.792598,
            "image": "http://localhost:8000/media/image/hotel/Screen_Shot_2017-12-14_at_13.41.22.png",
            "star": 3.0,
            "price": 1500000.0,
            "description": "asdas das dasd ads",
            "services": [
                "ser 1",
                "ser 2",
                "ser 3",
                "ser 1",
                "ser 2",
                "ser 3"
            ]
        },
        {
            "id": 2,
            "name": "Công nghệ thông tin",
            "phone": "921873981273",
            "address": "alsdj lasdj lkasjd",
            "lat": 10.87026,
            "long": 106.802914,
            "image": "http://localhost:8000/media/image/hotel/Screen_Shot_2017-12-14_at_23.56.34.png",
            "star": 3.0,
            "price": 15000000.0,
            "description": "adakjsdh kjasdk ashdk asdk",
            "services": [
                "ser 1",
                "ser 2",
                "ser 3"
            ]
        },
        {
            "id": 3,
            "name": "Kinh tế luật",
            "phone": "12783687162",
            "address": "ajsd kjahdj haksjdhkja sh",
            "lat": 10.870139,
            "long": 106.778219,
            "image": "http://localhost:8000/media/image/hotel/2017-02-02-16-41-58.jpg",
            "star": 5.0,
            "price": 20000000.0,
            "description": "asjdkakj ha dad sad as d",
            "services": [
                "ser 1",
                "ser 2",
                "ser 3"
            ]
        }
    ],
    updateMapRegion: ()=>null,
};


const styles = StyleSheet.create({
    carousel: {
        position:'absolute', bottom: 20,
        borderColor: 'blue',

    },
    breakLine: {
        width: '100%',
        // borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    iconStyle: {
        fontSize: 15,
    },
    iconStar: {
        marginRight: 5,
    },
    slideInnerContainer: {
        width: '100%',
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'gray',
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    imageWrapper: {
        width: 150,
        height: 200,
        borderWidth: 1,
        borderColor: 'green',
        overflow: 'hidden',
        flex: 4,
        borderBottomStartRadius: 10,
        borderTopStartRadius: 10,
    },
    infoWrapper:{
        flex: 6,
        // borderColor: 'pink',
        // borderWidth: 1,
        padding: 3,
        paddingLeft: 10,

    },
    infoView: {
        flexDirection: 'row',
        marginBottom: 5,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    itemImage: {
        width: 300,
        height: 200,
    },
    container: {
        flex: 1,
        // width: 500,
        // height: 500,
        // borderWidth: 1,
        // borderColor: 'red'
    },
    slide: {
        width: itemWidth,
        height: itemHeight,
        // paddingHorizontal: horizontalMargin,
        borderWidth: 1,
        borderColor: '#b6b6b6',
        borderRadius: 10,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    infoTop: {
        flex: 7,
        overflow: 'hidden',
    },
    infoBottom: {
        flex: 3,
        paddingTop: 20,

    },
    toggleButton: {
        position: 'absolute',
        bottom: 0,
        right: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',

    },
    txtDescription: {
        fontSize: 13,
    },
    txtAddress: {
        fontSize: 10,
    },
    serviceWrapper: {
        borderRadius: 10,
        marginRight: 5,
        backgroundColor: '#000',
        overflow: 'hidden',
    },
    txtService: {
        color: '#fff',
    }

});