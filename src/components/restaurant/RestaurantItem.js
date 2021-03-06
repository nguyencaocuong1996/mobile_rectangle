import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class RestaurantItem extends Component<{}>
{
    render()
    {
        return (
            <View style={styles.container}>
                <Image
                    resizeMode={"stretch"}
                    source={this.props.imgSrc}
                    style={styles.image}/>

                <View style={styles.text}>
                    <Text style={styles.titleText}>{this.props.title}</Text>
                    <Text style={styles.descriptionText}>{this.props.description}</Text>
                </View>
            </View>
        );
    }
}

RestaurantItem.defaultProps = {
    isLeft: true,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 15,
        justifyContent: 'center',
        height: 200,
        // shadowColor: '#000000',
        // shadowOffset: {
        //     width: 0,
        //     height: 5
        // },
        // shadowRadius: 10,
        // shadowOpacity: 1.0,
        // elevation: 10,
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
        alignSelf: 'stretch',
    },
    text: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end',
        backgroundColor: 'transparent',
        flexDirection: 'column',
        padding: 10,
    },
    textRight: {
        alignItems: 'flex-end',
    },
    titleText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    descriptionText: {
        color: '#fff',
    }

});