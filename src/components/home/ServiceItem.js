import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image, TouchableOpacity,
} from 'react-native';

import {TextWithIconLight} from '../core';
import image from '../../assets/img/home-item-bg-event.jpg';
import commonHelper from "../../helpers/commonHelper";


export default class ServiceItem extends Component<{}>
{
    constructor(props){
        super(props);
        this.time = commonHelper.formatTimeToHM(this.props.item.openAt) + '-' + commonHelper.formatTimeToHM(this.props.item.closeAt);
        this.createdAt = commonHelper.formatDate(this.props.item.createdAt);
        this.item = this.props.item;
    }

    __onPress = ()=>{
        this.props.onPress(this.item);
    };

    componentWillReceiveProps(nextProps){
        this.item = nextProps.item;
    }

    render()
    {
        return (
            <TouchableOpacity onPress={this.__onPress}>
                <View style={styles.container}>
                    <Image
                        // resizeMode={"stretch"}
                        source={{uri: this.item.image}}
                        style={styles.image}/>
                    <View style={styles.infoWrapper}>
                        <Text style={styles.txtName}>{this.item.name}</Text>
                        <TextWithIconLight iconName={'clock-o'} text={this.time}/>
                        <TextWithIconLight iconName={'phone'} text={this.item.phone}/>
                        <TextWithIconLight numberOfLines={2} iconName={'home'} text={this.item.address}/>
                        <Text style={styles.txtCreateAt}>Created at: {this.createdAt}</Text>
                    </View>

                </View>
            </TouchableOpacity>

        );
    }
}

ServiceItem.defaultProps = {
    item: {},
    onPress: ()=>null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#b6b6b6',
        padding: 10,
        paddingRight: 15,
        // borderWidth: 1,
    },
    txtName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        height: 128,
        width: 128,
        borderRadius: 128/2,
    },
    infoWrapper: {
        flexDirection: 'column',
        marginTop: 5,
        marginLeft: 10,
        // borderWidth: 1,
        // borderColor: 'red',
        width: '60%',
        // flex: 70
    },
    txtCreateAt: {
        marginTop: 15,
        color: '#A2A2A2',
        fontSize: 12,
    }

});