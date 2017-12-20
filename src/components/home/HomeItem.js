import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, TouchableOpacity,
} from 'react-native';

export default class HomeItem extends Component<{}>
{
    render()
    {
        return (
            <TouchableOpacity onPress={()=>this.props.navigation.navigate(this.props.item.screen)}>
                <View style={styles.container}>
                    <Image
                        resizeMode={"stretch"}
                        resizeMethod={"scale"}
                        source={this.props.item.img}
                        style={styles.image}/>

                    <View style={styles.text}>
                        <Text style={styles.titleText}>{this.props.item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

HomeItem.defaultProps = {
    isLeft: true,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 15,
        justifyContent: 'center',
        height: 220,
        width: '100%',
        // shadowColor: '#000000',
        // shadowOffset: {
        //     width: 0,
        //     height: 5
        // },
        // shadowRadius: 10,
        // shadowOpacity: 1.0,
        // elevation: 10,
        // borderWidth: 1,
        // borderColor: 'red',
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignSelf: 'center',

    },
    text: {
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
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