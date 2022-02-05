<template>
    <div class="bookmark-wrap">
        <div class="title">
            <h1>Book Mark</h1>
        </div>
        <ul v-if="bookmarks.length > 0">
            <li
                v-for="element of bookmarks"
                :key="element[0]"
                is="StockCard"

                :options="element[1].options"
                :price="element[1].price"
                :name="element[0]"
            >
                <h3 slot="name">{{element[0]}}</h3>
            </li>
        </ul>
        <div v-else class="empty">
            <p>비어있습니다.</p>
        </div>
    </div>
</template>

<script>
import StockData from '../../data/Stock';
import StockCard from '../stock/StockCard.vue';

export default {
    computed: {
        bookmarks () {
            if(!this.$store.state.bookmarks?.length) return [];
            return this.$store.state.bookmarks.reduce((acc, name) => {
                const stockInfo = StockData[name];
                if(stockInfo) acc.push([name, stockInfo]);
                return acc;
            }, [])
        }
        
    },
    components : {
        StockCard
    }
}
</script>

<style lang="scss" scoped>
    .bookmark-wrap {
        padding-top: 5rem;
        > .title {
            color: #fff;

            h1 {
                font-size: 3.2rem;
                font-weight: 600;
            }
        }

        ul {
            display: grid;
            grid-template-columns: repeat(3, 18rem);
            gap: 0.9rem;
            margin: 0 1rem;
            margin-top: 1rem;
            padding-bottom: 10rem;
            border-radius: 8px;

            &:hover > li {
                opacity: 0.6;
            }
            &:hover > li:hover {
                z-index: 999;
                transform: scale(1.2, 1.2);
                opacity: 1.0;
            }
        }
        > div.empty {
            text-align: center;            
            width: 54rem;
            margin: 0 1rem;
            margin-top: 1rem;
            
            border: 2px dashed #555;
            border-radius: 1rem;

            p {
                padding: 1rem;
                color: #fff;    
            }
        }
    }
</style>