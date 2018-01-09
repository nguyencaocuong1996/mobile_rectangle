import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
    Text
} from 'react-native';
import {connect} from 'react-redux';
import {ExploreCarouselSlider} from "../components/explore";
import {
    ExploreItemSmall,
    ExploreItemSwipe,
    smallItemWidth,
    swipeItemWidth,
} from "../components/explore";
import GradientSection from "../components/core/GradientSection";
import {
    event as eventAction,
    place as placeAction,
    hotel as hotelAction,
    restaurant as restaurantAction,
} from "../redux/actions";

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
    __renderRestaurant(item){
        const onNav = ()=>{
            this.props.navigation.navigate('RestaurantDetail', {item})
        };
        return <ExploreItemSmall item={item} onPress={onNav}/>
    }

    __renderPlace(item){
        const onNav = ()=>{
            this.props.navigation.navigate('PlaceDetail', {item})
        };
        return <ExploreItemSwipe item={item} onPress={onNav}/>
    }
    __renderEvent(item){
        const onNav = ()=>{
            this.props.navigation.navigate('EventDetail', {item})
        };
        return <ExploreItemSwipe item={item} onPress={onNav}/>
    }

    componentDidMount(){
        if(this.props.listHotel.length === 0){
            this.props.getAllHotel();
        }
        if (this.props.listRestaurant.length === 0){
            this.props.getAllRestaurant();
        }
        if(this.props.listEvent.length === 0){
            this.props.getAllEvent();
        }
        if (this.props.listPlace.length === 0){
            this.props.getAllPlace();
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
                            title={'Khách sạn nổi tiếng'}
                            autoplay={false}
                            autoplayDelay={1000}
                            autoplayInterval={3000}
                        />
                    </View>

                    <View style={[styles.viewWrapper,styles.restaurantSection]}>
                        <ExploreCarouselSlider
                            data={this.props.listRestaurant}
                            renderItem={this.__renderRestaurant.bind(this)}
                            itemWidth={smallItemWidth}
                            sliderWidth={sliderWidth}
                            title={'Nhà hàng được đánh giá cao'}
                            autoplay={false}
                            autoplayDelay={1000}
                            autoplayInterval={3000}
                        />
                    </View>

                    <View style={[styles.viewWrapper,styles.placeSection]}>
                        <ExploreCarouselSlider
                            data={this.props.listPlace}
                            renderItem={this.__renderPlace.bind(this)}
                            itemWidth={swipeItemWidth}
                            sliderWidth={sliderWidth}
                            title={'Địa điểm đẹp'}
                        />
                    </View>
                    <View style={[styles.viewWrapper,styles.placeSection]}>
                        <ExploreCarouselSlider
                            data={this.props.listEvent}
                            renderItem={this.__renderEvent.bind(this)}
                            itemWidth={swipeItemWidth}
                            sliderWidth={sliderWidth}
                            title={'Sự kiện sắp diễn ra'}
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
        listEvent: state.event.listEvent,
        listPlace: state.place.listPlace,
    };
};

const mapActionToProps = {
    getAllHotel: hotelAction.getAll,
    getAllRestaurant: restaurantAction.getAll,
    getAllEvent: eventAction.getListEvent,
    getAllPlace: placeAction.getListPlace,
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