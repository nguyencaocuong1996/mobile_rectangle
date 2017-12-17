import React, {Component} from 'react';
import {Icon, StyleProvider, Button} from 'native-base';
import {StyleSheet} from 'react-native';
import getTheme from '../../../native-base-theme/components';
import myTheme from '../../themes/fontAwsome';


export default class FloatAddButton extends Component<{}> {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <StyleProvider style={getTheme(myTheme)}>
                <Button style={styles.addButton} onPress={()=>this.props.onPress()}>
                    <Icon name={'plus'} />
                </Button>
            </StyleProvider>
        )
    }
}

FloatAddButton.defaultProps = {
    onPress: ()=>{},
};

const styles = StyleSheet.create({
    addButton:{
        width:50,
        height: 50,
        borderRadius: 25,
        position: 'absolute',
        bottom: 100,
        right: 30,
    },
});