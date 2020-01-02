import React, { Component } from 'react';

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { primaryColor } from '../utils/colors';

// import { Container } from './styles';

export default class Button extends Component {
  render() {
    return (
        <TouchableOpacity style={styles.button} onPress={this.props.onButtonPress}>
            <Text style={{color: 'white'}}>{this.props.buttonText}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: primaryColor,
        alignItems: 'center',
        borderRadius: 100,
        paddingTop: 10,
        paddingBottom: 10,
    }
})
