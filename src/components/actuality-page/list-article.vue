<template>
    <section class="main-wrapper">
        <h1>Section List Article</h1>
        <div :id="newsList.year" v-for="newsList in datas.newsData" class="news-list-container">
            <h2>Date : {{newsList.year}}</h2>
            <ul>
                <news-item v-for="news in newsList.news" :news="news"></news-item>
            </ul>
        </div>
    </section>
</template>

<script>
    /* Import Components */
    import Article from './article.vue'

    /* Import Datas */
    import news from '../../datas/news'

    /* Import Helpers*/
    import ScrollActive from '../../helpers/ScrollActive'

    export default {
        name: 'listArticle',
        data () {
            return {
                datas: news,
                scrollActive: []
            }
        },
        components: {
            'news-item': Article
        },
        methods: {
            setScrollActiveClass() {
                /*ScrollActiveClass*/
                let $ScrollActiveClass = document.querySelectorAll('.js-scrollActive');
                [].forEach.call($ScrollActiveClass, (el) => {
                    let instance = new ScrollActive(el, {
                        screenOffset: "bottom", // or "middle"
                        yoyo: true
                    });
                    this.$data.scrollActive.push(instance);
                });
            },
            resetScrollActiveClass() {
                [].forEach.call(this.$data.scrollActive, (el) => {
                    el.unBindEvents();
                });
            }
        },
        mounted(){
            this.setScrollActiveClass();
        },
        destroyed(){
            this.resetScrollActiveClass();
        }
    }
</script>

<style lang="scss">

</style>
