import Api from './api'

export async function auth(username, password){
    const body = {
        'username': username, 
        'password': password
    }
    const token = await Api().post('auth/', body)
    return token
}

export async function socialNetworkAuth(accessToken, socialNetwork){
    const body = {
        'token': accessToken,
        'social_network': socialNetwork
    }

    const token = await Api().post('socialnetwork/', body)
    return token
}