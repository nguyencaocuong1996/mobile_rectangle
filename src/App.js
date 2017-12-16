import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import MainScreenStack from './navigation/navigator';

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <MainScreenStack />
            </Provider>
        );
    }
}