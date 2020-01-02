import React, { Component } from 'react';

import { View, StyleSheet, Image, Text, FlatList } from 'react-native';
import { primaryColor } from '../utils/colors';
import { loadImage } from '../utils/utils';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class PrincipalList extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                data={this.props.data}
                renderItem={({ item }) => <Header item={item} />}
                keyExtractor={item => item.name}
                />
            </View>
        );
    }
}

function Header({item}){
    if(item == undefined)
        return <View/>
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, flexDirection: "row", marginStart: 16, marginEnd: 16}}>
                <Text style={styles.header}>{item.name}</Text>
                <TouchableOpacity style={{flex: 1}}>
                    <Text style={{color: primaryColor}}>ver todos</Text>
                </TouchableOpacity>
            </View>
            <FlatList
            contentContainerStyle={{paddingStart: 16, paddingEnd: 16}}
            horizontal={true}
            data={item.data}
            renderItem={({ item }) => <Item play={item} />}
            keyExtractor={item => item.name + item.id}
            />
        </View>
    )
}

function Item({ play }){
    if(play == undefined)
        return <View/>
    return (
        <View style={{flex: 1}}>
            <Image source={{uri: loadImage(play.image)}} style={styles.image}/>
            <Text numberOfLines={1} style={styles.itemText}>{play.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 6,
    },
    itemText: {
        color: 'white',
        width: 100,
        textAlign: "center"
    },
    header: {
        flex: 1,
        color: primaryColor
    }
})
