<template>
  <section class="main-wrapper">
    <h1 class="main-title">En 2017 de belles avancées ont eu lieu, et c'est grâce à vous.</h1>
    <p class="text-small">
      Passer notre année en revue
    </p>
    <div :id="newsList.year" v-for="newsList in datas.newsData" class="news-list-container">
      <h2 class="article-date">Date : {{newsList.year}}</h2>
      <ul>
        <news-item v-for="news in newsList.news" :news="news" :key="news.id"></news-item>
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
      positionCard(){
        const $cards = document.querySelectorAll('.news-event');

        [].forEach.call($cards, (el,index) => {
          if(index % 2){
            el.classList.add('right');
          }
        });
      },
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
      this.positionCard();
    },
    destroyed(){
      this.resetScrollActiveClass();
    }
  }
</script>

<style lang="scss" scoped>

  @import '~styles/_plugins/sass-mq/_mq';
  @import '~styles/generics/variable.scss';
@import '~styles/generics/mixin.scss';

  .main-wrapper {
    position: relative;
    margin-bottom: 140px;
    &:after{
      content: '';
      width: 3px;
      height: 70%;
      background-color: $blue-2;
      position: fixed;
      top: 80px;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      z-index: -1;
    }
    .main-title{
      @include font('Lato', 700);
      font-size: 80px;
      line-height: 80px;
      color: $blue-2;
      max-width: 850px;
      margin: 0 auto;
      padding-top: 110px;
      background-color: $white;
      position: relative;
      z-index: 1;
      &:before{
        content: '';
        width: 3px;
        height: 100px;
        background-color: $blue-2;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
      }
    }
    .article-date {
      @include font('Lato', 300);
      background-color: $white;
      padding: 10px 0 22px;
    }
    .text-small{
      @include font('Lato', 300);
      text-transform: uppercase;
      color: $blue-2;
      line-height: 40px;
      padding-top: 90px;
      padding-bottom: 310px;
      position: relative;
      background-color: $white;

      &:before{
        content: '';
        width: 3px;
        height: 60px;
        background-color: $blue-2;
        position: absolute;
        top: 30px;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
      }
      &:after{
        content: '';
        width: 3px;
        height: 290px;
        background-color: $blue-2;
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
      }
    }
  }
</style>
