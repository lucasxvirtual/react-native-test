import React, { Component } from 'react';

import { TouchableOpacity, Image, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default class RoundedButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.button}>
                <Image source={this.props.icon} style={{width: 20, height: 20}}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
        width: 46,
        height: 46,
        alignItems: "center",
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 2
    }
})