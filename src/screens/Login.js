import React, {Component} from 'react';
import { Container, Header, Form, Content, Button } from 'native-base';
import OpacityHeader from '../components/core/OpacityHeader';
import MyInput from '../components/core/InputWithIconAndUnderline';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import GreenButton from '../components/core/GreenButton';
import bgImage from '../assets/img/bgTutorial1.png';
import iconFooco from '../assets/img/icAtTut1.png';

export default class Login extends Component<{}>
{

    static navigationOptions = ({navigation})=>{
        return {
            header: <OpacityHeader navigation={navigation} backScreen={'Home'}/>,
        }
    };

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
                        <MyInput icon={'envelope-o'} placeholder={'EMAIL'}/>
                        <MyInput icon={'unlock'} placeholder={'PASSWORD'}/>
                        <View style={styles.space} />
                        <GreenButton text={'Sign In'} onPress={()=>alert("login")}/>
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