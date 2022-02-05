<template>
    <div>
        <header>
            <div>
                <h1>나의 자산</h1>
                <p>{{money.toLocaleString()}}원</p>
            </div>
        </header>
        <div class="search-wrap">
            <search-input @setSearchResults="setSearchResults"/>
            <ul v-if="searchResults.length > 0">
                <li
                    v-for="element of searchResults"
                    :key="element[0]"
                    is="SearchResultElement"
                    :options="element[1].options"
                    :price="element[1].price"
                    :name="element[0]">
                    <h3 slot="name">{{element[0]}}</h3>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import SearchInput from '../search/Search.vue';

// Component
import SearchResultElement from '../search/SearchResultElement.vue';

export default {
    data : function() {
        return {
            searchResults: []
        }
    },
    computed: {
        money () {
            return this.$store.getters.money;
        }
    },
    components : {
        SearchInput,
        SearchResultElement
    },
    methods: {
        setSearchResults: function(results) {
            console.log(results);
            this.searchResults = results;
        },
        
    }
}
</script>

<style scoped lang="scss">
    header {
        
        > div {
            text-align: center;
            padding-top: 5rem;
            color: #fff;
            > h1 {
                font-size: 1.3rem;
                font-weight: 600;
                opacity: 0.7;
            }
            > p {
                font-size: 3.8rem;
                font-weight: 600;
            }
        }
    }

    div.search-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
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
</style>