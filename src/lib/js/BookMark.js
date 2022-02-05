import Storage from './Storage';
class BookMark {
    static instance
    constructor() {
        if(BookMark.instance) return BookMark.instance;

        this.storage = new Storage();
        this.bookMark = this.storage.get().bookMarks;

        // Singleton
        BookMark.instance = this;
    }    
    /***
     * bookMark Toggle
     * @param {String} : 즐겨찾기 하려는 주식의 index name
     * @param {Boolean} : BookMark 상태 강제
     * @return {Boolean} : toogle 결과 (true : 즐겨찾기 활성화 / false : 즐겨찾기 비활성화)
     */
    toggle(name, force) {
        const index = this.bookMark.indexOf(name);
        if(force === undefined) {
            if(index >= 0) this.bookMark.splice(index,1);
            else this.bookMark.push(name);
    
            this.storage.save();
            return index >= 0 ? false : true;
        } else {
            if(force === true && index === -1) {
                this.bookMark.push(name);
            } else if(force === false && index >= 0) {
                this.bookMark.splice(index,1);
            }
            this.storage.save();
            return force;
        }
    }
    isMark(name) {
        return this.bookMark.includes(name);
    }
}

export default BookMark;