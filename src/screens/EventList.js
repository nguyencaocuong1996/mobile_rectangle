import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput, FlatList,
} from 'react-native';
import {EventItem, EventFilterSection} from "../components/event";
import {connect} from 'react-redux';
import GradientHeader from "../components/core/GradientHeader";
import GradientSection from "../components/core/GradientSection";
import eventAction from "../redux/actions/EventAction";


class EventList extends Component<{}>
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
            this.props.navigation.navigate('EventDetail', {item});
        };
        const onJoin = ()=>{
            alert("ahihi");
        };
        return (
            <EventItem item={item} onPress={onNav} onJoin={onJoin}/>
        )
    };


    render()
    {
        return (
            <View style={styles.container}>
                <GradientSection height={130}>
                    <Text style={styles.titleText} numberOfLines={1}>
                        Tham gia sự kiện nào
                    </Text>
                </GradientSection>
                <EventFilterSection customStyle={{position: 'absolute', top: 60,}} />
                <View style={styles.listSection}>
                    <FlatList
                        data = {this.props.listEvent}
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
        listEvent: state.event.listEvent,
    };
};

const mapActionToProps = {
    getAll: eventAction.getListEvent,
};

export default connect(mapStateToProps, mapActionToProps)(EventList);

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
        marginTop: 50,
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