class Storage {
    static instance;
    constructor() {
        if(Storage.instance) return Storage.instance;
        this.__STORAGE_NAME__ = "BeautiStock";

        this.storage = localStorage.getItem(this.__STORAGE_NAME__);
        if(!this.storage) {
            this.storage = this.init();
            localStorage.setItem(this.__STORAGE_NAME__, JSON.stringify(this.init()));
        } else {
            this.storage = JSON.parse(this.storage);
        }

        // Singleton
        Storage.instance = this;
    }
    init() {
        return {
            bookMarks: [],
            stocks: [],
            buy: 0
        }
    }
    get() {return this.storage}
    save() {localStorage.setItem(this.__STORAGE_NAME__, JSON.stringify(this.storage));}
}

export default Storage;