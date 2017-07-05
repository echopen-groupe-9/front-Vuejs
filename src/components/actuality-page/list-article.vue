<template>
    <ul id="listArticle">
        <Article></Article>
        <Article></Article>
        <Article></Article>
    </ul>
</template>

<script>
    import Article from './article.vue'

    export default {
        name: 'listArticle',
        data () {
            return {
            }
        },
        components: {
            Article
        }
    }
</script>

<style lang="scss">

</style>