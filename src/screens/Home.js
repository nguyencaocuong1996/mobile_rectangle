import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    FlatList,
} from 'react-native';
import HomeItem from "../components/home/HomeItem";
import HeaderLoginButton from '../components/core/HeaderLoginButton'
import HotelImg from '../assets/img/home-item-bg-hotel.jpg';
import RestaurantImg from '../assets/img/home-item-bg-restaurant.jpg';
import EventImg from '../assets/img/home-item-bg-event.jpg';
import {Button} from "native-base";
import {common as commonHelper} from '../helpers';
import HeaderLogoutButton from '../components/core/HeaderLogoutButton';


export default class Home extends Component<{}>
{

    static navigationOptions = ({navigation})=>{
        let default_ops = {
            title: 'FooCo',
            tabBarVisible: true,
            headerLeft: null,
        };
        default_ops.headerRight = commonHelper.isLogin() ? <HeaderLogoutButton navigation={navigation} /> : <HeaderLoginButton navigation={navigation} />;
        if (navigation.state.params !== undefined){
            default_ops.title = navigation.state.params.title;
        }
        return default_ops;
    };

    constructor(props){
        super(props);
    }


    _keyExtractor = (item, index)=>{
        return index;
    };

    _renderItem = ({item}) => {
        console.log("name", item.title);
        return (
            <HomeItem item={item} navigation={this.props.navigation}/>
        )
    };


    render()
    {
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
        title: "Khách sạn",
        description: "des 1",
        screen: 'HotelList',
    },
    {
        img: RestaurantImg,
        title: "Nhà hàng",
        description: "des 2",
        left: false,
        screen: 'RestaurantList',
    },
    {
        img: EventImg,
        title: "Event",
        description: "des 3",
        screen: 'RestaurantList',
    },
];