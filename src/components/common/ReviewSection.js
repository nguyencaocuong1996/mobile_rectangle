import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';
import ReviewItem from "./ReviewItem";


export default class ReviewSection extends Component<{}>
{

    constructor(props){
        super(props);
    }

    _keyExtractor = (item, index)=>{
        return index;
    };

    _renderItem = ({item}) => {
        return (
            <ReviewItem item={item}/>
        )
    };


    render()
    {
        return (
            <View style={styles.container}>
                <View style={styles.listSection}>
                    <FlatList
                        data = {listComment}
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
        backgroundColor: '#fff',
    },
});

const listComment = [
    {
        image: 'http://i.9mobi.vn/cf/images/2015/03/nkk/anh-avatar-dep-15.jpg',
        name: 'this is name of user',
        content: 'this is content of comment',
        star: 3,
    },
    {
        image: 'http://i.9mobi.vn/cf/images/2015/03/nkk/anh-avatar-dep-15.jpg',
        name: 'this is name of user',
        content: 'this is content of comment',
        star: 3,
    },
    {
        image: 'http://i.9mobi.vn/cf/images/2015/03/nkk/anh-avatar-dep-15.jpg',
        name: 'this is name of user',
        content: 'this is content of comment',
        star: 3,
    },{
        image: 'http://i.9mobi.vn/cf/images/2015/03/nkk/anh-avatar-dep-15.jpg',
        name: 'this is name of user',
        content: 'this is content of comment',
        star: 3,
    },{
        image: 'http://i.9mobi.vn/cf/images/2015/03/nkk/anh-avatar-dep-15.jpg',
        name: 'this is name of user',
        content: 'this is content of comment',
        star: 3,
    },{
        image: 'http://i.9mobi.vn/cf/images/2015/03/nkk/anh-avatar-dep-15.jpg',
        name: 'this is name of user',
        content: 'this is content of comment',
        star: 3,
    },{
        image: 'http://i.9mobi.vn/cf/images/2015/03/nkk/anh-avatar-dep-15.jpg',
        name: 'this is name of user',
        content: 'this is content of comment',
        star: 3,
    },{
        image: 'http://i.9mobi.vn/cf/images/2015/03/nkk/anh-avatar-dep-15.jpg',
        name: 'this is name of user',
        content: 'this is content of comment',
        star: 3,
    },{
        image: 'http://i.9mobi.vn/cf/images/2015/03/nkk/anh-avatar-dep-15.jpg',
        name: 'this is name of user',
        content: 'this is content of comment this is content of comment this is content of comment this is content of comment this is ' +
        'content of comment this is content of comment this is content of comment this is content of comment',
        star: 3,
    },{
        image: 'http://i.9mobi.vn/cf/images/2015/03/nkk/anh-avatar-dep-15.jpg',
        name: 'this is name of user',
        content: 'this is content of comment',
        star: 3,
    }
];