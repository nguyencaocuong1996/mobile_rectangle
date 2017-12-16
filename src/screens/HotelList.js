import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput, FlatList,
} from 'react-native';
import {HotelItem} from "../components/hotel";
import {hotel as hotelApi} from '../api';


export default class HotelList extends Component<{}>
{
    static navigationOptions = {
        title: 'List Hotel',
    };

    constructor(props){
        super(props);
        this.state = {
            listHotel: []
        }
    }


    componentDidMount(){
        hotelApi.getAll((response)=>{

        }, error=>{
            console.log(error);
        })
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
        console.log(listItem);
        return (
            <View style={styles.container}>
                <View style={styles.searchSection}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder={"🔍 Search services"}
                        // onChangeText={(text) => this.setState({text})}
                        // value={this.state.text}
                    />
                </View>
                <View style={styles.menuSection}>
                    <FlatList
                        data = {listItem}
                        renderItem = {this._renderItem}
                        keyExtractor={this._keyExtractor}
                    />
                </View>
            </View>
        );
    }
}


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