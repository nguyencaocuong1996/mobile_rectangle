import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    ScrollView, TouchableOpacity, Text
} from 'react-native';
import {connect} from 'react-redux';
import {
    hotel as hotelAction,
    restaurant as restaurantAction
} from '../redux/actions';
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
        const onNav = ()=>{
            this.props.navigation.navigate('HotelDetail', {item})
        };
        return <ExploreItemSmall item={item} onPress={onNav}/>
    }

    __renderEvent(item){
        const onNav = ()=>{
            this.props.navigation.navigate('RestaurantDetail', {item})
        };
        return <ExploreItemSwipe item={item} onPress={onNav}/>
    }

    componentDidMount(){
        console.log("props this", this.props);
        if(this.props.listHotel.length === 0){
            this.props.getAllHotel();
        }
        if (this.props.listRestaurant.length === 0){
            this.props.getAllRestaurant();
        }
    }

    componentWillReceiveProps(nextProps){
        console.log("props", nextProps);
    }

    render()
    {
        return (
            <View style={styles.container}>
                <GradientSection height={40}>
                    <Text style={styles.txtHeader}>
                        Đề xuất cho bạn
                    </Text>
                </GradientSection>
                <ScrollView>
                    <View style={[styles.viewWrapper, styles.hotelSection]}>
                        <ExploreCarouselSlider
                            data={this.props.listHotel}
                            renderItem={this.__renderHotel.bind(this)}
                            itemWidth={smallItemWidth}
                            sliderWidth={sliderWidth}
                            title={'Popular Hotel'}
                            autoplay={false}
                            autoplayDelay={1000}
                            autoplayInterval={3000}
                        />
                    </View>

                    <View style={[styles.viewWrapper,styles.restaurantSection]}>
                        <ExploreCarouselSlider
                            data={this.props.listRestaurant}
                            renderItem={this.__renderHotel.bind(this)}
                            itemWidth={smallItemWidth}
                            sliderWidth={sliderWidth}
                            title={'Awesome Restaurant'}
                            autoplay={false}
                            autoplayDelay={1000}
                            autoplayInterval={3000}
                        />
                    </View>

                    <View style={[styles.viewWrapper,styles.placeSection]}>
                        <ExploreCarouselSlider
                            data={this.props.listHotel}
                            renderItem={this.__renderEvent}
                            itemWidth={swipeItemWidth}
                            sliderWidth={sliderWidth}
                            title={'Landscape'}
                        />
                    </View>
                    <View style={[styles.viewWrapper,styles.placeSection]}>
                        <ExploreCarouselSlider
                            data={this.props.listRestaurant}
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
        listRestaurant: state.restaurant.listRestaurant,
    };
};

const mapActionToProps = {
    getAllHotel: hotelAction.getAll,
    getAllRestaurant: restaurantAction.getAll,
};

export default connect(mapStateToProps, mapActionToProps)(Explore);

const styles = StyleSheet.create({
    carousel: {
        position:'absolute', bottom: 20,
        borderColor: 'blue',

    },
    txtHeader: {
        fontSize: 20,
        color: '#F7FBFE',
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        alignSelf: 'center',
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