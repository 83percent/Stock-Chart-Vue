<template>
    <div>
        <input v-model="keyword" @keydown.enter="search"/>
        <i class="material-icons" @click="search">search</i>
    </div>
</template>

<script>
import StockSearch from '../../lib/js/StockSearch';
const stockSearch = new StockSearch();

export default {
    
    data: function() {
        return {
            keyword: ""
        }
    },
    methods: {
        search: function() {
            this.$emit('setSearchResults', stockSearch.search(this.keyword));
        }
    }
}
</script>

<style lang="scss" scoped>
    $point-color: #e85720;
    div {
        margin: 1rem 0;
        padding: 0.3rem 1rem;
        display: flex;
        align-items: center;
        background-color: #fff;
        border-radius: 3rem;
        input {
            all: unset;
        }

        i {
            margin-left: 0.5rem;
        }
    }
</style>