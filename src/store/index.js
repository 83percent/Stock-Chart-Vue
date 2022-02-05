import Vue from 'vue';
import Vuex from 'vuex';

import StockData from '../data/Stock';

import MyMoney from '../lib/js/MyMoney';
import MyStock from '../lib/js/MyStock';
new MyMoney();
const __myStock = new MyStock();

// Bind Vuex
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        stocks: __myStock.stocks, // {name, price, len}
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