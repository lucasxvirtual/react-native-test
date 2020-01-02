import React, { Component } from 'react';

import { View, StyleSheet, Image } from 'react-native';
import PlanModal from '../components/planModal';
import Background from '../components/background';
import { primaryColor, secondaryColor, backgroundColor } from '../utils/colors';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './home';
import homeIcon from '../assets/icons/icon_home.png'
import categoriesIcon from '../assets/icons/icon_stack_white.png'
import searchIcon from '../assets/icons/icon_search.png'
import downloadsIcon from '../assets/icons/icon_download.png'
import profileIcon from '../assets/icons/icon_misc.png'
import { createAppContainer, NavigationActions } from 'react-navigation';
import CategoriesScreen from './categories';
import SearchScreen from './search';
import DownloadsScreen from './downloads';
import ProfileScreen from './profile';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainBar from '../components/mainBar';

// import { Container } from './styles';

export default class MainScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    goToChangePlan = () => {
        alert('aqui')
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <PlanModal onButtonPress={this.goToChangePlan}/>
                <AppContainer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
    },
})

const bottomTabNavigator = createBottomTabNavigator(
    {
        Home: {screen: HomeScreen},
        Categories: {screen: CategoriesScreen},
        Search: {screen: SearchScreen},
        Downloads: {screen: DownloadsScreen},
        Profile: {screen: ProfileScreen},
    },
    {
        initialRouteName: 'Home',
        lazy: false,
        tabBarOptions: {
            activeTintColor: primaryColor,
            inactiveTintColor: 'white',
            showLabel: false,
            style: {
                backgroundColor: secondaryColor,
            },
        },
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                var icon = null
                switch(routeName){
                    case 'Home':
                        icon = homeIcon
                        break
                    case 'Categories':
                        icon = categoriesIcon
                        break
                    case 'Search':
                        icon = searchIcon
                        break
                    case 'Downloads':
                        icon = downloadsIcon
                        break
                    case 'Profile':
                        icon = profileIcon
                        break
                }
                return (
                    <TouchableOpacity>
                        <Image source={icon} style={{width: 20, height: 20, tintColor: tintColor}}/>
                    </TouchableOpacity>
                )
            }
        })
    }
);

const AppContainer = createAppContainer(bottomTabNavigator)


