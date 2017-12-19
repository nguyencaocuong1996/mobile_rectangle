import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import {Icon} from "native-base";


export default class ReviewItem extends Component<{}>
{
    constructor(props){
        super(props);
        this.item = this.props.item;
    }

    __renderStar(starCount){
        let listStar = [];
        for(let i=0; i<starCount; i++){
            listStar.push(i);
        }
        return listStar.map((star)=>{
            return <Icon key={star} style={styles.star} name={'star'} />
        })
    }

    render()
    {
        return (
            <View style={styles.container}>
                <View style={styles.avatarWrapper}>
                    <Image style={styles.avatarImage} source={{uri: this.item.image}} />
                </View>
                <View style={styles.metaDataWrapper}>
                    <View style={styles.headerSection}>
                        <Text style={styles.txtName}>
                            {this.item.name}
                        </Text>
                        <View style={styles.starSection}>
                            {this.__renderStar(this.item.star)}
                        </View>
                    </View>
                    <View style={styles.breakLine} />
                    <View style={styles.contentWrapper}>
                        <Text style={styles.txtContent}>
                            {this.item.content}
                        </Text>

                    </View>
                </View>
            </View>
        );
    }
}

ReviewItem.defaultProps = {
    item: {
        image: 'http://i.9mobi.vn/cf/images/2015/03/nkk/anh-avatar-dep-15.jpg',
        name: 'this is name of user',
        content: 'this is content of comment',
        star: 3,
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 5,
        width: '100%',
        borderBottomWidth: 0.5,
        marginBottom: 10,
    },
    avatarWrapper: {
        width: 60,
        height: 60,
        overflow: 'hidden',
        borderRadius: 30,
    },
    avatarImage:{
        width: '100%',
        height: '100%',
    },
    metaDataWrapper:{
        flex: 7,
    },
    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 3,
    },
    txtName: {
        color: '#333',
        fontSize: 14,
        fontWeight: 'bold',
    },
    starSection: {
        flexDirection: 'row',

    },
    star: {
        fontSize: 11,
        color: "#ffe921",
        marginRight: 5,
    },
    contentWrapper: {
        padding: 5,
    },
    txtContent:{
        padding: 5,
    },
    breakLine: {
        borderWidth: 0.2,
        borderColor: '#333',
    }

});