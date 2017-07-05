<template>
    <div>
        <h1>You are a {{contributorType}}</h1>
        <github-cards v-if="contributorType == 'maker'"></github-cards>
    </div>
</template>

<script>
    /* Import Components */
    import githubCardsList from './githubCardsList.vue'

    export default {
        name: 'Details',
        components: {
            'github-cards': githubCardsList
        },
        computed: {
            contributorType () {
                return this.$route.params.contributor
            }
        }
    }
</script>

<style lang="scss">

</style>
