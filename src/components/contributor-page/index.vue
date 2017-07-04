<template>
    <div id="contributor">
        <h1>You are a {{contributorType}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'contributor',
        computed: {
            contributorType () {
                return this.$route.params.contributor
            }
        }
    }
</script>

<style lang="scss">

</style>
