<template>
    <li
        :style="{'background-color': options.background, 'color' : options.color}">
        <button title="즐겨찾기" @click="toggleBookMark">
            <i class="material-icons">{{favor ? "star" : "star_outline"}}</i>
        </button>
        <div>
            <slot name="name">???</slot>
            <p>{{priceData.price[priceData.price.length-1].toLocaleString()}}</p>
        </div>
        <canvas ref="chart" :height="15*16"></canvas>
    </li>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import BookMark from '../../lib/js/BookMark';

export default {
    data: function() {
        return {
            chart: null,
            favor: BookMark.getInstance().isMark(this.name)
        }
    },
    props: {
        options: {
            type: Object,
            default: function() {
                return {
                    background:String,
                    color:String
                }
            }
        },
        price: {
            type: Array
        },
        name: {
            type: String,
            required: true
        }
    },
    computed: {
        priceData: function() {
            return this.price.reduce((acc, element) => {
                acc.date.push(element[0]);
                acc.price.push(element[4]);
                return acc;
            }, {date: [], price: []});
        },
    },
    methods: {
        createChart: function() {
            Chart.register(...registerables);

            const canvas = this.$refs.chart;
            this.chart = new Chart(canvas.getContext('2d'), {
                type: 'line',
                data: {
                    labels: this.priceData.date,
                    datasets: [{
                        label: 'Price',
                        borderColor: this.options.color,
                        data: this.priceData.price,
                        lineTension: 0.15
                    }],
                    
                },
                options : {
                    plugins: {
                        legend: {
                            display: false
                        },
                    },
                    responsive: true,
                    borderWidth : 4,
                    pointBackgroundColor: "#ffffff00",
                    pointBorderColor: "#ffffff00",
                    borderJoinStyle: 'round',
                    scales: {
                        x : {display: false},
                        y: {display: false}
                    },
                    interaction: {
                        mode: 'index',
                        intersect: false,
                    },
                }
            });
        }, // createChart

        toggleBookMark: function() {
            const bookMark = BookMark.getInstance();
            this.favor = bookMark.toggle(this.name);
        }
    },
    mounted() {
        this.createChart();
        
    }
}
</script>

<style scoped lang="scss">
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        
        width: 18rem;
        height: 25rem;
        transition-duration: 0.3s;
        border-radius: 8px;
        cursor: pointer;
        > button {
            all: unset;
            position: absolute;
            top: 0.3rem;
            right: 0.3rem;
            > i {
                cursor: pointer;
                transition: transform 0.1s;

                &:hover {
                    transform: scale(1.5, 1.5);
                }
            }
        }

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex-grow: 1;

            > h3 {
                margin-top: 1rem;
                font-size: 1.4rem;
                font-weight: 500;
            }
            > P {
                font-size: 1.2rem;
            }
        }
        canvas {
            margin: 1rem 0;
        }
    }
</style>