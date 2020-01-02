import React, { Component } from 'react';

import { View, StyleSheet, TouchableHighlight, Text, Image } from 'react-native';
import Modal from "react-native-modal";
import logo from '../assets/images/logo_normal.png'
import close from '../assets/icons/close.png'
import { primaryColor } from '../utils/colors';
import Button from './button';

export default class PlanModal extends Component {
    
    state = {
        isModalVisible: true
    };

    hideModal = () => {
        this.setState({'isModalVisible': false})
    }
    
    render() {
        return (
            <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.isModalVisible}>
                <View style={styles.modal}>
                    <View>
                        <TouchableHighlight onPress={this.hideModal}>
                            <Image source={close} style={styles.imageClose}/>
                        </TouchableHighlight>
                    </View>
                    <View style={{paddingBottom: 20, paddingStart: 20, paddingEnd: 20,}}>
                        <Text style={styles.wellcomeText}>Bem vindo ao</Text>
                        <View style={{height: 36, marginTop: 16, marginBottom: 16}}>
                            <Image source={logo} style={styles.image} resizeMode='contain'/>
                        </View>
                        <Text style={{color: '#999', textAlign: 'center', lineHeight: 22}}>
                            Você está fazendo parte do{"\n"}
                            Plano Gratuito. Com ele você pode{"\n"}
                            assistir 10 min grátis de cada peça.{"\n"}{"\n"}
                            Quer ter acesso ilimitado a todas as{"\n"}
                            peças? Mude para o Plano Premium{"\n"}
                            agora mesmo.
                        </Text>
                        <View style={{marginTop: 30}}>
                            <Button onButtonPress={this.props.onButtonPress} buttonText='ALTERAR PLANO'/>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'white',
        borderRadius: 4,
        alignSelf: 'center'
    },
    wellcomeText: {
        fontSize: 26,
        color: primaryColor,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    imageClose: {
        alignSelf: 'flex-end', 
        marginEnd: 10, 
        marginTop: 10,
        width: 18, 
        height: 18
    }
})
