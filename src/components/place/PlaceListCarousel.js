import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import Carousel from "react-native-snap-carousel";
import { Item, Input, Icon } from 'native-base';


const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;


export default class PlaceListCarousel extends Component<{}>
{
    static navigationOptions = {
        title: 'List Place',
    };

    constructor(props){
        super(props);
        this.state = {
            isHide: false,
        }
    }

    _renderItem = ({item}) => {
        return (
            <View style={styles.slide}>
                <View style={styles.slideInnerContainer}>
                    <View style={styles.imageWrapper}>
                        <Image style={styles.itemImage} source={{uri: item.cover}} />
                    </View>
                    <View style={styles.infoWrapper}>
                        <View style={styles.infoTop}>
                            <View style={styles.infoView}>
                                {/*<Icon style={styles.iconStyle} active name={'home'}/>*/}
                                <Text style={styles.title}>{ item.name }</Text>
                            </View>
                            <View style={styles.infoView}>
                                <Icon style={[styles.iconStyle, ]} active name={'map-marker'}/>
                                <Text style={styles.txtAddress} numberOfLines={1}> {item.address}</Text>
                            </View>
                        </View>
                        <View style={styles.breakLine} />
                        <View style={styles.infoBottom}>
                            <Text style={styles.txtDescription}>day la mo ta</Text>
                        </View>
                    </View>

                </View>
            </View>
        )
    };

    __onSnapToItem(index){
        let place = this.props.data[index];
        this.props.updateMapRegion(place);
    }

    __toggleCarousel(){
        this.setState({
            isHide: !this.state.isHide,
        })
    }

    render()
    {
        console.log("dadatatat", this.props.data);
        return (
            <View style={styles.container}>
                {!this.state.isHide &&
                <Carousel
                    data={this.props.data}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    ref={(c)=>{this.__carousel = c;}}
                    containerCustomStyle={styles.carousel}
                    onSnapToItem={this.__onSnapToItem.bind(this)}
                />
                }

                <TouchableOpacity style={styles.toggleButton} onPress={()=>{this.__toggleCarousel();}}>
                    <Text>
                        { this.state.isHide && <Icon name={'eye'} style={{fontSize: 20}} /> }
                        { !this.state.isHide && <Icon name={'eye-slash'} style={{fontSize: 20}} /> }
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}


PlaceListCarousel.defaultProps = {
    data: [
        {
            "id": 1,
            "name": "Cầu rồng",
            "address": "Cầu Rồng, An Hải Trung, Sơn Trà, Đà Nẵng, Vietnam",
            "lat": 16.06121,
            "long": 108.226976,
            "cover": "http://localhost:8000/media/image/place/cau-rong-da-nang.jpg",
        },
        {
            "id": 1,
            "name": "Cầu rồng",
            "address": "Cầu Rồng, An Hải Trung, Sơn Trà, Đà Nẵng, Vietnam",
            "lat": 16.06121,
            "long": 108.226976,
            "cover": "http://localhost:8000/media/image/place/cau-rong-da-nang.jpg",
        },
        {
            "id": 1,
            "name": "Cầu rồng",
            "address": "Cầu Rồng, An Hải Trung, Sơn Trà, Đà Nẵng, Vietnam",
            "lat": 16.06121,
            "long": 108.226976,
            "cover": "http://localhost:8000/media/image/place/cau-rong-da-nang.jpg",
        },

    ],
    updateMapRegion: ()=>null,
};


const styles = StyleSheet.create({
    carousel: {
        position:'absolute', bottom: 20,
        borderColor: 'blue',

    },
    breakLine: {
        width: '100%',
        // borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    iconStyle: {
        fontSize: 15,
    },
    iconStar: {
        marginRight: 5,
    },
    slideInnerContainer: {
        width: '100%',
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'gray',
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    imageWrapper: {
        width: 150,
        height: 200,
        borderWidth: 1,
        borderColor: 'green',
        overflow: 'hidden',
        flex: 4,
        borderBottomStartRadius: 10,
        borderTopStartRadius: 10,
    },
    infoWrapper:{
        flex: 6,
        // borderColor: 'pink',
        // borderWidth: 1,
        padding: 3,
        paddingLeft: 10,

    },
    infoView: {
        flexDirection: 'row',
        marginBottom: 5,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    itemImage: {
        width: 300,
        height: 200,
    },
    container: {
        flex: 1,
        // width: 500,
        // height: 500,
        // borderWidth: 1,
        // borderColor: 'red'
    },
    slide: {
        width: itemWidth,
        height: itemHeight,
        // paddingHorizontal: horizontalMargin,
        borderWidth: 1,
        borderColor: '#b6b6b6',
        borderRadius: 10,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    infoTop: {
        flex: 3,
        overflow: 'hidden',
    },
    infoBottom: {
        flex: 7,
        paddingTop: 20,

    },
    toggleButton: {
        position: 'absolute',
        bottom: 0,
        right: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',

    },
    txtDescription: {
        fontSize: 13,
    },
    txtAddress: {
        fontSize: 10,
    },
    serviceWrapper: {
        borderRadius: 10,
        marginRight: 5,
        backgroundColor: '#000',
        overflow: 'hidden',
    },
    txtService: {
        color: '#fff',
    }

});