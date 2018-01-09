import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import HomeItem from "../components/home/HomeItem";
import HeaderLoginButton from '../components/core/HeaderLoginButton'
import HotelImg from '../assets/img/home-item-bg-hotel.jpg';
import RestaurantImg from '../assets/img/home-item-bg-restaurant.jpg';
import EventImg from '../assets/img/home-item-bg-event.jpg';
import {Button, Icon} from "native-base";
import {common as commonHelper} from '../helpers';
import {
    HeaderLogoutButton,
    GradientHeader,
    GradientSection
} from '../components/core';
import {SearchSection} from '../components/home';
import PlaceImg from '../assets/img/placeHomeImage.jpg';



export default class Home extends Component<{}>
{
    static navigationOptions = ({navigation})=> {
        const isLogin = commonHelper.isLogin();
        return {
            title: 'FooCo',
            tabBarVisible: isLogin,
            headerLeft: null,
            header: (
                <GradientHeader title={'FOOCO'} showBackButton={false}>
                    {isLogin && <HeaderLogoutButton navigation={navigation}/>}
                    {!isLogin && <HeaderLoginButton navigation={navigation}/>}
                </GradientHeader>
            )
        };
    };
    constructor(props){
        super(props);
        this.state = {
            isSearching: false,
            searchKeyword: "",
        }
    }


    _keyExtractor = (item, index)=>{
        return index;
    };

    _renderItem = ({item}) => {
        return (
            <HomeItem item={item} navigation={this.props.navigation}/>
        )
    };

    __changeTextSearch(text){
        if (text === ""){
            this.setState({
                isSearching: false,
                searchKeyword: "",
            });
        } else {
            this.setState({
                isSearching: true,
                searchKeyword: text,
            });
        }
    }

    render()
    {
        return (
            <View style={styles.container}>
                <GradientSection height={80}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Explore')}}>
                        <Text style={styles.txtExplore}>
                            <Icon style={{color: '#ffffff',fontSize:20,}} name={'hand-o-right'} />
                            <Text> Khám phá</Text>
                        </Text>
                    </TouchableOpacity>
                </GradientSection>
                <View style={styles.searchSection}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder={"🔍 Tìm kiếm"}
                        onChangeText={(text) => this.__changeTextSearch(text)}
                        // value={this.state.text}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                    />
                </View>
                {!this.state.isSearching &&
                <View style={styles.menuSection}>
                    <FlatList
                        data = {listItem}
                        renderItem = {this._renderItem}
                        keyExtractor={this._keyExtractor}
                    />
                </View>
                }
                {this.state.isSearching &&
                    <View style={styles.searchDetailSection}>
                        <SearchSection navigation={this.props.navigation} keyword={this.state.searchKeyword} />
                    </View>
                }

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txtExplore: {
        fontSize: 20,
        color: '#F7FBFE',
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    searchSection: {
        position: 'absolute',
        top: 50,
        alignSelf: 'center',
        flex:1,
        flexDirection: 'row',
        height: 50,
        width: '90%',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
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
    searchDetailSection:{
        marginTop: 30,
        padding: 5,
        flex: 1,
    },
    menuSection: {
        flex:7,
        flexDirection: 'column',
        padding: 5,
        backgroundColor: '#fff',
        marginTop: 30,
        // borderWidth: 1,
        alignItems: 'center',
    },
    searchInput: {
        width: '100%',
        height: 50,
        // borderColor: '#d1d1d1',
        // borderWidth: 1,
        minWidth: 350,
        borderRadius: 25,
        textAlign: 'center',
        position: 'absolute',
        backgroundColor: '#fff',
    }


});

const listItem = [
    {
        img: HotelImg,
        title: "Khách sạn",
        description: "des 1",
        screen: 'Hotel',
    },
    {
        img: RestaurantImg,
        title: "Nhà hàng",
        description: "des 2",
        left: false,
        screen: 'Restaurant',
    },
    {
        img: PlaceImg,
        title: "Địa điểm",
        description: "des 3",
        screen: 'Place',
    },
    {
        img: EventImg,
        title: "Sự kiện",
        description: "des 3",
        screen: 'Event',
    },
];