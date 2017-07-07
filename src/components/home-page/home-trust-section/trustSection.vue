<template>
    <section class="Home-trust main-wrapper">
        <h1 class="Home-trust_title title-sm">
            {{title}}
        </h1>
        <ul class="Home-trust_list text">
            <li class="Home-trust_item" v-for="trust in trusts">
                 <img class="Home-trust_item--image" src="../../../assets/Logo.svg"  alt="">
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
                transition: .3s ease;
                opacity: .5;
                margin: 0 5%;

                &:hover {
                    opacity: 1;
                    filter: none;
                }
                &--image {
                    width:80%;
                }
            }
        }
    }

</style>
