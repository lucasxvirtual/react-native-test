import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import facebook from '../assets/icons/icon_facebook.png';
import { LoginManager, AccessToken } from "react-native-fbsdk";

export default class FacebookLogin extends React.Component {

    facebook(callback){
        LoginManager.logInWithPermissions(["public_profile"]).then(
            function(result) {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                } else {
                    // console.log(
                    //     "Login success with permissions: " +
                    //     result.grantedPermissions.toString()
                    // );
                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            // console.log(data.accessToken.toString())
                            callback(data.accessToken.toString())
                        }
                    )
                }
            },
            function(error) {
                console.log("Login fail with error: " + error);
            } 
        );
    }

    render() {
        return (
            <TouchableOpacity style={styles.buttonSocialFacebook} onPress={(e) => {this.facebook(this.props.facebookCallback)}}>
                <Image source={facebook} style={styles.icon}/>
                <Text style={{color: 'white', marginStart: "7%", fontSize: 12}} >FACEBOOK</Text>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    buttonSocialFacebook: {
        alignSelf: 'baseline',
        backgroundColor: '#1671ad',
        paddingTop: 5,
        paddingBottom: 5,
        paddingStart: 5,
        paddingEnd: 5,
        borderRadius: 100,
        width: '32%',
        flexDirection: 'row',
        alignItems: 'center',
        marginEnd: 10
    },  
    icon: {
        width: 20,
        height: 20
    },
});