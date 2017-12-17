import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import {TextWithIconLight} from '../core';
import image from '../../assets/img/home-item-bg-event.jpg';


export default class ServiceItem extends Component<{}>
{
    render()
    {
        return (
            <View style={styles.container}>
                <Image
                    // resizeMode={"stretch"}
                    source={{uri: this.props.item.image}}
                    style={styles.image}/>
                <View style={styles.infoWrapper}>
                    <Text style={styles.txtName}>{this.props.item.name}</Text>
                    <View style={styles.clockAndPhone}>
                        <TextWithIconLight iconName={'clock-o'} text={this.props.item.openAt + ' - ' + this.props.item.closeAt}/>
                        <TextWithIconLight iconName={'phone'} text={this.props.item.phone}/>
                    </View>
                    <TextWithIconLight iconName={'home'} text={this.props.item.address}/>
                    <Text style={styles.txtCreateAt}>{this.props.item.createdAt}</Text>
                </View>

            </View>
        );
    }
}

ServiceItem.defaultProps = {
    item: {}
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#b6b6b6',
        padding: 10,
        paddingRight: 15,
    },
    txtName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    clockAndPhone: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        // borderColor: '#000',
        marginTop: 10,
        marginBottom: 5,
    },
    image: {
        height: 128,
        width: 128,
        borderRadius: 128/2,
    },
    infoWrapper: {
        flexDirection: 'column',
        marginTop: 20,
        marginLeft: 10,
        // borderWidth: 1,
        // borderColor: 'red',
        // flex: 70
    },
    txtCreateAt: {
        marginTop: 15,
        color: '#A2A2A2',
        fontSize: 12,
    }

});