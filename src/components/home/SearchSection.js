import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
} from 'react-native';
import SearchItem from './SearchItem';
import {
    event as eventAction,
    place as placeAction,
    restaurant as restaurantAction,
    hotel as hotelAction
} from "../../redux/actions";
import {connect} from "react-redux";
import _ from 'lodash';

class SearchSection extends Component<{}>
{

    constructor(props){
        super(props);
        this.state = {
            keyword: props.keyword,
        };
        this.navigation = props.navigation;
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            keyword: nextProps.keyword,
        });
    }

    _keyExtractor = (item, index)=>{
        return index;
    };

    _renderItem = ({item}) => {
        let screen = 0;
        switch (item.typeId){
            case 1: screen = 'HotelDetail';
                break;
            case 2: screen = 'RestaurantDetail';
                break;
            case 3: screen = 'PlaceDetail';
                break;
            case 4: screen = 'EventDetail';
                break;
        }
        const onPress = ()=>{
            this.navigation.navigate(screen, {item});
        };
        return (
            <SearchItem item={item} onPress={onPress}/>
        )
    };

    __onPress = ()=>{
        this.props.onPress(this.state.item);
    };

    __getListAll = ()=>{
        let {listHotel,
            listRestaurant,
            listEvent,
            listPlace,
            getListHotel,
            getListRestaurant,
            getListEvent,
            getListPlace,
            } = this.props;
        if (listHotel.length === 0){
            getListHotel();
        }
        if (listRestaurant.length === 0){
            getListRestaurant();
        }
        if (listEvent.length === 0){
            getListEvent();
        }
        if (listPlace.length === 0){
            getListPlace();
        }

        let listFilter = listHotel.concat(listRestaurant).concat(listPlace).concat(listEvent);
        if (this.state.keyword.length > 2){
            return _.filter(listFilter, (item)=>{
                return _.includes(item.name.toLowerCase(), this.state.keyword.toLowerCase());
            });
        } else {
            return [];
        }


    };

    render() {
        const data = this.__getListAll();
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listHotel: state.hotel.listHotel,
        listRestaurant: state.restaurant.listRestaurant,
        listPlace: state.place.listPlace,
        listEvent: state.event.listEvent,
    };
};

const mapActionToProps = {
    getListHotel: hotelAction.getAll,
    getListRestaurant: restaurantAction.getAll,
    getListEvent: eventAction.getListEvent,
    getListPlace: placeAction.getListPlace,
};

export default connect(mapStateToProps, mapActionToProps)(SearchSection);


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

SearchSection.defaultProps = {
    keyword: "",
    isLeft: true,
    navigation: {},
};