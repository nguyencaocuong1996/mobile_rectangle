import React, {Component} from 'react';
import {
    StyleSheet,
    View,
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


class Explore extends Component<{}>
{
    static navigationOptions = {
        title: 'Explore',
    };

    constructor(props){
        super(props);
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
                <ExploreCarouselSlider
                    data={listItem}
                    renderItem={this.__renderHotel}
                    itemWidth={smallItemWidth}
                />
                <ExploreCarouselSlider
                    data={listItem}
                    renderItem={this.__renderEvent}
                    itemWidth={swipeItemWidth}
                />
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