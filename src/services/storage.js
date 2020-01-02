import AsyncStorage from '@react-native-community/async-storage';

storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log(e)
    }
}

getData = async (key) => {
    try {
        return value = await AsyncStorage.getItem(key)
    } catch(e) {
        return null
    }
}

export function storeToken(token){
    JSON.stringify(token)
    storeData('token', token)
}

export async function getToken(){
    const token = await getData('token')
    if(token == null)
        return null
    return JSON.parse(token)
}