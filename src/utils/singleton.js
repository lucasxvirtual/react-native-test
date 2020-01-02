export default class Singleton {
    static sharedInstance = Singleton.sharedInstance == null ? new Singleton() : Singleton.sharedInstance
    token = null;
}