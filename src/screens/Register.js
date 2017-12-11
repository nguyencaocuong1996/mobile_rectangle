import React, {Component} from 'react';
import { Container, Header, Form, Content, Button } from 'native-base';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import GreenButton from '../components/core/GreenButton';
import bgImage from '../assets/img/bgTutorial1.png';
import iconFooco from '../assets/img/icAtTut1.png';
import {InputWithIconAndUnderline as MyInput, OpacityHeader} from '../components/core';
import {common as apiCommon} from '../api';

export default class Register extends Component<{}>
{

    static navigationOptions = ({navigation}) => ({
        header: <OpacityHeader navigation={navigation}/>,
    });

    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null,
            first_name: null,
            last_name: null,
            phone: null,
        };

    }

    _doGet = ()=>{
        console.log("state", this.state);
        // let {email, password, first_name, last_name, phone} = this.state;

        apiCommon.register(this.state, (response)=>{
            alert("success");
            console.log(response);
        }, (error)=>{
            alert("err");
            console.log(error.response);
        })
    };

    render()
    {
        return (
            <Container style={styles.container}>
                <Image source={bgImage} style={styles.bgImage} />
                <Content style={styles.content}>
                    <Text style={styles.txtHeader}>
                        LET'S GET STARTED
                    </Text>
                    <View style={styles.iconWrap}>
                        <Image source={iconFooco} style={styles.icon}/>
                        <Text style={styles.iconText}>
                            FOOCO
                        </Text>
                    </View>
                    <Form style={styles.form}>
                        <MyInput icon={'envelope-o'}
                                 placeholder={'EMAIL'}
                                 onChangeText={(email)=>{this.setState({email})}}

                        />
                        <MyInput icon={'unlock'}
                                 placeholder={'PASSWORD'}
                                 onChangeText={(password)=>{this.setState({password})}}
                                 secureTextEntry={true}
                        />
                        <MyInput icon={'user'}
                                 placeholder={'FIRST NAME'}
                                 onChangeText={(first_name)=>{this.setState({first_name})}}
                        />
                        <MyInput icon={'user'}
                                 placeholder={'LAST NAME'}
                                 onChangeText={(last_name)=>{this.setState({last_name})}}
                        />
                        <MyInput icon={'phone'}
                                 placeholder={'PHONE'}
                                 onChangeText={(phone)=>{this.setState({phone})}}
                        />
                        <View style={styles.space} />
                        <GreenButton text={'Sign Up'} onPress={this._doGet.bind(this)}/>
                    </Form>
                    <View style={styles.txtSignUpWrap}>
                        <Text style={styles.txtSignUp}>Have an account?</Text>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                            <Text style={[styles.txtSignUp, styles.txtSignUpColor]}> Sign In now</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
}

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
        marginBottom: 20,
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