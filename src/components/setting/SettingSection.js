import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {Icon} from 'native-base';
import {MenuItemWithTextUnderline} from "../core";

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
            let showUnderLine = true;
            if (index===this.listItem.length-1){
                showUnderLine = false;
            }
            return(
                <MenuItemWithTextUnderline
                    key={index}
                    iconName={item.iconName}
                    title={item.title}
                    onPress={item.action}
                    showUnderLine={showUnderLine}/>
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
                {this.header && <View style={styles.headerSection}>{this.header}</View>}
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
        paddingBottom: 10,
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
        // marginTop: 10,
        padding: 10,
        paddingRight: 50,
        // borderWidth: 1,
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