import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Image,
} from 'react-native';
import {FloatAddButton} from "../components/core";
import {connect} from 'react-redux';
import {Button, Icon} from "native-base";
import ServiceItem from "../components/home/ServiceItem";
import {hotel as hotelAction, restaurant as restaurantAction} from "../redux/actions";
import commonHelper from "../helpers/commonHelper";
import GradientSection from "../components/core/GradientSection";
import HotelIcon from '../assets/img/HotelIcon.png';
import RestaurantIcon from '../assets/img/RestaurantIcon.png';
import SwitchMenuNavigation from "../components/core/SwitchMenuNavigation";

const services = {
    hotel: 'hotel',
    restaurant: 'restaurant',
};

class MyFavorite extends Component<{}>
{
    constructor(props){
        super(props);
        this.state = {
            service: services.hotel,
            listService: [],
        };
        this.account = commonHelper.account();
    }

    componentDidMount(){
        this.props.getListMyFavoriteHotel();
        this.props.getListMyFavoriteRestaurant();
    }

    __chooseService(type){
        switch (type){
            case services.hotel:
                this.setState({
                    service: services.hotel,
                });
                break;
            case services.restaurant:
                this.setState({
                    service: services.restaurant,
                });
                break;
            default:
                this.setState({
                    service: services.hotel,
                });
                break;
        }
    }

    __getListService(type){
        switch (type){
            case services.hotel:
                return this.props.listMyFavoriteHotel;
            case services.restaurant:
                return this.props.listMyFavoriteRestaurant;
            default:
                return this.props.listMyFavoriteHotel;
        }
    }

    __getCurrentIconImage(){
        switch (this.state.service){
            case services.hotel:
                return HotelIcon;
            case services.restaurant:
                return RestaurantIcon;
            default:
                return HotelIcon;
        }
    }

    _keyExtractor = (item, index)=>{
        return index;
    };

    _renderItem = ({item}) => {
        const onPress = ()=>{
            this.props.navigation.navigate('HotelDetail', {item});
        };
        return (
            <ServiceItem item={item} onPress={onPress}/>
        )
    };

    addService(){
        switch(this.state.service){
            case services.hotel:
                this.props.navigation.navigate('AddHotel');
                break;
            case services.restaurant:
                this.props.navigation.navigate('AddRestaurant');
                break;
        }

    }

    render()
    {
        const listService = this.__getListService(this.state.service);
        const buttons = getSwitchButtons(this);
        return (
            <View style={styles.container}>
                <GradientSection height={120}>
                    <View style={styles.iconSection}>
                        <Image resizeMode={'stretch'} style={styles.iconImage} source={this.__getCurrentIconImage()} />
                    </View>
                </GradientSection>
                <View style={styles.menuWrapper}>
                    <SwitchMenuNavigation buttons={buttons}/>
                </View>
                <View style={styles.listSection}>
                    <FlatList
                        data = {listService}
                        renderItem = {this._renderItem}
                        keyExtractor={this._keyExtractor}
                    />
                </View>
                {/*<FloatAddButton onPress={this.addService.bind(this)} />*/}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listMyFavoriteHotel: state.hotel.listMyFavoriteHotel,
        listMyFavoriteRestaurant: state.restaurant.listMyFavoriteRestaurant,
    };
};

const mapActionToProps = {
    getListMyFavoriteHotel: hotelAction.getListMyFavoriteHotel,
    getListMyFavoriteRestaurant: restaurantAction.getListMyFavoriteRestaurant,
};

export default connect(mapStateToProps, mapActionToProps)(MyFavorite);

const styles = StyleSheet.create({
    menuWrapper: {
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    iconSection: {
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: '#fff',
        position: 'absolute',
        alignSelf: 'center',
        bottom: -80,
    },
    iconImage: {
        width: 60,
        height: 60,
        alignSelf: 'center',
        marginTop: 10,
    },
    txtBold: {
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    txtShadow1:{
        color: '#5e5e5e',
    },
    txtShadow2:{
        color: '#9c9c9c',
    },
    addButton: {
        borderRadius:25,
        width: 50,
        height: 50,
        backgroundColor: '#039bff',
    },
    customerImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        // flex: 3,
    },
    headerSection: {
        height: 100,
        padding: 3,
        borderBottomWidth: 1,
        borderBottomColor: '#d1d1d1',
        flexDirection: 'row',

    },
    basicInfo: {
        marginLeft: 10,
        flex: 7,
        paddingTop: 5,
    },
    // moreInfo: {
    //     marginLeft: 30,
    //     flex: 3,
    //     paddingTop: 5,
    // },
    navSection:{
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 30,
        paddingLeft: 30,
    },
    listSection: {
        flex: 1,
    },
    navButton: {
        padding: 10,
    },
    navItem: {


    },
    breakNavButton: {
        marginTop: 7,
        width: 0,
        height: 23,
        borderRightWidth: 1,
        borderRightColor: '#9c9c9c',
    }


});

const getSwitchButtons = (instance)=>{
    return [
        {
            text: 'Hotel',
            action: ()=>{instance.__chooseService(services.hotel)}
        }, {
            text: 'Restaurant',
            action: ()=>{instance.__chooseService(services.restaurant)}
        },
    ];
};