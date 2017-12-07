import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput, FlatList,
    TouchableOpacity,
    Image
} from 'react-native';

import Swiper from 'react-native-swiper';
import BgTut1 from '../assets/img/bgTutorial1.png';
import BgTut5 from '../assets/img/bgTutorial5.jpg';
import IcTut1 from '../assets/img/icAtTut1.png';
import {Button} from 'native-base';

export default class Loading extends Component<{}>
{

    static navigationOptions = {
        header: null,
    };

    render()
    {
        return (
            <Swiper style={styles.wrapper}>
                <View style={styles.container}>
                    <Image source={BgTut5} style={styles.tutImg} />
                    <Image source={IcTut1} style={styles.icTut1}/>
                    <Text style={styles.appName}>FooCo</Text>
                    <Text style={styles.txtDescription}>asdasdashdjkh</Text>
                    <TouchableOpacity style={styles.cancelButton}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>


                </View>
                <View style={styles.container}>
                    <Text>abc</Text>
                </View>
                <View style={styles.container}>
                    <Text>abc</Text>
                </View>
            </Swiper>

        );
    }
}


const styles = StyleSheet.create({
    wrapper:{

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
        position: 'absolute',
        // flex: 1,
        resizeMode: 'stretch',
        width: '100%',
        height: '100%',
    },
    txtDescription:{
        position: 'absolute',
        bottom: 100,
        fontSize: 20,
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
    }


});