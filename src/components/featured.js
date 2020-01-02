import React, { Component } from 'react';

import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { loadImage } from '../utils/utils';
import Shadow from './shadow';
import { primaryColor } from '../utils/colors';
import play from '../assets/icons/icon_play.png';
import download from '../assets/icons/icon_download.png';
import info from '../assets/icons/icon_info.png';
import RoundedButton from './roundedButton';

// import { Container } from './styles';

export default class Featured extends Component {   

    getGenresText(genre){
        if(genre == undefined)
            return ''
        let nameList = genre.map(data => { return data.name })
        return nameList.join(' . ')
    }

    render() {
        let data = this.props.data
        return (
            <View style={{width: '100%', height: '65%', marginTop: 30}}>
                <Image source={{uri: loadImage(data.image)}} style={styles.image} resizeMode='cover'/>
                <View style={styles.shadow}>
                    <Shadow/>    
                </View> 
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.genres}>{this.getGenresText(data.genre)}</Text>
                <View style={styles.buttonView}>
                    <View style={styles.downloadButtonView}>
                        <RoundedButton icon={download}/>
                    </View>
                    <View style={styles.buttonPlayView}>
                        <TouchableOpacity style={styles.buttonPlay}>
                            <Text style={{color: 'white', marginEnd: 20}}>ASSISTIR</Text>
                            <Image source={play} style={{width: 35, height: 35}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoButtonView}>
                        <RoundedButton icon={info}/>
                    </View>
                
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%', 
        height: '80%',
        position: 'absolute'
    },
    shadow: {
        width: '100%', 
        height: '80%',
        position: 'absolute',
    },
    title: {
        color: 'white',
        fontSize: 28,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: '70%'
    },
    genres: {
        color: 'white',
        fontSize: 12,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 10
    },
    buttonView: {
        marginTop: 20,
        flexDirection: "row"
    },
    downloadButtonView: {
        flex: 1,
        paddingStart: 20
    },
    infoButtonView: {
        flex: 1,
        paddingEnd: 20,
        alignItems: 'flex-end'
    },
    buttonPlayView: {
        flex: 2,
        alignItems: "center"
    },
    buttonPlay: {
        height: 46,
        backgroundColor: primaryColor,
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 100,
        paddingStart: 20,
        paddingEnd: 6,
        flexDirection: 'row'
    }
})
