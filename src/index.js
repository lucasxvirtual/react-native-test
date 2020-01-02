import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './views/splash'
import LoginScreen from './views/login'
import { setCustomTextInput, setCustomText } from 'react-native-global-props'
import MainScreen from './views/main';

const MainNavigator = createStackNavigator({
    Splash: {screen: SplashScreen},
    Login: {screen: LoginScreen},
    Main: {screen: MainScreen},
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
    
    render() {

        const customTextInputProps = {
            underlineColorAndroid: 'rgba(0,0,0,0)',
            style: {
                borderWidth: 1,
                borderRadius: 3,
                borderColor: 'white',
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: 'transparent',
                color: 'white'
            }
        };

        const customTextProps = {
            style: {
                fontFamily: "monospace",
            }
        };

        setCustomTextInput(customTextInputProps);
        // setCustomText(customTextProps);

        return <AppContainer />;
    }
}
