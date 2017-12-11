import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {connect} from 'react-redux';

import {common as commonHelper} from "../helpers";

import {common as commonAction} from '../redux/actions'


class Loading extends Component<{}>
{

    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props);
        // commonHelper.setLogin({id: 11, email: 'asdasd'});
        commonHelper.checkLogin((account)=>{
            commonHelper.reduxLogin(account);
            this.props.navigation.navigate('Home');
        }, (error)=>{
            console.log("not login", error);
            this.props.navigation.navigate('Home');
        });
    }

    render()
    {
        return (
            <View>
                <Text>adlasdklaj</Text>
            </View>

        );
    }
}

const mapStateToProps = (state)=>({
    account: state.common.account,
});


export default connect(mapStateToProps, {login: commonAction.login})(Loading);


const styles = StyleSheet.create({

});