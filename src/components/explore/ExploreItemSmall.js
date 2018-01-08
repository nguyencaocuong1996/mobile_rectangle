import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image, TouchableOpacity,

} from 'react-native';
import {Icon} from "native-base";

const innerItemWidth = 100;
export const horizontalMargin = 3;
export const itemWidth = innerItemWidth + horizontalMargin * 2;
const itemHeight = 120;

export default class ExploreItemSmall extends Component<{}>
{

    constructor(props){
        super(props);
        this.state = {
            item: props.item,
            onPress: props.onPress,
            reviewCount: props.item.reviewCount || Math.floor(Math.random() * 1000)
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            item: nextProps.item,
            onPress: nextProps.onPress,
            reviewCount: nextProps.item.reviewCount || Math.floor(Math.random() * 1000)
        });
    }

    __renderStar(starCount){
        let listStar = [];
        for(let i=0; i<starCount; i++){
            listStar.push(i)
        }
        return listStar.map((star)=>{
            return <Icon key={star} style={styles.iconStar} name={'star'} />
        })
    }

    __onPress = ()=>{
        this.state.onPress(this.state.item);
    };

    render() {
        return (
            <TouchableOpacity onPress={this.__onPress}>
                <View style={styles.slide}>
                    <View style={styles.slideInnerContainer}>
                        <View style={styles.imageWrapper}>
                            <Image
                                resizeMode={"stretch"}
                                source={{uri: this.state.item.image}}
                                style={styles.image}/>
                        </View>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.txtTitle}>{this.state.item.name}</Text>
                        </View>
                        <View style={styles.metaDataWrapper}>
                            <View style={styles.starSection}>
                                {this.__renderStar(this.state.item.star)}
                            </View>
                            <Text style={styles.txtReview}>
                                <Text style={styles.txtReviewCount}>
                                    {this.state.reviewCount + ' '}
                                </Text>
                                reviews
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

ExploreItemSmall.defaultProps = {
    item: {
        name: 'this is name of item',
        star: 3,
        reviewCount: Math.floor(Math.random() * 20),
        image: 'urlofimage',
    },
    onPress: ()=>null,
};

const styles = StyleSheet.create({
    slide: {
        paddingHorizontal: horizontalMargin,
        width: itemWidth,
        height: itemHeight,
        borderTopStartRadius: 5,
        borderTopEndRadius: 5,
        flexDirection: 'column',
        backgroundColor: 'transparent',
        // borderWidth:1,
    },
    slideInnerContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
    },
    imageWrapper: {
        width: '100%',
        height: 70,
        borderRadius: 5,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    starSection: {
        flexDirection: 'row',
        marginTop: 0,
    },
    iconStar: {
        fontSize: 6,
        color: '#F5D766',
    },
    txtReview: {
        fontSize: 7,
        color: '#a8aaad',
        marginLeft: 3,
        marginTop: -3,
    },
    txtReviewCount: {
        fontSize: 8,
        color: '#666769',
    },
    titleWrapper: {
        marginTop: 3,
    },
    txtTitle: {
        fontSize: 12,
    },
    metaDataWrapper: {
        marginTop: 5,
        flexDirection: 'row'
    }
});