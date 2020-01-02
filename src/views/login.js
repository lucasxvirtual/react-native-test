import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Image, 
    TextInput
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Background from '../components/background';
import logo from '../assets/images/logo.png';
import GoogleLogin from '../components/google';
import FacebookLogin from '../components/facebook';
import { googleWebClientId } from '../config'
import { auth, socialNetworkAuth } from '../services/userService';
import { storeToken } from '../services/storage';
import Loader from '../components/loader';
import Singleton from '../utils/singleton';
import { primaryColor } from '../utils/colors';
import Button from '../components/button';

class LoginScreen extends React.Component {

    constructor(){
        super()
        this.state = { 
            loading: false,
            checked: false,
            email: '',
            password: '',
        };
    }

    static navigationOptions = {
        header: null,
    };

    facebook = (accessToken) => {
        console.log(accessToken)
        this.setState({'loading': true})
        socialNetworkAuth(accessToken, 'Facebook').then((value) => {
            if(value.status == 200)
                this.handleToken(value.data)
            this.setState({'loading': false})
        }).catch(error => {
            alert(error)
            this.setState({'loading': false})
        })
    }
    
    google = (idToken) => {
        console.log(idToken)
    }

    handleToken = (token) => {
        if(this.state.checked)
            storeToken(JSON.stringify(token))
        Singleton.sharedInstance.token = token
        const {replace} = this.props.navigation
        replace('Main')
    }

    login = (e) => {
        this.setState({'loading': true})
        auth(this.state.email, this.state.password).then(function (value) {
            if(value.status == 200)
                this.handleToken(value.data)
            this.setState({'loading': false})
        }.bind(this)).catch(error => {
            alert(error)
            this.setState({'loading': false})
        });
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.view}>
                <Background/>
                <Image source={logo} style={styles.image} resizeMode='contain'/>
                <Text style={styles.loginText}>Login</Text>
                <View style={styles.viewButtons}>
                    <FacebookLogin facebookCallback={this.facebook}/>
                    <GoogleLogin googleCallback={this.google} webClientId={googleWebClientId}/>
                </View>
                <View style={styles.viewForm}>
                    <TextInput placeholder='E-mail' 
                    placeholderTextColor='white' 
                    onChangeText={(email) => this.setState({'email': email})}
                    value={this.state.email}/>
                    <View style={{marginTop: 25}}>
                        <TextInput 
                        placeholder='Senha' 
                        placeholderTextColor='white'
                        secureTextEntry 
                        onChangeText={(password) => this.setState({'password': password})}
                        value={this.state.password}/>
                    </View>
                    <View style={styles.viewForgotPassword}>
                        <Text style={styles.textForgotPassword}>Esqueceu sua senha?</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        <CheckBox style={{borderColor: 'white'}} value={this.state.checked} 
                        onValueChange={() => this.setState({ checked: !this.state.checked })}/>
                        <Text style={{color: 'white'}} 
                        onPress={() => this.setState({ checked: !this.state.checked })}>Manter logado</Text>
                    </View>
                    <View style={{marginTop: 30}}>
                        <Button onButtonPress={this.login} buttonText='ENTRAR'/>
                    </View>
                    {/* <TouchableOpacity style={styles.buttonLogin} onPress={this.login}>
                        <Text style={{color: 'white'}} >ENTRAR</Text>
                    </TouchableOpacity> */}
                    <Text style={styles.textDoesNotHaveAccount}>Ainda não possui conta?</Text>
                    <Text style={styles.textRegister} onPress={(e) => navigate('Register')}>Cadastre-se</Text>
                </View>
                { this.state.loading &&
                    <Loader/>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: '70%',
        marginStart: "15%",
        marginEnd: "15%",
        height: '20%',
    },
    loginText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        width: "100%",
        textAlign: "center",
        fontFamily: "adasdas"
    },
    viewButtons: {
        marginTop: 25,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
    },
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
    buttonLogin: {
        backgroundColor: primaryColor,
        alignItems: 'center',
        borderRadius: 100,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 30
    },
    icon: {
        width: 20,
        height: 20
    },
    view: {
        flex: 1,
        justifyContent: 'center',
    },
    viewForm: {
        marginTop: 25,
        marginStart: 25,
        marginEnd: 25,
        justifyContent: 'center'
    },
    viewForgotPassword: {
        marginTop: 10, 
        width: '100%',
        alignItems: 'flex-end'
    },
    textForgotPassword: {
        color: primaryColor
    },
    textDoesNotHaveAccount: {
        color: 'white',
        alignSelf: 'center',
        marginTop: 40
    },
    textRegister: {
        color: primaryColor,
        alignSelf: 'center',
        marginTop: 15
    }
});

export default LoginScreen;
