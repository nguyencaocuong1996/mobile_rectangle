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
import SSHomeLogin from '../assets/img/SSHomeLogin.png';
import SSFavorite from '../assets/img/SSFavorite.png';
import SSExplore from '../assets/img/SSExplore.png';
import mainBackground from '../assets/img/LoginBackgound.jpg';
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
            this.props.navigation.navigate('Loading');
        }, (error)=>{
            console.log("Check login error", error);
        });
    }

    render()
    {
        return (
            <Swiper style={styles.wrapper} dotColor={'#E5E5E5'} activeDotColor={'#70B1B6'}>
                <View style={styles.container}>
                    <Image source={mainBackground} style={[styles.tutImg, styles.tutImg1]} />
                    <Image source={IcTut1} style={styles.icTut1}/>
                    <Text style={styles.appName}>FooCo</Text>
                    <Text style={styles.txtDescription2}>
                        Du lịch và khám phá
                    </Text>
                    <TouchableOpacity style={styles.cancelButton}
                                      onPress={()=>this.props.navigation.navigate('Home')}>
                        <Text style={styles.cancelText}>Bỏ qua</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.container}>
                    <Image source={SSHomeLogin} style={styles.tutImg}/>
                    <Text style={[styles.txtDescription, styles.txtBlue]}>
                        Dễ dàng tìm kiếm nhà hàng, khách sạn, địa điểm du lịch, sự kiện.
                    </Text>
                </View>
                <View style={styles.container}>
                    <Image source={SSFavorite} style={styles.tutImg}/>
                    <Text style={[styles.txtDescription, styles.txtBlue]}>
                        Thêm những nhà hàng, khách sạn, ưa thích vào danh sách của mình.
                    </Text>
                </View>
                <View style={styles.container}>
                    <Image source={SSExplore} style={styles.tutImg}/>
                    <Text style={[styles.txtDescription, styles.txtBlue]}>

                    </Text>
                    <View style={styles.txtUseWrap}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Loading')}>
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
        height: '80%',
        top:30,

    },
    tutImg1: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top:0,
    },
    txtDescription2:{
        position: 'absolute',
        bottom: '50%',
        fontSize: 17,
        color: '#fff',
        width: '90%',
        alignSelf: 'center',
        left: '30%',
    },
    txtDescription:{
        position: 'absolute',
        bottom: '5%',
        fontSize: 17,
        color: '#fff',
        width: '90%',
        alignSelf: 'center',
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