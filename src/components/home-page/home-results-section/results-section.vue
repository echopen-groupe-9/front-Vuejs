<template>
    <section class="Home-result">
        <h2 class="Home-result_title">
            Nos chiffres clés
        </h2>
        <ul class="Home-result_list">
            <li class="Home-result_item" v-for="result in results">
                <p class="Home-result_item--nmb">{{result.number}}</p>
                <p class="Home-result_item--desc">{{result.desc}}</p>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                results: [
                    {
                        number: '1',
                        desc: 'Nulla vitae elit libero, a pharetra augue. '
                    },
                    {
                        number: '2',
                        desc: 'Nulla vitae elit libero, a pharetra augue. '
                    },
                    {
                        number: '8',
                        desc: 'Nulla vitae elit libero, a pharetra augue. '
                    },
                ]
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss">

    .Home-review_holder {
        margin: 0 5vw;
    }


</style>
