<template>
    <div id="contributor">
        <h1>You are a {{contributorType}}</h1>
        <github-cards></github-cards>
    </div>
</template>

<script>
    import githubCardsList from './githubCardsList.vue'
    export default {
        name: 'contributor',
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
