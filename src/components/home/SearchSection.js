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
            data: props.data,
            keyword: props.keyword,
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            data: nextProps.data,
            keyword: nextProps.keyword,
        });
    }

    _keyExtractor = (item, index)=>{
        return index;
    };

    _renderItem = ({item}) => {
        return (
            <SearchItem item={item}/>
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
        console.log("search section data", data);
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
    data: [
        {
            name: "Ten item 1",
            type: "loai item 1",
            address: "asdasd",
        },
        {
            name: "Ten item 2",
            type: "loai item 2",
            address: "asdasd",
        },
        {
            name: "Ten item 3",
            type: "loai item 3",
            address: "asdasd",
        },
        {
            name: "Ten item 4",
            type: "loai item 4",
            address: "asdasd",
        },
    ],
    keyword: "",
    isLeft: true,
};