import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class HotelItem extends Component<{}>
{


    render()
    {
        return (
            <View style={styles.container}>
                <Image
                    resizeMode={"stretch"}
                    source={this.props.imgSrc}
                    style={styles.image}/>

                <View style={styles.text}>
                    <Text style={styles.titleText}>{this.props.title}</Text>

                        <View style={styles.viewAddress}>
                        <Text style={styles.addressText}>{this.props.address}</Text>
                        </View>
                        <View style={styles.viewService}>
                        <Text style={styles.servicesText}>{this.props.service}</Text>
                        </View>

                </View>


            </View>
        );
    }
}

HotelItem.defaultProps = {
    isLeft: true,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 15,
        //justifyContent: 'center',
        height: 308,
    },
    image: {
        //flex: 1,
        height: 200,
        width: undefined,
        //alignSelf: 'stretch',
    },
    text: {
        //position: 'relat',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        marginTop: 10,
        flex: 2,

    },
    textRight: {
        alignItems: 'flex-end',
    },
    titleText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
    },
    viewAddress:{
        flexDirection: 'row',
    },
    addressText: {
      color: 'gray',
      fontSize: 15,

    },
    viewService1: {
        flexDirection: 'row',
        backgroundColor: 'yellow',


    },
    servicesText: {
        alignSelf:'center',
        color: 'red',

        //backgroundColor: '#000',
        //borderRadius: 5
    },
    descriptionText: {
        color: '#fff',
    }

});