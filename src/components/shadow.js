import React, { Component } from 'react';

import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { backgroundColor } from '../utils/colors';

// import { Container } from './styles';

export default class Shadow extends Component {
    render() {
        return <LinearGradient colors={[backgroundColor, 'rgba(0, 0, 0, 0.2)', backgroundColor]} style={styles.background}/>
    }
}

const styles = StyleSheet.create({
    background: {
        position: "absolute",
        width: "100%",
        height: "100%"
    }
});
