import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import icLocation from '../../../src/assets/img/icLocation.png'



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
                            <Image
                                source = {icLocation}
                                resizeMode = {"contain"}
                                style = {styles.icLocation}
                            />
                            <Text style={styles.addressText}>{this.props.address}</Text>
                        </View>
                        <View style={styles.viewService}>
                            <View style={styles.viewServiceItem}>
                                <Text style={styles.servicesText}>{this.props.service1}</Text>
                            </View>
                            <View style={styles.viewServiceItem}>
                                <Text style={styles.servicesText}>{this.props.service2}</Text>
                            </View>
                            <View style={styles.viewServiceItem}>
                                <Text style={styles.servicesText}>{this.props.service3}</Text>
                            </View>
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
    icLocation: {
        //flex: 1,
        height: 14,
        width: 20,
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
        marginTop: 8,
        flexDirection: 'row',
    },
    addressText: {
      color: 'gray',
      fontSize: 15,

    },
    viewService: {
        flexDirection: 'row',
        
    },
    viewServiceItem: {
        flexDirection: 'row',
        backgroundColor: 'black',
        borderRadius: 10,
        marginTop: 8,
        marginLeft: 10,
        width: 70,
        height: 30,
        justifyContent: 'center',

    },
    servicesText: {
        color: 'white',
        alignSelf: 'center'
        
        
        //backgroundColor: '#000',
        //borderRadius: 5
    },
    descriptionText: {
        color: '#fff',
    }

});