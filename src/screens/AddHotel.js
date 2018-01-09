import React, {Component} from 'react';
import { Container, Header, Form, Content, Button } from 'native-base';
import {OpacityHeader, GreenButton, InputWithIconAndUnderline as MyInput} from '../components/core';
import {Image, StyleSheet, Text, TouchableOpacity, View, AsyncStorage} from 'react-native';
import bgImage from '../assets/img/AddHotelBackground.jpg';
import iconFooco from '../assets/img/icAtTut1.png';
import {hotel as hotelApi} from '../api';
import {connect} from 'react-redux';

class AddHotel extends Component<{}>
{

    static navigationOptions = ({navigation})=>{
        return {
            header: <OpacityHeader navigation={navigation}/>,
        }
    };

    constructor(props){
        super(props);
        console.log("navigate", props);
        this.state = {
            name: null,
            address: null,
            phone: null,
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
        hotelApi.add(this.state,(response)=>{
            alert("Thêm thành công!");
            this.props.navigation.navigate('Hotel');
        },(error)=>{
            alert("Có lỗi xảy ra.");
        });
    }

    render()
    {
        return (
            <Container style={styles.container}>
                <Image source={bgImage} style={styles.bgImage} />
                <Content style={styles.content}>
                    <Text style={styles.txtHeader}>
                        THÊM KHÁCH SẠN CỦA BẠN
                    </Text>
                    <View style={styles.iconWrap}>
                        <Image source={iconFooco} style={styles.icon}/>
                        <Text style={styles.iconText}>
                            FOOCO
                        </Text>
                    </View>
                    <Form style={styles.form}>
                        <MyInput icon={'h-square'}
                                 placeholder={'Tên khách sạn'}
                                 onChangeText={(name)=>this.setState({name})}/>
                        <MyInput icon={'phone'}
                                 placeholder={'Số điện thoại'}
                                 onChangeText={(phone)=>this.setState({phone})}/>
                        <MyInput icon={'map-marker'}
                                 placeholder={'Địa chỉ'}
                                 onChangeText={(address)=>this.setState({address})}/>
                        <MyInput icon={'star'}
                                 placeholder={'Số sao'}
                                 onChangeText={(star)=>this.setState({star})}/>
                        <MyInput icon={'money'}
                                 placeholder={'Giá'}
                                 onChangeText={(price)=>this.setState({price})}/>
                        <MyInput icon={'align-center'}
                                 placeholder={'Mô tả'}
                                 onChangeText={(description)=>this.setState({description})}/>
                        <View style={styles.space} />
                        <GreenButton disabled={this.state.isAdding}
                                     text={'Thêm'}
                                     onPress={()=>this._add()}/>
                    </Form>
                    <View style={styles.txtSignUpWrap}>
                        {/*<Text style={styles.txtSignUp}>Don't have an account?</Text>*/}
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('MyService')}>
                            <Text style={[styles.txtSignUp, styles.txtSignUpColor]}>
                                Quản lý khách sạn của bạn.
                            </Text>
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