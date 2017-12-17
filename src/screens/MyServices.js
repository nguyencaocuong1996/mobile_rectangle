import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput, FlatList, Image, TouchableOpacity,
} from 'react-native';
import {FloatAddButton} from "../components/core";
import {connect} from 'react-redux';
import {common as commonAction} from '../redux/actions';
import img from '../assets/img/home-item-bg-restaurant.jpg';
import {Button, Icon, StyleProvider} from "native-base";
import getTheme from '../../native-base-theme/components';
import myTheme from '../themes/fontAwsome';
import ServiceItem from "../components/home/ServiceItem";


class MyServices extends Component<{}>
{
    static navigationOptions = {
        title: 'My services',
    };

    constructor(props){
        super(props);
    }

    componentDidMount(){
        // this.props.getAll();
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
                        <TouchableOpacity style={[styles.navButton,]}>
                            <Text style={[styles.navItem,]}>Recent</Text>
                        </TouchableOpacity>
                        <View style={styles.breakNavButton}/>
                        <TouchableOpacity style={[styles.navButton,]}>
                            <Text style={[styles.navItem,]}>Hidden</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listSection}>
                        <FlatList
                        data = {this.props.listService}
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
        listService: state.common.listService,
    };
};

const mapActionToProps = {
    getAllService: commonAction.getAllService,
};

export default connect(mapStateToProps, mapActionToProps)(MyServices);

const styles = StyleSheet.create({
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