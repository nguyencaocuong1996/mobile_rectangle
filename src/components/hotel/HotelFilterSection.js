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
            service: undefined,
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

    __onServiceChange = (service)=>{
        this.setState({
            service,
        })
    };

    __onNearby = ()=>{
        this.props.onNearby();
    };

    render()
    {
        let fromPriceActive = this.state.fromPrice ? styles.pickerActive : null;
        let fromPriceItemActive = this.state.fromPrice ? styles.pickerItemActive : null;
        let toPriceActive = this.state.toPrice ? styles.pickerActive : null;
        let toPriceItemActive = this.state.toPrice ? styles.pickerItemActive : null;
        const serviceActive = this.state.service ? styles.pickerActive: null;
        const serviceItemActive = this.state.service ? styles.pickerItemActive: null;
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={styles.viewWrapper}>

                    <ButtonWithIcon onPress={this.__onNearby} iconName={'map-marker'} text={'Nearby'}/>
                    <View style={[styles.pickerWrapper, {marginLeft: -30,}]}>
                        <Icon style={[styles.icon]} name={'bed'} />
                        <Picker
                            mode="dropdown"
                            placeholder="Dịch vụ"
                            note={false}
                            selectedValue={this.state.service}
                            onValueChange={this.__onServiceChange.bind(this)}
                            itemStyle={[styles.pricePickerItem, serviceItemActive]}
                            textStyle={[styles.pricePickerItem, serviceItemActive]}
                            style={[styles.pricePicker, serviceActive, {marginLeft: 3,}]}
                        >
                            {pickerServiceItems.map(item=>{
                                return <Item key={item.value} label={item.label} value={item.value} />
                            })}
                        </Picker>
                    </View>
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
                    <View style={[styles.pickerWrapper]}>
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
                    <View style={[styles.pickerWrapper, {marginRight: 154,}]}>
                        <Icon style={[styles.icon]} name={'check-square'} />
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
const pickerServiceItems = [
    { label: 'Dịch vụ', value: 0 },
    { label: 'Mát xa', value:  2},
    { label: 'Karaoke', value:  1},
    { label: 'Đồ ăn free', value:  3},
    { label: 'Hồ bơi', value:  4},
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
    pickerActive: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
    pickerItemActive: {
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
    pickerWrapper: {
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: 'black',
    },
    icon: {
        fontSize: 17,
        color: '#A1D0FA',
    }

});