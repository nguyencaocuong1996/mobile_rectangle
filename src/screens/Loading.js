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
            this.props.navigation.navigate('Home');
        }, (error)=>{
            console.log("not login", error);
            this.props.navigation.navigate('Tutorial');
        });
    }

    render()
    {
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>FOOCO</Text>
            </View>

        );
    }
}

const mapStateToProps = (state)=>({
    account: state.common.account,
});


export default connect(mapStateToProps, {login: commonAction.login})(Loading);


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    txt:{
        fontSize: 30,
        color: '#ff0060'
    }
});