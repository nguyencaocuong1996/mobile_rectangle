import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Carousel from "react-native-snap-carousel";
import {Icon} from "native-base";


export default class ExploreCarouselSlider extends Component<{}>
{
    constructor(props){
        super(props);
        this.state = {
            canNext: true,
            canPrev: false,
            currentIndex: 0,
        };
        this.dataLength  = this.props.data.length;
        this.onSnapToItem = this.props.onSnapToItem;
        this.renderItem = this.props.renderItem;
        this.sliderWidth = this.props.sliderWidth;
        this.itemWidth = this.props.itemWidth;
        this.navStep = this.props.navStep || Math.floor(this.sliderWidth / this.itemWidth);
        this.horizontalMargin = this.props.horizontalMargin;

    }

    __renderItem = ({item}) => {
        return this.renderItem(item);
    };

    __onSnapToItem = (index)=>{
        this.setState({
            currentIndex: index,
            canNext: index+this.navStep<this.dataLength,
            canPrev: index>0,
        });
        this.onSnapToItem(index);
    };

    __onNext = ()=>{
        this.__carousel.snapToItem(this.state.currentIndex + this.navStep);
    };

    __onPrev = ()=>{
        this.__carousel.snapToItem(this.state.currentIndex -  this.navStep);
    };

    render()
    {
        const canNextStyle = this.state.canNext ? styles.navIconActive : null;
        const canPrevStyle = this.state.canPrev ? styles.navIconActive : null;
        return (
            <View style={styles.container}>
                <View style={styles.headerSection}>
                    <Text style={styles.titleSection}>
                        {this.props.title}
                    </Text>
                    <View style={styles.navSection}>
                        <TouchableOpacity
                            disabled={!this.state.canPrev}
                            onPress={this.__onPrev.bind(this)}
                        >
                            <Icon style={[styles.navIcon, canPrevStyle]} name={'arrow-circle-o-left'} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            disabled={!this.state.canNext}
                            onPress={this.__onNext.bind(this)}
                        >
                            <Icon style={[styles.navIcon, canNextStyle]} name={'arrow-circle-o-right'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Carousel
                    data={this.props.data}
                    renderItem={this.__renderItem}
                    sliderWidth={this.sliderWidth}
                    itemWidth={this.itemWidth}
                    ref={(c)=>{this.__carousel = c;}}
                    containerCustomStyle={styles.carousel}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={1}
                    enableMomentum={true}
                    activeSlideAlignment={'start'}
                    removeClippedSubviews={false}
                    onSnapToItem={this.__onSnapToItem}
                >
                </Carousel>
            </View>
        );
    }
}


ExploreCarouselSlider.defaultProps = {
    data: [],
    title: 'this is title header of slider',
    onSnapToItem: ()=>null,
    renderItem: ()=>null,
    navStep: undefined,
    sliderWidth: Dimensions.get('window').width,
    horizontalMargin: 10,
    itemWidth: 110,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerSection: {
        flexDirection: 'row',
        height: 30,
        marginBottom: 10,
    },
    titleSection: {
        position: 'absolute',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#576991',
        marginTop: 5,
    },
    navSection: {
        flexDirection: 'row',
        position: 'absolute',
        right: 5,
    },
    navIcon: {
        color: '#F5F5F5',
        fontSize: 30,
        marginRight: 3,
    },
    navIconActive: {
        color: '#8AC5FA',
    },
    carousel: {
        // position:'absolute', bottom: 20,
        borderColor: 'blue',
    },
});