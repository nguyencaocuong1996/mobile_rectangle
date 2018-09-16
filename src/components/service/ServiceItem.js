import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image, TouchableOpacity,

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import icLocation from '../../../src/assets/img/icLocation.png'
import {Icon} from "native-base";



export default class ServiceItem extends Component<{}>
{

    constructor(props){
        super(props);
        this.state = {
            item: props.item,
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            item: nextProps.item
        });
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

    __renderService(services){
        return services.map((service, index)=>{
            if(index < 3){
                return (
                    <View key={index} style={styles.viewServiceItem}>
                        <Text numberOfLines={1} style={styles.servicesText}>{service}</Text>
                    </View>
                );
            }
        })
    }

    __onPress = ()=>{
        this.props.onPress(this.state.item);
    };

    __onFavorite = ()=>{
        this.props.onFavorite(this.state.item);
    };

    render() {
        return (

            <View style={styles.container}>
                <TouchableOpacity onPress={this.__onPress}>
                    <View style={styles.imageWrapper}>
                        <Image
                            resizeMode={"stretch"}
                            source={{uri: this.state.item.image}}
                            style={styles.image}/>
                    </View>
                </TouchableOpacity>

                <View style={styles.infoWrapper}>
                    <TouchableOpacity onPress={this.__onPress}>
                        <View style={styles.starSection}>
                            {this.__renderStar(this.state.item.star)}
                        </View>
                        <Text style={styles.titleText}>{this.state.item.name}</Text>
                        <View style={styles.viewAddress}>
                            <Icon style={styles.icon} name={'map-marker'} />
                            <Text style={styles.addressText}>{this.state.item.address}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.viewService}>
                        {this.__renderService(this.state.item.services)}
                    </View>
                </View>

                <TouchableOpacity style={styles.btnFavorite} onPress={this.__onFavorite}>
                    <Icon style={{fontSize: 20, color: '#aeb1b5'}} name={'heart-o'} />
                </TouchableOpacity>
                {/*<Text style={styles.txtPrice}>*/}
                {/*{this.state.item.price} VNĐ*/}
                {/*</Text>*/}
            </View>
        );
    }
}

ServiceItem.defaultProps = {
    isLeft: true,
};

const styles = StyleSheet.create({
    btnFavorite: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    star: {
        fontSize: 10,
        color: "#ffe921",
        marginRight: 5,
    },
    starSection:{
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        //justifyContent: 'center',
        height: 110,
        shadowColor: '#b6b6b6',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        // overflow: 'hidden',
    },
    imageWrapper: {
        overflow: 'hidden',
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
    },
    image: {
        //flex: 1,
        height: 110,
        width: 120,
        //alignSelf: 'stretch',
    },
    icLocation: {
        //flex: 1,
        height: 14,
        width: 20,
        //alignSelf: 'stretch',
    },
    infoWrapper: {
        padding:5,
        paddingLeft: 10,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        flex: 2,

    },
    textRight: {
        alignItems: 'flex-end',
    },
    titleText: {
        marginTop: 4,
        color: '#64749A',
        fontWeight: 'bold',
        fontSize: 13,
    },
    viewAddress:{
        marginTop: 3,
        flexDirection: 'row',
    },
    addressText: {
        color: '#aeb1b5',
        fontSize: 12,
        marginLeft: 5,

    },
    viewService: {
        flexDirection: 'row',

    },
    viewServiceItem: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        borderRadius: 5,
        padding: 3,
        marginTop: 4,
        marginRight: 10,
        height: 24,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    servicesText: {
        color: '#64749A',
        alignSelf: 'center',
        fontSize: 11,

        backgroundColor: 'transparent',
        //borderRadius: 5
    },
    descriptionText: {
        color: '#fff',
    },
    icon: {
        color: 'gray',
        fontSize: 14,
    },
    txtPrice: {
        position: 'absolute',
        right: 10,
        bottom: 5,
        color: '#60ACF8',
        fontSize: 14,
    }

});