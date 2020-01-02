import React, { Component } from 'react';

import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import logo from '../assets/images/logo_normal.png'
import search from '../assets/icons/icon_search.png'
import { primaryColor } from '../utils/colors';

// import { Container } from './styles';

export default class MainBar extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={{flex: 4}}>
                <Image source={logo} style={styles.image} resizeMode='contain'/>
            </View>
            <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={this.props.categoriesCallback}>
                    <Text style={styles.text}>categorias</Text>
                    { this.props.selected == 'Categories' ?
                        <View style={{backgroundColor: primaryColor, height: 2, marginTop: 6}}/> : 
                        <View style={{backgroundColor: 'transparent', height: 2, marginTop: 6}} />
                    }
                </TouchableOpacity>
            </View>
            <View style={{flex: 6, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={this.props.downloadsCallback}>
                    <Text style={styles.text}>meus downloads</Text>
                    { this.props.selected == 'Downloads' ?
                        <View style={{backgroundColor: primaryColor, height: 2, marginTop: 6}} /> : 
                        <View style={{backgroundColor: 'transparent', height: 2, marginTop: 6}} />
                    }
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
                <Image source={search} style={styles.imageSearch} resizeMode='contain'/>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 20,
        paddingBottom: 20
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    imageSearch: {
        width: 20, 
        height: 20
    }, 
    text: {
        color: 'white',
        textAlign: 'center'
    }
})
