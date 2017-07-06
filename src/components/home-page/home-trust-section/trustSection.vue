<template>
    <section class="Home-trust main-wrapper">
        <h1 class="Home-trust_title">
            {{title}}
        </h1>
        <ul class="Home-trust_list">
            <li class="Home-trust_item" v-for="trust in trusts">
                <img src="../../../assets/logo.png"  alt="">
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                title: 'Ils nous ont fait confiance',

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
    @import '../../../core';

    .Home-trust {
        &_title {
            font-size: 30px;
            color: $grey-dark;
        }
        &_list {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            margin-top: 50px;

            .Home-trust_item {
                filter: grayscale(100%);
                opacity: .4;
                transition: ease .5s;

                &:hover {
                    filter: none;
                    opacity: 1;
                }
            }
        }
    }

</style>
