import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import HomeItem from "../components/home/HomeItem";

import HotelImg from '../assets/img/home-item-bg-hotel.jpg';
import RestaurantImg from '../assets/img/home-item-bg-restaurant.jpg';
import EventImg from '../assets/img/home-item-bg-event.jpg';
import settings from '../config';

export default class Home extends Component<{}>
{
    render()
    {
        return (
            <View style={styles.container}>
            <Text>{settings.api_key}</Text>
                {
                    listItem.map((item, index)=>{
                        return <HomeItem key={index}
                                         isLeft={item.left}
                                         imgSrc={item.img}
                                         title={item.title}
                                         description={item.description}/>
                    })
                }
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const listItem = [
    {
        img: HotelImg,
        title: "Khách sạn",
        description: "des 1",
    },
    {
        img: RestaurantImg,
        title: "Nhà hàng",
        description: "des 2",
        left: false,
    },
    {
        img: EventImg,
        title: "Event",
        description: "des 3",
    }
];