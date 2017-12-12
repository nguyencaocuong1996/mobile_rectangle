import React, {Component} from 'react';
import { Container, Header, Form, Content, Button } from 'native-base';
import {OpacityHeader, GreenButton, InputWithIconAndUnderline as MyInput} from '../components/core';
import {Image, StyleSheet, Text, TouchableOpacity, View, AsyncStorage} from 'react-native';
import bgImage from '../assets/img/bgTutorial1.png';
import iconFooco from '../assets/img/icAtTut1.png';
import {common as commonApi} from '../api';
import {connect} from 'react-redux';
import {common as commonHelper} from '../helpers';

class Login extends Component<{}>
{

    static navigationOptions = ({navigation})=>{
        return {
            header: <OpacityHeader navigation={navigation} backScreen={'Home'}/>,
        }
    };

    constructor(props){
        super(props);
        this.state = {
            username: null,
            password: null,
            doingLogin: false,
        };
    }

    _login(){
        this.setState({doingLogin: true});
        commonApi.login(this.state, (response)=>{
            let account = response.data;
            try {
                commonHelper.login(account);
                alert("Login success!");
                console.log("navigate", this.props.navigation);
                this.props.navigation.navigate('Home');
                this.setState({doingLogin:false});
            } catch (e){
                alert("Login error!", e);
                console.log("login Error", e);
                this.setState({doingLogin:false});
            }

        }, (error=>{
            alert("Login fail!");
            console.log("Login fail", error);
            this.setState({doingLogin:false});
        }))
    }

    render()
    {
        return (
            <Container style={styles.container}>
                <Image source={bgImage} style={styles.bgImage} />
                <Content style={styles.content}>
                    <Text style={styles.txtHeader}>
                        WELCOME BACK
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
                                 onChangeText={(email)=>this.setState({username: email})}/>
                        <MyInput secureTextEntry={true}
                                 icon={'unlock'}
                                 placeholder={'PASSWORD'}
                                 onChangeText={(password)=>this.setState({password})}/>
                        <View style={styles.space} />
                        <GreenButton disabled={this.state.doingLogin} text={'Sign In'} onPress={()=>this._login()}/>
                    </Form>
                    <View style={styles.txtSignUpWrap}>
                        <Text style={styles.txtSignUp}>Don't have an account?</Text>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}>
                            <Text style={[styles.txtSignUp, styles.txtSignUpColor]}> Sign Up now</Text>
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

export default connect(mapStateToProps)(Login);

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