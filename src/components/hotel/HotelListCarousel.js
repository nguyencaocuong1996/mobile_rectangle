import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions, TouchableOpacity,
} from 'react-native';
import Carousel from "react-native-snap-carousel";
import { Item, Input, Icon, StyleProvider } from 'native-base';
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


    _renderItem = ({item}) => {
        console.log(item.title);
        // console.log(this.__carousel.currentIndex);
        const listStar = [];
        for (let i=1; i<5; i++){
            listStar.push({i});
        }
        return (
            <View style={styles.slide}>
                <View style={styles.slideInnerContainer}>
                    <View style={styles.imageWrapper}>
                        <Image style={styles.itemImage} source={{uri: 'http://localhost:8000/media/image/hotel/Screen_Shot_2017-12-14_at_13.41.22.png'}} />
                    </View>
                    <View style={styles.infoWrapper}>
                        <View style={styles.infoTop}>
                            <View style={styles.infoView}>
                                {/*<Icon style={styles.iconStyle} active name={'home'}/>*/}
                                <Text style={styles.title}>{ item.title }</Text>
                            </View>
                            <View style={[styles.infoView, {justifyContent: 'center', alignItems: 'center'}]}>
                                {this.__renderStar(5)}
                            </View>
                            <View style={styles.infoView}>
                                <Icon style={[styles.iconStyle, {marginLeft: 10}]} active name={'map-marker'}/>
                                <Text style={styles.txtAddress} numberOfLines={1}> {item.address}</Text>
                            </View>
                            <View style={styles.infoView}>
                                <Icon style={[styles.iconStyle, {marginLeft: 10}]} active name={'money'}/>
                                <Text numberOfLines={1}> 500,000</Text>
                            </View>
                        </View>
                        <View style={styles.breakLine} />
                        <View style={styles.infoBottom}>
                            <Text style={styles.txtDescription}>{ item.title }</Text>
                        </View>
                    </View>

                </View>
            </View>
        )
    };

    __echo(index){
        console.log(index);
    }

    __toggleCarousel(){
        this.setState({
            isHide: !this.state.isHide,
        })
    }

    render()
    {
        return (
            <StyleProvider style={getTheme(myTheme)}>
                <View style={styles.container}>
                    {!this.state.isHide ?
                        <Carousel
                            data={listItem}
                            renderItem={this._renderItem}
                            sliderWidth={sliderWidth}
                            itemWidth={itemWidth}
                            ref={(c)=>{this.__carousel = c;}}
                            containerCustomStyle={styles.carousel}
                            onSnapToItem={this.__echo.bind(this)}
                        /> : null
                    }

                    <TouchableOpacity style={styles.toggleButton} onPress={()=>{this.__toggleCarousel();}}>
                        <Text>
                            {this.state.isHide ? 'Show' : 'Hide'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </StyleProvider>
        );
    }
}





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
        marginLeft: 5,
    },
    slideInnerContainer: {
        width: '100%',
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
    }


});

const listItem = [
    {
        // img: HotelImg,
        // imgLocation: icLocation,
        title: "Khách sạn Mường Thanh",
        address: "94/16 Trịnh Hoài Đức, Vũng Tàu",
        service1: "Massa",
        service2: "Pool",
        service3: "Breakfast"
    },
    {
        // img: HotelImg,
        // imgLocation: icLocation,
        title: "Khách sạn Mường Thanh",
        address: "94/16 Trịnh Hoài Đức, Vũng Tàu",
        service1: "Massa",
        service2: "Pool",
        service3: "Breakfast"
    },
    {
        // img: HotelImg,
        // imgLocation: icLocation,
        title: "Khách sạn Mường Thanh",
        address: "94/16 Trịnh Hoài Đức, Vũng Tàu",
        service1: "Massa",
        service2: "Pool",
        service3: "Breakfast"
    },
    {
        // img: imgHotel1,
        // imgLocation: icLocation,
        title: "Khách sạn Alacate",
        address: "72 Nam Cao, TP Hồ Chí Minh",
        service1: "Buffet",
        service2: "Pool",
        service3: "Breakfast",
        left: false,
    },
    {
        // img: imgHotel2,
        // imgLocation: icLocation,
        title: "Khách sạn Hoàng Đế ",
        address: "21 Phạm Văn Đồng, Đà Nẵng",
        service1: "Massa",
        service2: "Cafe",
        service3: "Breakfast"
    },
];