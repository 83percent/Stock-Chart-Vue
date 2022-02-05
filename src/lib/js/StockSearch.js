import StockData from '../../data/Stock';

class StockSearch {
    getList() {
        return StockData;
    }
    search(value) {
        return Object.entries(StockData).reduce((acc, data) => {
            if(data[0].includes(value)) acc.push(data);
            return acc;
        }, []);
    }
    
}

export default StockSearch;