<template>
    <ul class="hackaton-card-list">
        <hackaton-card v-for="hackaton in 3" :key="hackaton.id"></hackaton-card>
    </ul>
</template>

<script>
    /* Import Component */
    import hackatonCard from './hackatonCard.vue';

    export default {
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
