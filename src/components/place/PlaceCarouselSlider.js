import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity, Image
} from 'react-native';
import Carousel, {Pagination} from "react-native-snap-carousel";
import {Icon} from "native-base";

const sliderWidth = Dimensions.get('window').width;
const innerItemWidth = sliderWidth;
export const horizontalMargin = 3;
export const itemWidth = innerItemWidth + horizontalMargin * 2;
const itemHeight = 200;

export default class PlaceCarouselSlider extends Component<{}>
{
    constructor(props){
        super(props);
        this.state = {
            activeSlide: 0,
            sliderRef: undefined,
        }
    }

    __renderItem = ({item}) => {
        // console.log("aaa",item);
        return (
            <View style={styles.itemContainer}>
                <Image style={styles.itemImage} source={{uri: item.image}} />
            </View>
        )
    };

    render()
    {
        // console.log("data", this.props.data);
        return (
            <View style={styles.container}>
                <Carousel
                    ref={(c) => { if (!this.state.sliderRef) { this.setState({ sliderRef: c }); } }}
                    data={this.props.data}
                    renderItem={this.__renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    autoplay={true}
                    autoplayInterval={3000}
                    autoplayDelay={1000}
                    loop={true}
                    itemHeight={itemHeight}
                    activeSlideAlignment={'center'}
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                >
                </Carousel>
                <Pagination
                    dotsLength={this.props.data.length}
                    activeDotIndex={this.state.activeSlide}
                    containerStyle={styles.paginationContainer}
                    dotColor={'rgba(255, 255, 255, 0.92)'}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={'rgba(255, 255, 255, 0.92)'}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    carouselRef={this.state.sliderRef}
                    tappableDots={!!this.state.sliderRef}
                />
            </View>
        );
    }
}


PlaceCarouselSlider.defaultProps = {
    data: [],
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 10,
    },
    itemContainer:{
        width: itemWidth,
        height: '100%',
        // borderWidth: 5,
        // borderColor: 'red',
    },
    itemImage: {
        width: '100%',
        height: '100%',
    },
    carousel: {
        // position:'absolute', bottom: 20,
        borderColor: 'blue',
    },
    paginationContainer: {
        paddingVertical: 3,
        position: 'absolute',
        bottom: 5,
        alignSelf: 'center',
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8,
    }
}
);