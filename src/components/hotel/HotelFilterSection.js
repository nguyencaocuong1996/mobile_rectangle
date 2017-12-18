import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Platform,
} from 'react-native';
import {connect} from 'react-redux';
import {hotel as hotelAction} from '../../redux/actions';
import ButtonWithIcon from "../core/ButtonWithIcon";
import StarRating from "react-native-star-rating";
import {Icon, Item, Picker} from "native-base";


class HotelFilterSection extends Component<{}>
{

    constructor(props){
        super(props);
        this.state = {
            star: 3,
            fromPrice: undefined,
            toPrice: undefined,
        }
    }

    componentDidMount(){
    }

    onStarRatingPress(star){
        this.setState({
            star,
        })
    }

    __onFromPriceChange=(price)=>{
        this.setState({
            fromPrice: price,
        })
    };
    __onToPriceChange=(price)=>{
        this.setState({
            toPrice: price,
        })
    };

    render()
    {
        let fromPriceActive = this.state.fromPrice ? styles.pricePickerActive : null;
        let fromPriceItemActive = this.state.fromPrice ? styles.priceItemActive : null;
        let toPriceActive = this.state.toPrice ? styles.pricePickerActive : null;
        let toPriceItemActive = this.state.toPrice ? styles.priceItemActive : null;
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
                    <View style={[styles.pricePickerWrapper]}>
                        <Icon style={[styles.icon]} name={'check-square-o'} />
                        <Picker
                            mode="dropdown"
                            placeholder="Giá từ"
                            note={false}
                            selectedValue={this.state.fromPrice}
                            onValueChange={this.__onFromPriceChange.bind(this)}
                            itemStyle={[styles.pricePickerItem, fromPriceItemActive]}
                            textStyle={[styles.pricePickerItem, fromPriceItemActive]}
                            style={[styles.pricePicker, fromPriceActive]}
                        >
                            {pickerFromPriceItems.map(item=>{
                                return <Item key={item.value} label={item.label} value={item.value} />
                            })}
                        </Picker>
                    </View>
                    <View style={[styles.pricePickerWrapper, {marginRight: 120,}]}>
                        <Icon style={[styles.icon]} name={'check-square-o'} />
                        <Picker
                            mode="dropdown"
                            placeholder="Đến"
                            note={false}
                            selectedValue={this.state.toPrice}
                            onValueChange={this.__onToPriceChange.bind(this)}
                            itemStyle={[styles.pricePickerItem, toPriceItemActive]}
                            textStyle={[styles.pricePickerItem, toPriceItemActive]}
                            style={[styles.pricePicker, toPriceActive]}
                        >
                            {pickerToPriceItems.map(item=>{
                                return <Item key={item.value} label={item.label} value={item.value} />
                            })}
                        </Picker>
                    </View>
                </View>
            </View>
        );
    }
}

const pickerFromPriceItems = [
    { label: 'Giá từ', value: 0 },
    { label: '500.000', value: 500000 },
    { label: '1 triệu', value: 1000000 },
    { label: '1.5 triệu', value: 1500000 },
    { label: '2 triệu', value: 2000000 },
];
const pickerToPriceItems = [
    { label: 'Đến', value: 0 },
    { label: '500.000', value: 500000 },
    { label: '1 triệu', value: 1000000 },
    { label: '1.5 triệu', value: 1500000 },
    { label: '2 triệu', value: 2000000 },
];

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
    pricePickerItem: {
        fontSize: 14,
        color: '#9EA9C1',
    },
    pricePicker:{
        height: 20, position: 'absolute',
        left: (Platform.OS === 'ios') ? -13 : 13,
        top: -3,
        width: (Platform.OS === 'ios') ? undefined : 120,
    },
    pricePickerActive: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
    priceItemActive: {
        color: '#323232',
    },
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
        // borderWidth:1,
        // borderColor: 'red',
    },
    pricePickerWrapper: {
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: 'black',
    },
    icon: {
        fontSize: 17,
        color: '#A1D0FA',
    }

});