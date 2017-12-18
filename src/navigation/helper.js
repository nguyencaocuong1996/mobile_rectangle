import React from 'react';
import {StyleSheet, Text, Platform} from 'react-native';
import {Icon} from 'native-base';
import {GradientHeader, HeaderLoginButton, HeaderLogoutButton} from "../components/core/index";
export const isAndroid = Platform.OS === 'android';
export const isIos = !isAndroid;


export const styles = StyleSheet.create({
    tabBarIcon: {
        fontSize: isAndroid ? 20: 15,
        marginBottom: isAndroid ? 0 : 15,
    },
    tabBarLabel: {
        fontSize: isAndroid ? 15: 13,
        marginBottom: 5,
    }

});


export const tabBarOptionsDefault = {
    activeBackgroundColor: '#fff',
    inactiveBackgroundColor: '#fff',
    activeTintColor: '#A3D2FA',
    inactiveTintColor: '#a8a8a8',
    showIcon: true,
    style: {
        backgroundColor: '#fff',
    }
};

export const getHeader = (navigation, {title='', showBackButton=true, children=null, backScreen=null})=>{
    return (
        <GradientHeader title={title} showBackButton={showBackButton} navigation={navigation} backScreen={backScreen}>
            {children}
        </GradientHeader>
    )
};


export const getTabBarItemOptions = (iconName, title)=>{
    return {
        tabBarIcon: ({ tintColor }) => {
            return <Icon style={[styles.tabBarIcon, {color: tintColor}]} name={iconName} />
        },
        tabBarLabel: ({tintColor}) => {
            return <Text style={[styles.tabBarLabel, {color: tintColor}]}>{title}</Text>;
        }
    }
};

export const getNavigationOptions = (navigation, {
    title='',
    showBackButton=true,
    children=null,
    backScreen=null,
    tabBarIconName='home',
    tabBarTitle=null,

})=>{
    tabBarTitle = tabBarTitle || title;
    return {
        title,
        header: getHeader(navigation, {title, backScreen, showBackButton, children}),
        ...getTabBarItemOptions(tabBarIconName, tabBarTitle),
    }
};
