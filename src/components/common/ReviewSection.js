import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';
import ReviewItem from "./ReviewItem";
import commonHelper from "../../helpers/commonHelper";


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
        let count = Math.floor(Math.random() * 12 + 12);
        let data = getListComment(count);
        console.log(data);
        return (
            <View style={styles.container}>
                <View style={styles.listSection}>
                    <FlatList
                        data = {data}
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
const baseAvatarUrl = commonHelper.baseUrl + 'media/image/common/avatar';
const getRandomAvatarUrl = (i)=>{
    return baseAvatarUrl + i + '.png';
};
const listUserName = [
    'Nguyễn Văn A',
    'Trần Thị B',
    'Lê Hữu C',
    'Nguyễn Cao Cường',
    'Trần Khánh Nguyên',
    'Võ Quang Huy',
];

const listCommentContent = [
    'Ở đây thật tuyệt vời',
    'Chỗ này được đấy chứ, cho 4 sao nhé',
    'Không gian đẹp, ấn tượng',
    `Mình đặt qua deli 4 li. 
    Giá đc giảm 50% tính ra quá rẻ luôn. 
    Nhưng lại làm nhầm 1 li :). 
    Hồng trà kem tươi lại làm thành hồng trà dâu. 
    Chán thật sự. Uống cũng bình thường thôi. 
    Ko có gì đặc sắc để quay lại cả.`,
    `Nếu bạn là người thích sôi động, 
    đừng ngần ngại ghé thăm thành phố không ngủ này!`,
    `Nằm trên dải đất hình chữ S, 
    được trời phú cho nguồn khoáng sản vô tận cùng với những danh 
    lam thắng cảnh làm say lòng người đến luyến lòng người đi`,
];

const getListComment = (count)=>{
    let listComment = [];
    for (let i=0; i<=count; i++){
        let rint = Math.floor(Math.random() * 5 + 1);
        let star = rint > 5 ? 5 : rint;
        listComment.push({
            image: getRandomAvatarUrl(rint),
            name: listUserName[rint],
            content: listCommentContent[rint],
            star,
        });
    }
    return listComment;
};