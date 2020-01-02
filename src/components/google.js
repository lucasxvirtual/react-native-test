import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import google from '../assets/icons/icon_google.png';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

export default class GoogleLogin extends React.Component {

    google = async (callback) => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            callback(userInfo)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('erro1')
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('erro2')
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('erro3')                
            } else {
                console.log('erro4')
                console.log(error)
            }
        }
    };

    render() {
        GoogleSignin.configure({
            webClientId: this.props.webClientId, // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });


        return (
            <TouchableOpacity style={styles.buttonSocialGoogle} onPress={(e) => {this.google(this.props.googleCallback)}}>
                <Image source={google} style={styles.icon}/>
                <Text style={{color: 'white', marginStart: "15%", fontSize: 12}}>GOOGLE</Text>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    buttonSocialGoogle: {
        alignSelf: 'baseline',
        width: '32%',
        backgroundColor: '#db4f41',
        paddingTop: 5,
        paddingBottom: 5,
        paddingStart: 5,
        paddingEnd: 5,
        alignItems: 'center',
        borderRadius: 100,
        flexDirection: 'row',
        marginStart: 10
    },
    icon: {
        width: 20,
        height: 20
    },
});