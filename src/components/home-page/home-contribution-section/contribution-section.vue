<template>
    <section class="Home-contribution">
        <ul class="Home-contribution_list">
            <li class="Home-contribution_item" v-for="contribution in contributions">
                <p class="Home-contribution_item--nmb">{{contribution.title}}</p>
                <p class="Home-contribution_item--desc">{{contribution.desc}}</p>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                contributions: [
                    {
                        title: 'Contributeur',
                        desc: 'Nulla vitae elit libero, a pharetra augue. '
                    },
                    {
                        title: 'Contributeur',
                        desc: 'Nulla vitae elit libero, a pharetra augue. '
                    }
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
