import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import logo from '../assets/images/logo.png'
import Background from '../components/background'
import { getToken } from '../services/storage';
import Singleton from '../utils/singleton';

class SplashScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    
    render() {
        const {replace} = this.props.navigation;

        new Promise((resolve) => setTimeout(resolve, 3000)).then(() => {
            getToken().then(token => {
                if(token != null){
                    Singleton.sharedInstance.token = token
                    replace('Main')
                } else {
                    replace('Login');
                }
            })
        }).catch(error => {
            alert('Um erro aconteceu.')
        })
        
        return (
            <View style={{flex: 1}}>
                <Background/>
                <Image source={logo} style={styles.image} resizeMode='contain'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
        marginStart: "20%",
        marginEnd: "20%"
    }
});

export default SplashScreen;
