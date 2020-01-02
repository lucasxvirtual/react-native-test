import React, { Component } from 'react';

import { View, StyleSheet } from 'react-native';
import { home } from '../services/playService';
import Featured from '../components/featured';
import { ScrollView } from 'react-native-gesture-handler';
import MainBar from '../components/mainBar';
import PrincipalList from '../components/principalList';

// import { Container } from './styles';

export default class HomeScreen extends Component {

    state = {
        featured: {},
        principalList: []
    }

    goToCategories = () => {
        this.setState({'selectedTab': 'Categories'})
        this.changeBottomTab('Categories')
    }

    goToDownloads = () => {
        this.setState({'selectedTab': 'Downloads'})
        this.changeBottomTab('Downloads')
    }

    changeBottomTab = (selectedTab) => {
        this.props.navigation.navigate(selectedTab)
    }

    doRequest = () => {
        home().then((value) => { 
            let featured = value.data.filter(data => {
                return data.content_type == "featured"
            })[0]
            let principalList = value.data.filter(data => {
                return data.content_type != "featured"
            })
            this.setState({'featured': featured.data[0], 'principalList': principalList})
        }).catch(error => alert(error))
    }

    async componentDidMount(){
        this.doRequest()
    }

    render() {
        return (
            // <ScrollView>
                <View style={{flex: 1}}>
                    <Featured data={this.state.featured} />
                    <PrincipalList data={this.state.principalList}/>
                    <View style={{position: 'absolute', width: '100%'}}>
                        <MainBar
                        selected={'HOME'}
                        categoriesCallback={this.goToCategories}
                        downloadsCallback={this.goToDownloads}/>
                    </View>
                </View>
            // </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

})
