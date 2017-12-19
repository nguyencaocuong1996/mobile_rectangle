import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import MainScreenStack from './navigation/navigator';
import getTheme from '../native-base-theme/components';
import myTheme from './themes/fontAwsome';
import {StyleProvider} from "native-base";

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <StyleProvider style={getTheme(myTheme)}>
                    <MainScreenStack />
                </StyleProvider>
            </Provider>
        );
    }
}