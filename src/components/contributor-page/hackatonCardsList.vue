<template>
    <ul class="hackaton-card-list" v-if="repos">
        <hackaton-card v-for="repo in 3"></hackaton-card>
    </ul>
</template>

<script>
    /* Import Component */
    import hackatonCard from './hackatonCard.vue';

    export default {
        data () {
            return {
                pending: true,
                repos: []
            }
        },
        components: {
            'hackaton-card' : hackatonCard
        },
    }
</script>

<style lang="scss">
    .hackaton-card-list{
        text-align: left;
    }
</style>
