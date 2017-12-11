import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput, FlatList,
} from 'react-native';
import HotelItem from "../components/hotel/HotelItem";

import HotelImg from '../assets/img/ivHotel.jpg';
import imgHotel1 from '../assets/img/Cassabella.jpg'
import imgHotel2 from '../assets/img/kimminh.jpg'
import RestaurantImg from '../assets/img/home-item-bg-restaurant.jpg';
import EventImg from '../assets/img/home-item-bg-event.jpg';
import icLocation from '../assets/img/icLocation.png'
import settings from '../config';

export default class HotelList extends Component<{}>
{
    static navigationOptions = {
        title: 'List Hotel',
    };


    _keyExtractor = (item, index)=>{
        return index;
    };

    _renderItem = ({item}) => {
        console.log("name", item.title);
        return (
            <HotelItem isLeft={item.left}
                      imgSrc={item.img}
                      title={item.title}
                      address={item.address}
                       service1={item.service1}
                       service2={item.service2}
                       service3={item.service3}
                       imgLocation = {item.icLocation}
            />
        )
    };


    render()
    {
        console.log(listItem);
        return (
            <View style={styles.container}>
                <View style={styles.searchSection}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder={"🔍 Search services"}
                        // onChangeText={(text) => this.setState({text})}
                        // value={this.state.text}
                    />
                </View>
                <View style={styles.menuSection}>
                    <FlatList
                        data = {listItem}
                        renderItem = {this._renderItem}
                        keyExtractor={this._keyExtractor}
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchSection: {
        flex:1,
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#9c9c9c',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 0.7,
        elevation: 10,
        marginBottom: 10,
    },
    menuSection: {
        flex:7,
        flexDirection: 'column',
        padding: 5,
        backgroundColor: '#fff',
    },
    searchInput: {
        height: 40,
        borderColor: '#d1d1d1',
        borderWidth: 1,
        minWidth: 350,
        borderRadius: 20,
        textAlign: 'center',
    }


});

const listItem = [
    {
        img: HotelImg,
        imgLocation: icLocation,
        title: "Khách sạn Mường Thanh",
        address: "94/16 Trịnh Hoài Đức, Vũng Tàu",
        service1: "Massa",
        service2: "Pool",
        service3: "Breakfast"
    },
    {
        img: imgHotel1,
        imgLocation: icLocation,
        title: "Khách sạn Alacate",
        address: "72 Nam Cao, TP Hồ Chí Minh",
        service1: "Buffet",
        service2: "Pool",
        service3: "Breakfast",
        left: false,
    },
    {
        img: imgHotel2,
        imgLocation: icLocation,
        title: "Khách sạn Hoàng Đế ",
        address: "21 Phạm Văn Đồng, Đà Nẵng",
        service1: "Massa",
        service2: "Cafe",
        service3: "Breakfast"
    },
];