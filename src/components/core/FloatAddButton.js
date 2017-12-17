import React, {Component} from 'react';
import {Icon, Button} from 'native-base';
import {StyleSheet} from 'react-native';


export default class FloatAddButton extends Component<{}> {
    constructor(props){
        super(props);
    }

    render() {
        return (
                <Button style={styles.addButton} onPress={()=>this.props.onPress()}>
                    <Icon name={'plus'} />
                </Button>
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