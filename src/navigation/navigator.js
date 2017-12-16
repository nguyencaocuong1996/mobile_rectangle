import Home from '../screens/Home'
import {StackNavigator, TabNavigator} from 'react-navigation'
import Login from '../screens/Login'
import HotelList from "../screens/HotelList";
import HotelMap from "../screens/HotelMap";
import commonHelper from "../helpers/commonHelper";
import RestaurantList from "../screens/RestaurantList";
import Register from "../screens/Register";
import Loading from "../screens/Loading";


const hotel = TabNavigator({
    HotelNormalList: {
        screen: HotelList
    },
    HotelMapList: {
        screen: HotelList
    },
});

const restaurant = TabNavigator({
    RestaurantNormalList: {
        screen: HotelList
    },
    RestaurantMapList: {
        screen: HotelList
    },
});


export default StackNavigator({
    Loading: {
        screen: Loading
    },
    // Tutorial: {
    //     screen: Tutorial
    // },
    TabNav: {
        screen: TabNavigator({
            Home: {
                screen: Home,
                navigationOptions: ({ navigation }) => ({
                    tabBarVisible: commonHelper.isLogin(),
                })
            },
            Hotel: {
                screen: hotel
            },
            Restaurant: {
                screen: restaurant
            },
            Settings: {
                screen: RestaurantList
            }
        }, {
            tabBarPosition: 'bottom',
            animationEnabled: true,
            tabBarOptions: {
                // activeTintColor: '#e91e63',
                tabBarVisible: true,
            },
        }),
    },
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    },

});
