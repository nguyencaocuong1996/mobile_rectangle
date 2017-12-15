import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Dimensions, Text
} from 'react-native';
import HotelItem from "../components/hotel/HotelItem";

import HotelImg from '../assets/img/ivHotel.jpg';
import imgHotel1 from '../assets/img/Cassabella.jpg';
import imgHotel2 from '../assets/img/kimminh.jpg';
import icLocation from '../assets/img/icLocation.png';
import MapView from 'react-native-maps';
import Carousel from "react-native-snap-carousel";


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
console.log(ASPECT_RATIO);
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA;
let id = 0;


export default class HotelMap extends Component<{}>
{
    static navigationOptions = {
        title: 'List Hotel',
    };

    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            markers: [

            ],
        };

        this.onMapPress = this.onMapPress.bind(this);
    }

    onMapPress(e) {
        this.setState({
            markers: [
                ...this.state.markers,
                {
                    coordinate: e.nativeEvent.coordinate,
                    key: `foo${id++}`,
                },
            ],
        });
    }


    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }


    render() {
        return (
            <View style={styles.container}>
                <MapView
                    showsUserLocation={true}
                    provider={this.props.provider}
                    style={styles.map}
                    initialRegion={this.state.region}
                    onPress={this.onMapPress}
                >
                    {this.state.markers.map(marker => (
                        <MapView.Marker
                            title={marker.key}
                            image={icLocation}
                            key={marker.key}
                            coordinate={marker.coordinate}
                        />
                    ))}
                </MapView>
                <View>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={listItem}
                        renderItem={this._renderItem}
                        sliderWidth={500}
                        itemWidth={400}
                    />
                </View>
            </View>
        );
    }
}

HotelMap.propTypes = {
    provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
});

const listItem = [
    {
        img: HotelImg,
        imgLocation: icLocation,
        title: "Khách sạn Mường Thanh",
        address: "94/16 Trịnh Hoài Đức, Vũng Tàu",
        service1: "Massa",
        service2: "Pool",
        service3: "Breakfast"
    },
    {
        img: imgHotel1,
        imgLocation: icLocation,
        title: "Khách sạn Alacate",
        address: "72 Nam Cao, TP Hồ Chí Minh",
        service1: "Buffet",
        service2: "Pool",
        service3: "Breakfast",
        left: false,
    },
    {
        img: imgHotel2,
        imgLocation: icLocation,
        title: "Khách sạn Hoàng Đế ",
        address: "21 Phạm Văn Đồng, Đà Nẵng",
        service1: "Massa",
        service2: "Cafe",
        service3: "Breakfast"
    },
];