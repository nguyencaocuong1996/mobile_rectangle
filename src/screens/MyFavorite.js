import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput, FlatList,
} from 'react-native';
import {HotelItem} from "../components/hotel";
import {connect} from 'react-redux';
import {hotel as hotelAction} from '../redux/actions';
import GradientSection from "../components/core/GradientSection";


class MyFavorite extends Component<{}>
{
    static navigationOptions = {
        title: 'Favorite',
    };

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getAll();
    }


    _keyExtractor = (item, index)=>{
        return index;
    };

    _renderItem = ({item}) => {
        return (
            <HotelItem item={item}/>
        )
    };


    render()
    {
        return (
            <View style={styles.container}>
                <GradientSection/>
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

export default connect(mapStateToProps, mapActionToProps)(MyFavorite);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchSection: {
        flex:1,
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#9c9c9c',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 0.7,
        elevation: 10,
        marginBottom: 10,
    },
    menuSection: {
        flex:7,
        flexDirection: 'column',
        padding: 5,
        backgroundColor: '#fff',
    },
    searchInput: {
        height: 40,
        borderColor: '#d1d1d1',
        borderWidth: 1,
        minWidth: 350,
        borderRadius: 20,
        textAlign: 'center',
    }


});