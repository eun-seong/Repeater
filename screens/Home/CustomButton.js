import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class CustomButton extends Component {
    static defaultProps = {
        iconName: 'question',
        size: 40,
        iconColor: '#4d94d6',
        onPress: () => null,
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Icon name={this.props.iconName} size={this.props.size} color={this.props.iconColor} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});