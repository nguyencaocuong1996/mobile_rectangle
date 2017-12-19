import React, {Component} from 'react';
import { Item, Input, Icon } from 'native-base';
import {StyleSheet} from 'react-native';


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
            <Item style={styles.wrapper}>
                <Icon active name={this.props.icon} style={iconStyle}/>
                <Input placeholder={this.props.placeholder}
                       style={styles.input}
                       placeholderTextColor={'#fff'}
                       onFocus={this._toggleFocus.bind(this)}
                       onBlur={this._toggleFocus.bind(this)}
                       onChangeText={(text)=>this.props.onChangeText(text)}
                       secureTextEntry={this.props.secureTextEntry}
                />
            </Item>
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