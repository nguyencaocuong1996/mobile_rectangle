import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    ScrollView, TouchableOpacity, Text
} from 'react-native';
import {connect} from 'react-redux';
import {hotel as hotelAction} from '../redux/actions';
import {ExploreCarouselSlider} from "../components/explore";
import {
    ExploreItemSmall,
    ExploreItemSwipe,
    smallItemWidth,
    swipeItemWidth,
} from "../components/explore";
import GradientSection from "../components/core/GradientSection";

const sliderWidth = Dimensions.get('window').width;

class Explore extends Component<{}>
{
    static navigationOptions = {
        title: 'Explore',
    };

    constructor(props){
        super(props);
        this.state = {
            autoPlay: false,
        }
    }

    __renderHotel(item){
        return <ExploreItemSmall item={item} onPress={(a)=>alert(a.name)}/>
    }

    __renderEvent(item){
        return <ExploreItemSwipe item={item} onPress={(a)=>alert(a.name)}/>
    }


    render()
    {
        return (
            <View style={styles.container}>
                <GradientSection height={40}/>
                <ScrollView>
                    <View style={[styles.viewWrapper, styles.hotelSection]}>
                        <ExploreCarouselSlider
                            data={listItem}
                            renderItem={this.__renderHotel}
                            itemWidth={smallItemWidth}
                            sliderWidth={sliderWidth}
                            title={'Popular Hotel'}
                            autoplay={true}
                            autoplayDelay={1000}
                            autoplayInterval={3000}
                            loop={true}
                        />
                    </View>

                    <View style={[styles.viewWrapper,styles.restaurantSection]}>
                        <ExploreCarouselSlider
                            data={listItem}
                            renderItem={this.__renderHotel}
                            itemWidth={smallItemWidth}
                            sliderWidth={sliderWidth}
                            title={'Awesome Restaurant'}
                        />
                    </View>

                    <View style={[styles.viewWrapper,styles.placeSection]}>
                        <ExploreCarouselSlider
                            data={listItem}
                            renderItem={this.__renderEvent}
                            itemWidth={swipeItemWidth}
                            sliderWidth={sliderWidth}
                            title={'Landscape'}
                            autoplay={true}
                            autoplayDelay={2000}
                            autoplayInterval={4000}
                            loop={true}
                        />
                    </View>
                    <View style={[styles.viewWrapper,styles.placeSection]}>
                        <ExploreCarouselSlider
                            data={listItem}
                            renderItem={this.__renderEvent}
                            itemWidth={swipeItemWidth}
                            sliderWidth={sliderWidth}
                            title={'Event'}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listHotel: state.hotel.listHotel,
    };
};

const mapActionToProps = {
    getAll: hotelAction.getAll,
};

export default connect(mapStateToProps, mapActionToProps)(Explore);

const styles = StyleSheet.create({
    carousel: {
        position:'absolute', bottom: 20,
        borderColor: 'blue',

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    viewWrapper: {
        padding: 10,
    },
    hotelSection: {
        width: '100%',
        height: 180,
    },
    restaurantSection: {
        width: '100%',
        height: 180,
    },
    placeSection: {
        width: '100%',
        height: 150,
    }

});

const listItem = [
    {
        image: 'http://localhost:8000/media/image/hotel/Screen_Shot_2017-12-14_at_23.56.34.png',
        name: 'item 1',
        star: 6,
        reviewCount: 2233,
    },{
        image: 'http://localhost:8000/media/image/hotel/Screen_Shot_2017-12-14_at_23.56.34.png',
        name: 'asjkdhjasd',
        star: 3,
        reviewCount: 12321,
    },{
        image: 'http://localhost:8000/media/image/hotel/Screen_Shot_2017-12-14_at_23.56.34.png',
        name: 'asjkdhjasd',
        star: 3,
        reviewCount: 2421,
    },{
        image: 'http://localhost:8000/media/image/hotel/Screen_Shot_2017-12-14_at_23.56.34.png',
        name: 'asjkdhjasd',
        star: 3,
        reviewCount: 12355,
    }
];