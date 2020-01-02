import Api from './api'

export async function home(){
    const home = await Api().get('home/')
    return home
}