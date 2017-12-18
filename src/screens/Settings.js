import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList, Text, Image
} from 'react-native';
import SettingSection from "../components/setting/SettingSection";
import commonHelper from "../helpers/commonHelper";
import avatar2 from '../assets/img/home-item-bg-hotel.jpg';


export default class Settings extends Component<{}>
{

    static navigationOptions = ({navigation}) => ({
        title: 'More...'
    });

    constructor(props){
        super(props);
    }

    __renderItem = ({item})=>{
        return <SettingSection config={item} />
    };

    __keyExtractor = (item, index)=>{
        return index;
    };

    render()
    {
        return (
            <View style={styles.container}>
                <FlatList
                    data={listSection(commonHelper.account(), this.props.navigation)}
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
        fontSize: 17,
    },
    h2: {
        color: '#A3A3A3',
        fontSize: 15,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    }

});

const accountHeader = (account)=>{
    return (
        <View style={{flexDirection: 'row'}}>
            <Image source={avatar2} style={styles.avatar} />
            <View>
                <Text style={styles.h1}>{account.name}</Text>
                <Text style={styles.h2}>{account.email}</Text>
            </View>
        </View>
    );
};

const listSection = (account, navigation)=> [
    {
        title: "PERSONAL ACCOUNT",
        header: accountHeader(account),
        listItem: [
            {
                title: 'Edit profile',
                action: ()=>{},
            },
            {
                title: 'My payment info',
                action: ()=>{},
            }
        ]
    },
    {
        title: "ABC ACCOUNT",
        header: <Text>This is my header</Text>,
        listItem: [
            {
                title: 'Edit profile',
                action: ()=>{},
            },
            {
                title: 'My payment info',
                action: ()=>{},
            }
        ]
    },
    {
        title: "MORE",
        header: <Text>This is my header</Text>,
        listItem: [
            {
                title: 'About Us',
                action: ()=>{},
            },
            {
                title: 'FAQ',
                action: ()=>{},
            },
            {
                title: 'Contact Us',
                action: ()=>{},
            },
            {
                title: 'Logout',
                action: ()=>{
                    commonHelper.logout();
                    navigation.navigate('Login');
                },
            }
        ]
    }
];