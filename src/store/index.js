import Vue from 'vue';
import Vuex from 'vuex';

import StockData from '../data/Stock';

import BookMark from '../lib/js/BookMark';
import MyMoney from '../lib/js/MyMoney';
import MyStock from '../lib/js/MyStock';
new MyMoney();
const __myStock = new MyStock();

console.log(new BookMark())

// Bind Vuex
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        stocks: __myStock.stocks, // {name, price, len}
        bookmarks: new BookMark().bookMark
    },
    getters: {
        money: state => {
            if(state.stocks.length === 0) return 0;
            return Object.entries(state.stocks).reduce((acc, {name, len}) => {
                const prices = StockData[name].price;
                acc += prices[prices.length-1][4] * len;
                return acc;
            }, 0);
        }
    }
});

export default store;