import React, {Component} from 'react';
import { Item, Input, Icon, StyleProvider } from 'native-base';
import {StyleSheet} from 'react-native';
import getTheme from '../../../native-base-theme/components';
import myTheme from '../../themes/fontAwsome';


export default class Login extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            isFocus: false,
        }
    }

    _toggleFocus = ()=>{
      this.setState({isFocus: !this.state.isFocus})
    };

    render() {
        let iconStyle = !this.state.isFocus ? styles.icon : [styles.icon, styles.iconFocus];
        return (
            <StyleProvider style={getTheme(myTheme)}>
                <Item style={styles.wrapper}>
                    <Icon active name={this.props.icon} style={iconStyle}/>
                    <Input placeholder={this.props.placeholder}
                           style={styles.input}
                           placeholderTextColor={'#fff'}
                           onFocus={this._toggleFocus.bind(this)}
                           onBlur={this._toggleFocus.bind(this)}
                    />
                </Item>
            </StyleProvider>
        )
    }
}

const styles = StyleSheet.create({
    wrapper:{
      marginBottom: 10,
        width: '85%',
    },
   icon: {
       color: '#fff',
       fontSize: 14,
   },
    iconFocus:{
      color: '#00ff38'
    },
   input: {
       color: '#fff',
   }
});