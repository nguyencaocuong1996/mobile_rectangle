import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, Image
} from 'react-native';

import {connect} from 'react-redux';
import {common as commonAction} from '../redux/actions'
import loadingImg from '../assets/img/loading.gif';
import txtLoading from '../assets/img/textLoading.gif';
import GradientSection from "../components/core/GradientSection";
class Loading extends Component<{}>
{

    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props);
    }

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('Home');
        }, 3000);
    }

    render()
    {
        return (
            <View style={styles.container}>
                <GradientSection height={300}>
                    <Text style={styles.txt}>MY DISTRICT9</Text>
                    <Image style={styles.txtLoading} source={txtLoading} />
                    <View style={styles.loadingWrapper}>
                        <Image style={styles.loadingImg} source={loadingImg} />
                    </View>

                </GradientSection>

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
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    txt:{
        fontSize: 30,
        color: '#fff',
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: 'transparent',
        top: 50,
        fontWeight: 'bold'
    },
    txtLoading: {
        width: 128,
        height: 36,
        alignSelf: 'center',
        position: 'absolute',
        top: 200,
        backgroundColor: 'transparent'
    },
    loadingImg: {
        width: 128,
        height: 128,
    },

    bgImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    iconImage: {
        width: 128,
        height: 128,
        alignSelf: 'center',
        position: 'absolute',
        top: 100,
    },
    loadingWrapper: {
        position: 'absolute',
        width: 128,
        height: 128,
        borderRadius: 64,
        backgroundColor: '#fff',
        alignSelf: 'center',
        bottom: -64
    }
});