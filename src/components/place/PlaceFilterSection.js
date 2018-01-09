import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Platform,
} from 'react-native';
import ButtonWithIcon from "../core/ButtonWithIcon";
import {Icon, Item, Picker} from "native-base";


export default class PlaceFilterSection extends Component<{}>
{

    constructor(props){
        super(props);
        this.state = {
            nearby: false,
            province: undefined,
        }
    }

    componentDidMount(){
    }

    __onProvinceChange = (province)=>{
        // let nearby = !province;
        this.setState({
            province,
            nearby: false,
        })
    };

    __onNearby = ()=>{
        this.props.onNearby();
        this.setState({
            province: undefined,
            nearby: !this.state.nearby,
        });
    };

    render()
    {
        const provinceActive = this.state.province ? styles.pickerActive: null;
        const provinceItemActive = this.state.province ? styles.pickerItemActive: null;
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={styles.viewWrapper}>
                    <ButtonWithIcon isActive={this.state.nearby} onPress={this.__onNearby} iconName={'map-marker'} text={'Gần đây'}/>
                    <View style={[styles.pickerWrapper,]}>
                        <Icon style={[styles.icon, {marginLeft: -150,}]} name={'flag'} />
                        <Picker
                            mode="dropdown"
                            placeholder="Tỉnh thành"
                            note={false}
                            selectedValue={this.state.province}
                            onValueChange={this.__onProvinceChange.bind(this)}
                            itemStyle={[styles.pricePickerItem, provinceItemActive]}
                            textStyle={[styles.pricePickerItem, provinceItemActive]}
                            style={[styles.pricePicker, provinceActive,]}
                        >
                            {listProvince.map(item=>{
                                return <Item key={item.CityId} label={item.CityName} value={item.CityId} />
                            })}
                        </Picker>
                    </View>
                </View>
            </View>
        );
    }
}

PlaceFilterSection.defaultProps = {
    style: {

    },
    onNearby: ()=>null,
};

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
        height: 60,
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

const listProvince = [
    {
        "CityId": 18,
        "CityName": "Hà Nội"
    },
    {
        "CityId": 52,
        "CityName": "TP.Hồ Chí Minh"
    },
    {
        "CityId": 56,
        "CityName": "An Giang"
    },
    {
        "CityId": 54,
        "CityName": "Bà Rịa - Vũng Tàu"
    },
    {
        "CityId": 19,
        "CityName": "Bắc Giang"
    },
    {
        "CityId": 6,
        "CityName": "Bắc Kạn"
    },
    {
        "CityId": 65,
        "CityName": "Bạc Liêu"
    },
    {
        "CityId": 2,
        "CityName": "Bắc Ninh"
    },
    {
        "CityId": 60,
        "CityName": "Bến Tre"
    },
    {
        "CityId": 49,
        "CityName": "Bình Dương"
    },
    {
        "CityId": 39,
        "CityName": "Bình Định"
    },
    {
        "CityId": 45,
        "CityName": "Bình Phước"
    },
    {
        "CityId": 51,
        "CityName": "Bình Thuận"
    },
    {
        "CityId": 68,
        "CityName": "Cà Mau"
    },
    {
        "CityId": 59,
        "CityName": "Cần Thơ"
    },
    {
        "CityId": 1,
        "CityName": "Cao Bằng"
    },
    {
        "CityId": 35,
        "CityName": "Đà Nẵng"
    },
    {
        "CityId": 42,
        "CityName": "Đăk Lăk "
    },
    {
        "CityId": 44,
        "CityName": "Đăk Nông"
    },
    {
        "CityId": 10,
        "CityName": "Điện Biên"
    },
    {
        "CityId": 50,
        "CityName": "Đồng Nai"
    },
    {
        "CityId": 57,
        "CityName": "Đồng Tháp"
    },
    {
        "CityId": 40,
        "CityName": "Gia Lai"
    },
    {
        "CityId": 3,
        "CityName": "Hà Giang"
    },
    {
        "CityId": 25,
        "CityName": "Hà Nam"
    },
    {
        "CityId": 31,
        "CityName": "Hà Tĩnh"
    },
    {
        "CityId": 22,
        "CityName": "Hải Dương"
    },
    {
        "CityId": 24,
        "CityName": "Hải Phòng"
    },
    {
        "CityId": 63,
        "CityName": "Hậu Giang"
    },
    {
        "CityId": 23,
        "CityName": "Hòa Bình"
    },
    {
        "CityId": 8,
        "CityName": "Hưng Yên"
    },
    {
        "CityId": 43,
        "CityName": "Khánh Hòa"
    },
    {
        "CityId": 62,
        "CityName": "Kiên Giang"
    },
    {
        "CityId": 38,
        "CityName": "Kon Tum"
    },
    {
        "CityId": 4,
        "CityName": "Lai Châu"
    },
    {
        "CityId": 46,
        "CityName": "Lâm Đồng"
    },
    {
        "CityId": 14,
        "CityName": "Lạng Sơn"
    },
    {
        "CityId": 5,
        "CityName": "Lào Cai"
    },
    {
        "CityId": 53,
        "CityName": "Long An "
    },
    {
        "CityId": 28,
        "CityName": "Nam Định"
    },
    {
        "CityId": 30,
        "CityName": "Nghệ An"
    },
    {
        "CityId": 27,
        "CityName": "Ninh Bình"
    },
    {
        "CityId": 47,
        "CityName": "Ninh Thuận"
    },
    {
        "CityId": 17,
        "CityName": "Phú Thọ"
    },
    {
        "CityId": 9,
        "CityName": "Phú Yên"
    },
    {
        "CityId": 32,
        "CityName": "Quảng Bình"
    },
    {
        "CityId": 36,
        "CityName": "Quảng Nam"
    },
    {
        "CityId": 37,
        "CityName": "Quảng Ngãi"
    },
    {
        "CityId": 20,
        "CityName": "Quảng Ninh"
    },
    {
        "CityId": 33,
        "CityName": "Quảng Trị"
    },
    {
        "CityId": 13,
        "CityName": "Sóc Trăng"
    },
    {
        "CityId": 16,
        "CityName": "Sơn La"
    },
    {
        "CityId": 48,
        "CityName": "Tây Ninh"
    },
    {
        "CityId": 26,
        "CityName": "Thái Bình"
    },
    {
        "CityId": 12,
        "CityName": "Thái Nguyên"
    },
    {
        "CityId": 29,
        "CityName": "Thanh Hóa"
    },
    {
        "CityId": 34,
        "CityName": "Thừa Thiên Huế"
    },
    {
        "CityId": 58,
        "CityName": "Tiền Giang"
    },
    {
        "CityId": 64,
        "CityName": "Trà Vinh"
    },
    {
        "CityId": 7,
        "CityName": "Tuyên Quang"
    },
    {
        "CityId": 61,
        "CityName": "Vĩnh Long"
    },
    {
        "CityId": 15,
        "CityName": "Vĩnh Phúc"
    },
    {
        "CityId": 11,
        "CityName": "Yên Bái"
    }
];