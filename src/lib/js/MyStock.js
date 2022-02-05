import Storage from './Storage';

class MyStock {
    constructor() {
        this.storage = new Storage();
        this.stocks = this.storage.storage.stocks;
        console.log(this.stocks);
    }
}

export default MyStock;