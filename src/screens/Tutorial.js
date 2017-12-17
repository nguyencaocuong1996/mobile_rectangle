import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import {connect} from 'react-redux';

import {common as commonHelper} from "../helpers";

import {common as commonAction} from '../redux/actions'

import Swiper from 'react-native-swiper';
import BgTut1 from '../assets/img/bgTutorial1.png';
import BgTut3 from '../assets/img/bgTutorial3.png';
import BgTut4 from '../assets/img/bgTutorial4.png';
import BgTut5 from '../assets/img/bgTutorial5.jpg';
import IcTut1 from '../assets/img/icAtTut1.png';
import Home from "./Home";


class Loading extends Component<{}>
{

    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props);
        commonHelper.checkLogin((account)=>{
            this.props.navigation.navigate('Home');
        }, (error)=>{
            console.log("Check login error", error);
        });
    }

    render()
    {
        return (
            <Swiper style={styles.wrapper} dotColor={'#E5E5E5'} activeDotColor={'#70B1B6'}>
                <View style={styles.container}>
                    <Image source={BgTut5} style={[styles.tutImg, styles.tutImg1]} />
                    <Image source={IcTut1} style={styles.icTut1}/>
                    <Text style={styles.appName}>FooCo</Text>
                    <Text style={styles.txtDescription}>asdasdashdjkh</Text>
                    <TouchableOpacity style={styles.cancelButton} onPress={()=>this.props.navigation.navigate('Home')}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.container}>
                    <Image source={BgTut1} style={styles.tutImg}/>
                    <Text style={[styles.txtDescription, styles.txtBlue]}>this is example text</Text>
                </View>
                <View style={styles.container}>
                    <Image source={BgTut3} style={styles.tutImg}/>
                    <Text style={[styles.txtDescription, styles.txtBlue]}>this is example text</Text>
                </View>
                <View style={styles.container}>
                    <Image source={BgTut4} style={styles.tutImg}/>
                    <Text style={[styles.txtDescription, styles.txtBlue]}>
                        {`this is example text`}
                    </Text>
                    <View style={styles.txtUseWrap}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
                            <Text style={styles.txtUse}>
                                {`\nLet's use!`}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Swiper>

        );
    }
}

const mapStateToProps = (state)=>({
    account: state.common.account,
});


export default connect(mapStateToProps, {login: commonAction.login})(Loading);




const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: '#fff',
    },
    appName:{
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        position: 'absolute',
        top: '25%'

    },
    icTut1:{
        width: 70,
        height: 70,
        position: 'absolute',
        top: '15%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tutImg: {
        resizeMode: 'stretch',
        position: 'absolute',
        width: '90%',
        height: '70%',
        top:0,

    },
    tutImg1: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    txtDescription:{
        position: 'absolute',
        bottom: '25%',
        fontSize: 17,
        color: '#fff',
    },
    cancelButton: {
        position: 'absolute',
        right: 20,
        bottom: 50,
    },
    cancelText: {
        fontSize: 17,
        color: '#fff',
    },
    txtBlue:{
        color: '#70B1B6',
    },
    txtUseWrap:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '10%',
    },
    txtUse:{
        color: '#ff8a40',
        fontWeight: 'bold',
        fontSize: 18,
    }


});