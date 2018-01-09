import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList, Text, Image
} from 'react-native';
import SettingSection from "../components/setting/SettingSection";
import commonHelper from "../helpers/commonHelper";
import avatar2 from '../assets/img/home-item-bg-hotel.jpg';
import GradientSection from "../components/core/GradientSection";
import ButtonWithTextUnderline from "../components/core/MenuItemWithTextUnderline";


export default class Settings extends Component<{}>
{
    constructor(props){
        super(props);
        this.account = commonHelper.account();
    }

    __renderItem = ({item})=>{
        return <SettingSection config={item}/>
    };

    __keyExtractor = (item, index)=>{
        return index;
    };

    render()
    {
        return (
            <View style={styles.container}>
                <GradientSection height={190}>
                    {accountHeader({name: this.account.name , email: this.account.email})}
                </GradientSection>
                <FlatList
                    data={listSection(this.props.navigation)}
                    renderItem={this.__renderItem}
                    keyExtractor={this.__keyExtractor}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        alignSelf:'center',
    },
    h2: {
        color: '#eeeeee',
        fontSize: 15,
        alignSelf: 'center',
    },
    avatarWrapper: {
        width: 100,
        height: 100,
        borderRadius: 50,
        shadowColor: '#0085f9',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 0.7,
        alignSelf: 'center',
        marginBottom: 10,
        // overflow: 'hidden',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    accountSection: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,

    }
});

const accountHeader = (account)=>{
    return (
        <View style={[styles.accountSection,{flexDirection: 'column', alignSelf: 'center'}]}>
            <View style={[styles.avatarWrapper,]}>
                <Image source={avatar2} style={styles.avatar} />
            </View>
            <View style={{backgroundColor:'transparent'}}>
                <Text style={styles.h1}>{account.name}</Text>
                <Text style={styles.h2}>{account.email}</Text>
            </View>
        </View>
    );
};

const listSection = (navigation)=> [
    {
        title: "TÀI KHOẢN CÁ NHÂN",
        header: null,
        listItem: [
            {
                title: 'Sửa hồ sơ',
                iconName: 'user',
                action: ()=>{},
            },
        ]
    },
    {
        title: "LỊCH SỬ",
        header: null,
        listItem: [
            {
                title: 'Khách sạn đã đặt',
                iconName: 'bed',
                action: ()=>{},
            },
            {
                title: 'Nhà hàng đã đặt',
                iconName: 'cutlery',
                action: ()=>{},
            },
            {
                title: 'Địa điểm đã tới',
                iconName: 'map-marker',
                action: ()=>{},
            },
            {
                title: 'Sự kiện đã tham gia',
                iconName: 'calendar',
                action: ()=>{},
            },
        ]
    },
    {
        title: "...",
        header: null,
        listItem: [
            {
                title: 'Giới thiệu',
                iconName: 'align-left',
                action: ()=>{},
            },
            {
                title: 'Câu hỏi',
                iconName: 'question-circle-o',
                action: ()=>{},
            },
            {
                title: 'Liên hệ với chúng tôi',
                iconName: 'address-book',
                action: ()=>{},
            },
            {
                title: 'Đăng xuất',
                iconName: 'sign-out',
                action: ()=>{
                    commonHelper.logout();
                    navigation.navigate('Login');
                },
            }
        ]
    }
];