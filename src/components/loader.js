import React from 'react';

import { StyleSheet, ActivityIndicator } from 'react-native';

// import { Container } from './styles';

const Loader = () => (
    <ActivityIndicator size="large" color="#0000ff" style={styles.loader}/>
);

const styles = StyleSheet.create({
    loader: {
        alignSelf: 'center',
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    }
});

export default Loader;
