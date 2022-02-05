
class BookMark {
    constructor() {
        this.__STORAGE_NAME__ = "BeautiStock";
        this.instance = null;

        this.storage = localStorage.getItem(this.__STORAGE_NAME__);
        if(!this.storage) {
            this.storage = this.init();
            localStorage.setItem(this.__STORAGE_NAME__, JSON.stringify(this.init()));
        } else {
            this.storage = JSON.parse(this.storage);
        }
    }
    static getInstance() {
        if(!this.instance) this.instance = new BookMark();
        return this.instance;
    }
    init() {
        return {
            bookMark: []
        }
    }
    get() {return this.storage}
    /***
     * bookMark Toggle
     * @param {String} : 즐겨찾기 하려는 주식의 index name
     * @param {Boolean} : BookMark 상태 강제
     * @return {Boolean} : toogle 결과 (true : 즐겨찾기 활성화 / false : 즐겨찾기 비활성화)
     */
    toggle(name, force) {
        const index = this.storage.bookMark.indexOf(name);
        if(force === undefined) {
            if(index >= 0) this.storage.bookMark.splice(index,1);
            else this.storage.bookMark.push(name);
    
            this.save();
            return index >= 0 ? false : true;
        } else {
            if(force === true && index === -1) {
                this.storage.bookMark.push(name);
            } else if(force === false && index >= 0) {
                this.storage.bookMark.splice(index,1);
            }
            this.save();
            return force;
        }
    }
    isMark(name) {
        return this.storage.bookMark.includes(name);
    }

    save() {
        localStorage.setItem(this.__STORAGE_NAME__, JSON.stringify(this.storage));
    }
}

export default BookMark;