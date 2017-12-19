import React, {Component} from 'react';
import { Container, Header, Form, Content, Button } from 'native-base';
import {OpacityHeader, GreenButton, InputWithIconAndUnderline as MyInput} from '../components/core';
import {Image, StyleSheet, Text, TouchableOpacity, View, AsyncStorage} from 'react-native';
import bgImage from '../assets/img/bgTutorial1.png';
import iconFooco from '../assets/img/icAtTut1.png';
import {common as commonApi, hotel as hotelApi} from '../api';
import {connect} from 'react-redux';
import {common as commonHelper} from '../helpers';

class AddHotel extends Component<{}>
{

    static navigationOptions = ({navigation})=>{
        return {
            header: <OpacityHeader navigation={navigation}/>,
        }
    };

    constructor(props){
        super(props);
        this.state = {
            name: null,
            address: null,
            star: 0,
            price: 0,
            description: null,
            isAdding: false,
        };
    }

    componentDidMount(){
    }

    _add(){
        this.setState({isAdding: true});

    }

    render()
    {
        return (
            <Container style={styles.container}>
                <Image source={bgImage} style={styles.bgImage} />
                <Content style={styles.content}>
                    <Text style={styles.txtHeader}>
                        ADD YOUR HOTEL
                    </Text>
                    <View style={styles.iconWrap}>
                        <Image source={iconFooco} style={styles.icon}/>
                        <Text style={styles.iconText}>
                            FOOCO
                        </Text>
                    </View>
                    <Form style={styles.form}>
                        <MyInput icon={'h-square'}
                                 placeholder={'HOTEL NAME'}
                                 onChangeText={(email)=>this.setState({username: email})}/>
                        <MyInput icon={'map-marker'}
                                 placeholder={'HOTEL ADDRESS'}
                                 onChangeText={(email)=>this.setState({username: email})}/>
                        <MyInput icon={'star'}
                                 placeholder={'STAR'}
                                 onChangeText={(email)=>this.setState({username: email})}/>
                        <MyInput icon={'money'}
                                 placeholder={'PRICE'}
                                 onChangeText={(email)=>this.setState({username: email})}/>
                        <MyInput icon={'align-center'}
                                 placeholder={'DESCRIPTION'}
                                 onChangeText={(email)=>this.setState({username: email})}/>
                        <View style={styles.space} />
                        <GreenButton disabled={this.state.doingLogin} text={'ADD'} onPress={()=>this._add()}/>
                    </Form>
                    <View style={styles.txtSignUpWrap}>
                        {/*<Text style={styles.txtSignUp}>Don't have an account?</Text>*/}
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyService')}>
                            <Text style={[styles.txtSignUp, styles.txtSignUpColor]}> Manage your Hotel?</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state){
    return {
        account: state.common.account,
    }
}

export default connect(mapStateToProps)(AddHotel);

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',

    },
    content: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: '100%',
    },
    form:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    bgImage:{
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    space: {
        marginBottom: 30,
    },
    iconWrap:{
        flex:1,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 50,
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 5,
    },
    iconText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    },
    txtHeader:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        color: '#fff'
    },
    txtSignUpWrap:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,

    },
    txtSignUp:{
        color: '#fff',
        fontSize: 14,
    },
    txtSignUpColor: {
        color: '#00ff37',
    }

});