import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput, FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {hotel as hotelAction} from '../redux/actions';
import GradientHeader from "../components/core/GradientHeader";
import GradientSection from "../components/core/GradientSection";
import {PlaceItem, PlaceFilterSection} from "../components/place/";


class PlaceList extends Component<{}>
{
    static navigationOptions = ({navigation})=>{
        return {
            header: <GradientHeader navigation={navigation} backScreen={'Home'} />
        }
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
        const onNav = ()=>{
            this.props.navigation.navigate('HotelDetail', {item});
        };
        return (
            <PlaceItem item={item} onPress={onNav}/>
        )
    };


    render()
    {
        return (
            <View style={styles.container}>
                <GradientSection height={80}>
                    <Text style={styles.titleText}>
                        Looking for Landscape?
                    </Text>
                </GradientSection>
                <PlaceFilterSection style={{position: 'absolute', top: 40,}} />
                <View style={styles.listSection}>
                    <FlatList
                        data = {this.props.listHotel}
                        renderItem = {this._renderItem}
                        keyExtractor={this._keyExtractor}
                    />
                </View>
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
    addFavorite: hotelAction.addFavorite,
};

export default connect(mapStateToProps, mapActionToProps)(PlaceList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleText: {
        fontSize: 20,
        color: '#F7FBFE',
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        alignSelf: 'center',
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
    listSection: {
        // borderColor: 'red',
        // borderWidth: 1,
        marginTop: 30,
        flex:5,
        flexDirection: 'column',
        padding: 5,
        backgroundColor: '#fff',
        paddingLeft: '2%',
        paddingRight: '2%',
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