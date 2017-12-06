import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
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
                <View style={styles.searchSection}>
                    <TextInput
                        style={styles.searchInput}
                        // onChangeText={(text) => this.setState({text})}
                        // value={this.state.text}
                    />
                </View>
                <View style={styles.menuSection}>
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
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor:'black',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop:100,
    },
    menuSection: {
        flex:4,
        flexDirection: 'column',
        padding: 5,
        backgroundColor: '#fff',
    },
    searchInput: {
        marginTop: 50,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width:200
    }


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
    },
];