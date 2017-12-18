import {getNavigationOptions, getTabBarItemOptions, tabBarOptionsDefault} from './helper';

import {
    Home as HomeScreen,
    MyFavorite as FavoriteScreen,
    MyServices,
    Settings,
} from '../screens';


import {TabNavigator} from "react-navigation";


const mainTabStack = TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation})=>{
            return {
                ...getTabBarItemOptions('home', 'FooCo')
            };
        },
    },
    MyFavorite: {
        screen: FavoriteScreen,
        navigationOptions: ({ navigation }) => {
            const title = 'Favorite';
            return {
                ...getNavigationOptions(navigation, {title, tabBarIconName: 'star'})
            };
        },
    },
    MyService: {
        screen: MyServices,
        navigationOptions: ({ navigation }) => {
            const title = 'Services';
            return {
                ...getNavigationOptions(navigation, {title, tabBarIconName: 'tags'})
            };
        },
    },
    Settings: {
        screen: Settings,
        navigationOptions: ({ navigation }) => {
            const title = 'More';
            return {
                ...getNavigationOptions(navigation, {title, tabBarIconName: 'ellipsis-h'})
            };
        },
    }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    tabBarOptions: {
        ...tabBarOptionsDefault,
        tabBarVisible: false,
    },
    lazyLoad: true,
});

export default mainTabStack;