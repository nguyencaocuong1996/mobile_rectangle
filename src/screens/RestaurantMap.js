import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput, FlatList,
} from 'react-native';
import RestaurantItem from "../components/restaurant/RestaurantItem";

import imgRestaurant4 from '../assets/img/imgRestaurant4.jpeg';
import imgRestaurant2 from '../assets/img/imgRestaurant2.jpg';
import imgRestaurant3 from '../assets/img/imgRestaurant3.jpg';
import settings from '../config';

export default class RestaurantList extends Component<{}>
{
    static navigationOptions = {
        title: 'List Restaurant',
    };


    _keyExtractor = (item, index)=>{
        return index;
    };

    _renderItem = ({item}) => {
        console.log("name", item.title);
        return (
            <RestaurantItem isLeft={item.left}
                            imgSrc={item.img}
                            title={item.title}
                            description={item.description}
                            navigation={this.props.navigation}
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
        img: imgRestaurant4,
        title: "Nhà hàng Rectangle",
        description: "21 Lương Định Của, Quận 8, TP HCM",
    },
    {
        img: imgRestaurant2,
        title: "Nhà hàng Diamond",
        description: "12 Nguyễn Huệ, Quận 1, TP HCM",
        left: false,
    },
    {
        img: imgRestaurant3,
        title: "Nhà hàng For You",
        description: "320/12 Trường Chinh, TP HCM",
    },
];