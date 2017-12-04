import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class HomeItem extends Component<{}>
{
    render()
    {
        return (
            <View style={styles.container}>
                <Image
                    resizeMode={"stretch"}
                    source={this.props.imgSrc}
                    style={styles.image}/>
                <LinearGradient
                    start={this.props.isLeft ? { x: 1, y: 1 } : { x: 0, y: 1 }}
                    end={!this.props.isLeft ? { x: 1, y: 1 } : { x: 0, y: 1 }}
                    colors={['transparent', '#8952a3']}
                    style={this.props.isLeft ? styles.text : [styles.text, styles.textRight]}>
                    <Text style={styles.titleText}>{this.props.title}</Text>
                    <Text style={styles.descriptionText}>{this.props.description}</Text>
                </LinearGradient>
            </View>
        );
    }
}

HomeItem.defaultProps = {
    isLeft: true,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
        alignSelf: 'stretch',
    },
    text: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center',
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