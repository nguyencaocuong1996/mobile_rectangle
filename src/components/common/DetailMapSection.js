import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Dimensions, Text, Image
} from 'react-native';
import icLocation from '../../assets/img/icLocation.png';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

export default class DetailMapSection extends Component<{}>
{
    static navigationOptions = {
        title: 'Maps',
    };

    constructor(props) {
        super(props);
        this.region = {
            latitude: props.marker.lat,
            longitude: props.marker.long,
            latitudeDelta: props.delta,
            longitudeDelta: props.delta,
        }
    }

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
                    // provider={this.props.provider}
                    style={styles.map}
                    initialRegion={this.region}
                    // onPress={this.onMapPress}
                    ref={(map)=>{this.__map=map;}}
                >
                    {this.__renderMaker(this.props.marker)}
                </MapView>
            </View>
        );
    }
}

DetailMapSection.defaultProps = {
    delta: 0.01,
    marker: {
        lat: 10.870139,
        long: 106.778219,
    }
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

