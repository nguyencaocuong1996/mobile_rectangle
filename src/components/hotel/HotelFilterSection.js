import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList, Text, TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {hotel as hotelAction} from '../../redux/actions';
import ButtonWithIcon from "../core/ButtonWithIcon";
import StarRating from "react-native-star-rating";


class HotelFilterSection extends Component<{}>
{

    constructor(props){
        super(props);
        this.state = {
            star: 3,
        }
    }

    componentDidMount(){
    }

    onStarRatingPress(star){
        this.setState({
            star,
        })
    }

    render()
    {
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={styles.viewWrapper}>
                    <ButtonWithIcon iconName={'map-marker'} text={'Nearby'}/>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={this.state.star}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                        starSize={15}
                        starColor={'#ffe921'}
                    />
                </View>
                <View style={[styles.viewWrapper, {marginTop: 20,}]}>
                    <ButtonWithIcon iconName={'map-marker'} text={'Nearby'}/>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={this.state.star}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                        starSize={15}
                        starColor={'#ffe921'}
                    />
                </View>
            </View>
        );
    }
}

HotelFilterSection.defaultProps = {
    style: {

    }
};

const mapStateToProps = (state) => {
    return {
        listHotel: state.hotel.listHotel,
    };
};

const mapActionToProps = {
    getAll: hotelAction.getAll,
};

export default connect(mapStateToProps, mapActionToProps)(HotelFilterSection);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        height: 100,
        borderRadius: 5,
        // borderWidth: 1,
        // borderColor: 'red',
        width: '90%',
        backgroundColor: '#fff',
        padding: 20,
        shadowColor: '#b6b6b6',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    viewWrapper: {
        flexDirection: 'row',
        justifyContent:'space-between',
    }


});