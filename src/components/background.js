import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// import { Container } from './styles';

const Background = () => (
    <LinearGradient colors={['#060a0e', '#082735', '#060a0e']} style={styles.background}/>
);

const styles = StyleSheet.create({
    background: {
        position: "absolute",
        width: "100%",
        height: "100%"
    }
});

export default Background;
