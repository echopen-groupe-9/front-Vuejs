<template>
    <section class="Home-trust">
        <ul class="Home-trust_list">
            <li class="Home-trust_item" v-for="trust in trusts">
                <img v-bind:src="trust.url"  alt="">
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                trusts: [
                    {
                        url: "../../assets/logo.png"
                    },
                   {
                        url: "../../assets/logo.png"
                    },
                   {
                        url: "../../assets/logo.png"
                    },
                   {
                        url: "../../assets/logo.png"
                    },
                   {
                        url: "../../assets/logo.png"
                    },
                   {
                        url: "../../assets/logo.png"
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
