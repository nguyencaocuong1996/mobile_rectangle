import Home from '../screens/Home'
import {StackNavigator} from 'react-navigation'
import Login from '../screens/Login'

export const MainScreenStack = StackNavigator({
    Home: {
        screen: Home,
    },
    Login: {
        screen: Login,
    },
});
