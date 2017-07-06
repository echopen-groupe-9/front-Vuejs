<template>
    <li class='js-scrollActive' :class="{ 'news-event': news.type == 'event', 'news': news.type == 'news' }" id="article">
        <h1>Titre : {{news.title}}</h1>
        <span>Jour : {{news.date}}</span>
        <span>Auteur : {{news.author}}</span>
        <span>Contenu : {{news.content}}</span>
        <span>Url : {{news.url}}</span>
        <img :src="image" alt="" v-for="image in news.images">
    </li>
</template>

<script>
    export default {
        name: 'News',
        props: ['news'],
        data () {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../core.scss';

    .news-event{
        display: block;
        height: 500px;
        color: #FFF;
        background-color: $purple-2;
        opacity: 0;
        transition: opacity .4s ease-in;
    }
    
    .news{
        display: block;
        height: 500px;
        background-color: $turquoise;
        opacity: 0;
        transition: opacity .4s ease-in;
    }

    .is-active{
        opacity: 1;
        transition: opacity .4s ease-in;
    }
</style>
