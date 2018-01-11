import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';
import {Button, Icon} from "native-base";
import {
    SwitchMenuNavigation,
    TextWithIconLight,
    GradientHeader,
    FloatButton,
} from "../components/core";
import {ReviewSection, DetailMapSection} from "../components/common";
import iconDecoration from '../assets/img/iconDecorationTextDetail.png';

const tabs = {
    detail: 'detail',
    review: 'review',
    map: 'map',
};

const screenWidth = Dimensions.get('window').width;

export default class EventDetail extends Component<{}>
{
    constructor(props){
        super(props);
        this.state = {
            currentTab: tabs.detail,
        };
        let {params} = this.props.navigation.state;
        this.item = params && params.item ? params.item : props.item;
    }

    componentDidMount(){
    }

    __switchTab = (tab)=>{
        this.setState({
            currentTab: tab
        });
    };

    __tabDetail = ()=>{
        const styles = StyleSheet.create({
            container: {
                width: '100%',
                // borderWidth: 1,
                marginBottom: 35,
            },
            decorationWrapper:{
                width: 300,
                height: 40,
                justifyContent: 'center',
                alignSelf: 'center',
                // borderWidth: 1,
            },
            iconDecoration: {
                alignSelf: 'center',
            },
            contentWrapper: {
                marginTop: 10,
                // borderWidth: 1,
            }
        });
        return (
            <View style={styles.container}>
                <View style={styles.decorationWrapper}>
                    <Image style={styles.iconDecoration} source={iconDecoration}/>
                </View>
                <ScrollView style={styles.contentWrapper}>
                    <Text>
                        {this.item.description}
                    </Text>
                </ScrollView>
            </View>
        )
    };

    __tabReview = ()=>{
        return (
            <ReviewSection />
        )
    };

    __tabMap = ()=>{
        const marker = {
            lat: this.item.lat,
            long: this.item.long,
        };
        return (
            <DetailMapSection marker={marker}/>
        );
    };

    __onJoinEvent = ()=> {
        alert("Cảm ơn bạn đã tham gia.");
    };

    __renderTabContent = ()=>{
        switch (this.state.currentTab){
            case tabs.detail:
                return this.__tabDetail();
            case tabs.review:
                return this.__tabReview();
            case tabs.map:
                return this.__tabMap();
        }
    };

    render()
    {
        const buttons = getSwitchButtons(this);
        return (
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <Image style={styles.coverImage} source={{uri: this.item.cover}} />
                </View>
                <View style={styles.metaDataWrapper}>
                    <View style={styles.metaDataTopSection}>
                        <Text style={styles.txtName}>
                            {this.item.name}
                        </Text>
                    </View>
                    <View style={{width: '80%'}}>
                        <TextWithIconLight
                            numberOfLines={2}
                            iconName={'map-marker'}
                            text={this.item.address}/>
                    </View>

                    <FloatButton
                        iconName={'bookmark'}
                        onPress={this.__onJoinEvent.bind(this)}
                        bottom={5}
                        right={15}
                    />
                </View>

                <View style={styles.breakLine} />

                <View style={styles.contentTab}>
                    {this.__renderTabContent()}
                </View>

                <View style={styles.menuWrapper}>
                    <SwitchMenuNavigation buttons={buttons}/>
                </View>
            </View>
        );
    }
}

EventDetail.defaultProps = {
    item: {
        name: 'this is name of hotel',
        price: 20000000,
        image: 'https://www.w3schools.com/css/trolltunga.jpg',
        description: 'this is description',
        star: 3,
        avatar: 'http://i.9mobi.vn/cf/images/2015/03/nkk/anh-avatar-dep-15.jpg',
        address: 'this is address of hotel',
        phone: '0982348747',
        lat: 10.871981,
        long: 106.792598,
    }
};

const styles = StyleSheet.create({
    sliderSection:{
        width: '100%',
        height: 200,
        // borderWidth: 1,
    },
    breakLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#c1c1c1',
        width: '90%',
        alignSelf: 'center',
    },
    contentTab:{
        padding: 10,
        flex: 1,
        // borderWidth: 10,
        marginBottom: 40,
    },
    icon: {
        fontSize: 20,
        color: '#6FACF1',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // borderWidth: 10,
    },
    headerWrapper: {
        width: '100%',
        height: 200,
        // overflow: 'hidden',
        shadowColor: '#b6b6b6',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderBottomStartRadius: screenWidth/6,
        borderBottomEndRadius: screenWidth/6,
        overflow: 'hidden',
    },
    btnToggleHeaderWrapper:{
        position: 'absolute',
        alignSelf: 'center',
        top: 0,
        right: 0,
        backgroundColor: 'transparent',
    },
    btnToggleHeader: {
        fontSize: 30,
        color: '#0085f9'
    },
    coverImage: {
        width: '100%',
        height: '100%',
    },
    avatarWrapper: {
        width: 120,
        height: 120,
        position: 'absolute',
        top: -40,
        left: -40,
        alignSelf: 'center',
        borderRadius: 60,
        overflow: 'hidden',
    },
    avatarImage: {
        width: '100%',
        height: '100%',
    },
    metaDataWrapper: {
        width: '100%',
        height: 90,
        // borderWidth: 1,
        padding: 10,
    },
    metaDataTopSection: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    txtName: {
        fontSize: 20,
        color: '#141F4D',
    },
    starSection: {
        flexDirection: 'row',
        marginTop: 5,
        position: 'absolute',
        right : 10,
    },
    star: {
        fontSize: 15,
        color: "#ffe921",
        marginRight: 5,
    },
    menuWrapper: {
        marginTop: 10,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
    }


});

const getSwitchButtons = (instance)=>{
    return [
        {
            text: 'Chi tiết',
            action: ()=>{instance.__switchTab(tabs.detail)}
        }, {
            text: 'Góp ý',
            action: ()=>{instance.__switchTab(tabs.review)}
        }, {
            text: 'Bản đồ',
            action: ()=>{instance.__switchTab(tabs.map)}
        },
    ];
};