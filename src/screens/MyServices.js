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
import {common as commonAction} from '../redux/actions';


class MyServices extends Component<{}>
{
    static navigationOptions = {
        title: 'List Hotel',
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
                <View style={styles.headerSection}>
                    <View>
                        <Image />
                        <View>
                            <Text>VinGroup</Text>
                            <Text>Register at 12/12/2017</Text>
                        </View>
                        <View>
                            <Text>abc</Text>
                            <Text>def</Text>
                        </View>
                    </View>
                    <View style={styles.navSection}>
                        <Text>Show</Text>
                        <Text>A-Z</Text>
                        <Text>Recent</Text>
                        <Text>Hidden</Text>
                    </View>
                    <View style={styles.listSection}>

                    </View>
                </View>
                <View style={styles.menuSection}>
                    <FlatList
                        data = {this.props.listService}
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
        listService: state.common.listService,
    };
};

const mapActionToProps = {
    getAllService: commonAction.getAllService,
};

export default connect(mapStateToProps, mapActionToProps)(HotelList);

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