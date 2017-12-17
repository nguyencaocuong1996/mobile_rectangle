import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native';
import {FloatAddButton} from "../components/core";
import {connect} from 'react-redux';
import img from '../assets/img/home-item-bg-restaurant.jpg';
import {Button, Icon, StyleProvider} from "native-base";
import getTheme from '../../native-base-theme/components';
import myTheme from '../themes/fontAwsome';
import ServiceItem from "../components/home/ServiceItem";
import {hotel as hotelAction, restaurant as restaurantAction} from "../redux/actions";


const services = {
    hotel: 'hotel',
    restaurant: 'restaurant',
};

class MyServices extends Component<{}>
{
    static navigationOptions = {
        title: 'My services',
    };

    constructor(props){
        super(props);
        this.state = {
            service: services.hotel,
            listService: [],
        }
    }

    componentDidMount(){
        this.props.getListMyHotel();
        this.props.getListMyRestaurant();
    }

    __chooseService(type){
        switch (type){
            case services.hotel:
                this.setState({
                    service: services.hotel,
                });
                break;
            case services.restaurant:
                this.setState({
                    service: services.restaurant,
                });
                break;
            default:
                this.setState({
                    service: services.hotel,
                });
                break;
        }
    }

    __getListService(type){
        switch (type){
            case services.hotel:
                return this.props.listMyHotel;
            case services.restaurant:
                return this.props.listMyRestaurant;
            default:
                return this.props.listMyHotel;
        }
    }

    _keyExtractor = (item, index)=>{
        return index;
    };

    _renderItem = ({item}) => {
        return (
            <ServiceItem item={item}/>
        )
    };


    render()
    {
        const listService = this.__getListService(this.state.service);
        return (
            <StyleProvider style={getTheme(myTheme)}>
                <View style={styles.container}>
                    <View style={styles.headerSection}>
                        <Image style={styles.customerImage} source={img} />
                        <View style={styles.basicInfo}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}>VinGroup</Text>
                            <Text style={[styles.txtShadow2, {marginTop: 10}]}>Register at 12/12/2017</Text>
                        </View>
                        <View style={styles.moreInfo}>
                            <Text style={[styles.txtShadow2, {marginTop: 0}]}>abc</Text>
                            <Text style={[{marginTop: 10}, ]}>def</Text>
                        </View>
                    </View>
                    <View style={styles.navSection}>
                        <TouchableOpacity style={[styles.navButton,]}>
                            <Text style={[styles.navItem,]}>Show</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.navButton,]}>
                            <Text style={[styles.navItem,]}>A-Z</Text>
                        </TouchableOpacity>
                        <View style={styles.breakNavButton}/>
                        <TouchableOpacity style={[styles.navButton,]} onPress={()=>this.__chooseService(services.hotel)}>
                            {this.state.service===services.hotel && <Text style={[styles.navItem, styles.txtBold]}>Hotel</Text>}
                            {this.state.service!==services.hotel && <Text style={[styles.navItem,]}>Hotel</Text>}
                        </TouchableOpacity>
                        <View style={styles.breakNavButton}/>
                        <TouchableOpacity style={[styles.navButton,]} onPress={()=>this.__chooseService(services.restaurant)}>
                            {this.state.service===services.restaurant && <Text style={[styles.navItem, styles.txtBold]}>Restaurant</Text>}
                            {this.state.service!==services.restaurant && <Text style={[styles.navItem,]}>Restaurant</Text>}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listSection}>
                        <FlatList
                        data = {listService}
                        renderItem = {this._renderItem}
                        keyExtractor={this._keyExtractor}
                        />
                    </View>
                    <FloatAddButton />
                </View>
            </StyleProvider>
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

export default connect(mapStateToProps, mapActionToProps)(MyServices);

const styles = StyleSheet.create({
    txtBold: {
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    txtShadow1:{
        color: '#5e5e5e',
    },
    txtShadow2:{
        color: '#9c9c9c',
    },
    addButton: {
        borderRadius:25,
        width: 50,
        height: 50,
        backgroundColor: '#039bff',
    },
    customerImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        // flex: 3,
    },
    headerSection: {
        height: 100,
        padding: 3,
        borderBottomWidth: 1,
        borderBottomColor: '#d1d1d1',
        flexDirection: 'row',

    },
    basicInfo: {
        marginLeft: 10,
        flex: 4,
        paddingTop: 20,
    },
    moreInfo: {
        marginLeft: 30,
        flex: 3,
        paddingTop: 20,
    },
    navSection:{
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 30,
        paddingLeft: 30,
    },
    listSection: {
        flex: 1,
    },
    navButton: {
        padding: 10,
    },
    navItem: {


    },
    breakNavButton: {
        marginTop: 7,
        width: 0,
        height: 23,
        borderRightWidth: 1,
        borderRightColor: '#9c9c9c',
    }


});