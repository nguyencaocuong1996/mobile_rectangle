import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';

export default class SettingSection extends Component<{}>
{
    constructor(props){
        super(props);
        this.title = this.props.config.title;
        this.listItem = this.props.config.listItem;
        this.header = this.props.config.header;
    }

    __renderItem = ()=>{
        return this.listItem.map((item, index)=>{
            return(
                <TouchableOpacity key={index} onPress={()=>item.action()}>
                    <View style={styles.item}>
                        <Text style={styles.txtItem}>{item.title}</Text>
                        <Icon style={styles.itemIcon} name={'angle-right'} />
                    </View>
                </TouchableOpacity>

            );
        })
    };

    render()
    {
        return (
            <View style={styles.container}>
                <Text style={styles.txtTitle}>
                    {this.title}
                </Text>
                <View style={styles.headerSection}>
                    {this.header && this.header}
                </View>
                <View style={styles.itemSection}>
                    {this.__renderItem()}
                </View>
            </View>
        );
    }
}

SettingSection.defaultProps = {
    config: {
        title: "Setting section",
        listItem: [],
        header: null
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txtTitle: {
        padding: 10,
        backgroundColor: '#F5F5F5',
        fontSize: 13,
        color: '#969696',
    },
    headerSection: {
        padding: 10,
    },
    itemSection: {
        marginTop: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 30,
        paddingLeft: 30,
        paddingTop: 5,
        paddingBottom: 20,
    },
    txtItem: {
        fontSize: 17,
    },
    itemIcon: {
        fontSize: 17,
    }


});