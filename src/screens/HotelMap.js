import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Dimensions, Text, Image
} from 'react-native';
import icLocation from '../assets/img/icLocation.png';
import MapView from 'react-native-maps';
import ListHotelCarousel from '../components/hotel/HotelListCarousel';
import {hotel as hotelApi} from '../api';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 10.870139;
const LONGITUDE = 106.778219;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA;
let id = 0;


export default class HotelMap extends Component<{}>
{
    static navigationOptions = {
        title: 'Maps',
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
            listHotel: [],

        };

        this.onMapPress = this.onMapPress.bind(this);
    }


    componentDidMount(){
        hotelApi.getAll((r)=>{
            this.setState({
                listHotel: r.data
            });
            let first_hotel = r.data[0];
            this.__setStateRegion(first_hotel.lat, first_hotel.long);
        }, (e)=>{
            console.log(e);
            alert("Load error");
        })
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

    __setStateRegion = (lat, long) => {
        let region = {
            ...this.state.region,
            latitude: lat,
            longitude: long,
        };
        this.setState({
            region
        });
        this.__map.animateToRegion(region, 200);
    };

    __updateRegion = (hotel)=>{
        this.__setStateRegion(hotel.lat, hotel.long);
    };

    __renderMaker = (hotel)=>{
        return (
            <MapView.Marker
                title={hotel.name}
                key={hotel.name}
                coordinate={{latitude: hotel.lat, longitude: hotel.long}}
            >
                <Image
                    source={icLocation}
                    style={{width: 30, height: 80}}
                />
            </MapView.Marker>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    // showsUserLocation={true}
                    provider={this.props.provider}
                    style={styles.map}
                    // initialRegion={this.state.region}
                    // onPress={this.onMapPress}
                    ref={(map)=>{this.__map=map;}}
                >
                    {this.state.listHotel.map(hotel => this.__renderMaker(hotel))}
                </MapView>
                <View style={styles.listCarousel}>
                    <ListHotelCarousel
                        listHotel={this.state.listHotel}
                        updateMapRegion={this.__updateRegion.bind(this)}
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
    listCarousel: {
        position: 'absolute',
        height: 400,
        left: 0, right: 0,
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
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

