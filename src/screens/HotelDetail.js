import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {Button, Icon} from "native-base";
import {hotel as hotelAction, restaurant as restaurantAction} from "../redux/actions";
import commonHelper from "../helpers/commonHelper";
import SwitchMenuNavigation from "../components/core/SwitchMenuNavigation";
import TextWithIconLight from "../components/core/TextWithIconLight";
import FloatButton from "../components/core/FloatButton";
import {ReviewSection} from "../components/common";
import iconDecoration from '../assets/img/iconDecorationTextDetail.png';


const tabs = {
    detail: 'detail',
    review: 'review',
    map: 'map',
};

class HotelDetail extends Component<{}>
{
    constructor(props){
        super(props);
        this.state = {
            currentTab: tabs.detail,
            isShowHeader: true,
        };
        this.account = commonHelper.account();
        this.item = this.props.item;
    }

    componentDidMount(){

    }

    __renderStar(starCount){
        let listStar = [];
        for(let i=0; i<starCount; i++){
            listStar.push(i);
        }
        return listStar.map((star)=>{
            return <Icon key={star} style={styles.star} name={'star'} />
        })
    }

    __switchTab = (tab)=>{
        this.setState({
            currentTab: tab
        });
    };

    __onBookHotel = ()=>{
        alert("book item");
    };

    __toggleHeader(){
        this.setState({
            isShowHeader: !this.state.isShowHeader,
        });
    }

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
                        djahsdkjahsdk asjd hkjashd jkashdjk ashdjk hasjkh dasjkhdjk ashdk jahsdjk hajskhd
                        djahsdkjahsdk asjd hkjashd jkashdjk ashdjk hasjkh dasjkhdjk ashdk jahsdjk hajskhd
                        djahsdkjahsdk asjd hkjashd jkashdjk ashdjk hasjkh dasjkhdjk ashdk jahsdjk hajskhd
                        djahsdkjahsdk asjd hkjashd jkashdjk ashdjk hasjkh dasjkhdjk ashdk jahsdjk hajskhd
                        djahsdkjahsdk asjd hkjashd jkashdjk ashdjk hasjkh dasjkhdjk ashdk jahsdjk hajskhd
                        djahsdkjahsdk asjd hkjashd jkashdjk ashdjk hasjkh dasjkhdjk ashdk jahsdjk hajskhd
                        djahsdkjahsdk asjd hkjashd jkashdjk ashdjk hasjkh dasjkhdjk ashdk jahsdjk hajskhd
                        djahsdkjahsdk asjd hkjashd jkashdjk ashdjk hasjkh dasjkhdjk ashdk jahsdjk hajskhd
                        djahsdkjahsdk asjd hkjashd jkashdjk ashdjk hasjkh dasjkhdjk ashdk jahsdjk hajskhd
                        djahsdkjahsdk asjd hkjashd jkashdjk ashdjk hasjkh dasjkhdjk ashdk jahsdjk hajskhd
                        djahsdkjahsdk asjd hkjashd jkashdjk ashdjk hasjkh dasjkhdjk ashdk jahsdjk hajskhd
                        djahsdkjahsdk asjd hkjashd jkashdjk ashdjk hasjkh dasjkhdjk ashdk jahsdjk hajskhd
                        djahsdkjahsdk asjd hkjashd jkashdjk ashdjk hasjkh dasjkhdjk ashdk jahsdjk hajskhd
                        djahsdkjahsdk asjd hkjashd jkashdjk ashdjk hasjkh dasjkhdjk ashdk jahsdjk hajskhd
                        djahsdkjahsdk asjd hkjashd jkashdjk ashdjk hasjkh dasjkhdjk ashdk jahsdjk hajskhd
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
        return (
            <Text>
                maps
            </Text>
        );
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
        const iconBtnToggleHeader = !this.state.isShowHeader ? 'angle-left' : 'angle-right';
        return (
            <View style={styles.container}>
                {this.state.isShowHeader && <View style={styles.headerWrapper}>
                    <Image style={styles.coverImage} source={{uri: this.item.image}} />
                    <View style={styles.avatarWrapper}>
                        <Image style={styles.avatarImage} source={{uri: this.item.avatar}} />
                    </View>
                </View>}
                <View style={styles.metaDataWrapper}>
                    <View style={styles.metaDataTopSection}>
                        <Text style={styles.txtName}>
                            {this.item.name}
                        </Text>
                        <View style={styles.starSection}>
                            {this.__renderStar(3)}
                        </View>
                    </View>
                    <TextWithIconLight iconName={'phone'} text={this.item.phone}/>
                    <TextWithIconLight iconName={'map-marker'} text={this.item.address}/>
                    <FloatButton
                        iconName={'cart-plus'}
                        onPress={this.__onBookHotel.bind(this)}
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
                <TouchableOpacity
                    style={[styles.btnToggleHeaderWrapper,]}
                    onPress={this.__toggleHeader.bind(this)}
                >
                    <Icon style={[styles.btnToggleHeader,]} name={iconBtnToggleHeader} />
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listMyHotel: state.hotel.listMyHotel,
        listMyRestaurant: state.restaurant.listMyRestaurant,
    };
};

const mapActionToProps = {
    getListMyHotel: hotelAction.getListMyHotel,
    getListMyRestaurant: restaurantAction.getListMyRestaurant,
};

HotelDetail.defaultProps = {
    item: {
        name: 'this is name of hotel',
        price: 20000000,
        image: 'https://www.w3schools.com/css/trolltunga.jpg',
        description: 'this is description',
        star: 3,
        avatar: 'http://i.9mobi.vn/cf/images/2015/03/nkk/anh-avatar-dep-15.jpg',
        address: 'this is address of hotel',
        phone: '0982348747'
    }
};

export default connect(mapStateToProps, mapActionToProps)(HotelDetail);

const styles = StyleSheet.create({
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
            text: 'Detail',
            action: ()=>{instance.__switchTab(tabs.detail)}
        }, {
            text: 'Review',
            action: ()=>{instance.__switchTab(tabs.review)}
        }, {
            text: 'Map',
            action: ()=>{instance.__switchTab(tabs.map)}
        },
    ];
};