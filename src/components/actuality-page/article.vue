<template>
  <li class='js-scrollActive' :class="{ 'news-event': news.type == 'event', 'news': news.type == 'news' }" id="article">
    <!-- <h2 class="title-news">Titre : {{news.title}}</h2>
     <span>Jour : {{news.date}}</span>
     <span>Auteur : {{news.author}}</span>
     <span>Contenu : {{news.content}}</span>
     <span>Url : {{news.url}}</span>
     <img :src="image" alt="" v-for="image in news.images">-->
    <div class="block-text" v-if="news.type == 'news'">
      <h2 class="title-news">Sed posuere consectetur est at lobortis.</h2>
      <p class="text grey">
        Remerciements à:  Alberta Marshall, Roger Long, Sophia Moss, Rodney Terry, Mitchell Delgado
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla.
      </p>
    </div>
    <div class="card-event" v-if="news.type == 'event'">
      <h2 class="title-event">Linker</h2>
      <h3 class="title-event-card">Risus<br>Vulputate</h3>
      <p class="text-event grey">
        Nulla vitae elit libero, a pharetra augue.Nulla vitae elit libero, a pharetra augue.
      </p>
      <a class="event-link" href="">+ See the event on Facebook</a>
      <div class="post-date">
        <span class="location">Paris</span>
        <span class="date">04 feb 2017</span>
      </div>
    </div>
    <div class="block-img" v-if="news.images">
      <img class="img" src="/static/images/news-img.jpg" alt="" v-for="image in news.images">
    </div>
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

  @import '~styles/_plugins/sass-mq/_mq';
  @import '~styles/generics/variable.scss';
@import '~styles/generics/mixin.scss';

  .news{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-items: center;
    background-color: $white;
    opacity: 0;
    transform: translate3D(0 , 50px, 0);
    transition: opacity .4s ease-in, transform .4s ease-in-out;
    padding: 5%;

    @include mq($from: tablet) {
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
    }

    .block-text {
      height: 100%;
      display: inline-block;
      width: 100%;
      text-align: center;
      padding-right: 5%;

      @include mq($from: tablet) {
        width: 50%;
        text-align: left;
      }

      .title-news {
        padding-bottom: 40px;
        position: relative;
        &:after{
          content: '';
          width: 60px;
          height: 3px;
          background-color: $blue-2;
          position: absolute;
          bottom: 20px;
          left: 0;
        }
      }
    }
    .block-img {
      height: 100%;
      display: inline-block;
      width: 100%;
      text-align: left;
      .img {
        width: 100%;
        height: 100%;
      }
      @include mq($from: tablet) {
        width: 50%;
      }
    }
  }
  .news-event{
    opacity: 0;
    width: 100%;
    padding: 0 15%;
    transform: translate3D(0 , 50px, 0);
    transition: opacity .6s cubic-bezier(.4,0,0,1), transform .6s cubic-bezier(.4,0,0,1);
    text-align: center;
    @include mq($from: tablet) {
      text-align: left;
    }

    &.right {
      text-align: center;
      @include mq($from: tablet) {
        text-align: right;
      }
    }
    .card-event{
      position: relative;
      display: inline-block;
      text-align: left;
      width: 270px;
      background-color: $white-2;
      transition: opacity .4s ease-in;
      padding: 20px 20px 10px;
      &:after{
        content: '';
        width: 100%;
        height: 51px;
        background: url('/static/images/event_card_shape.png') no-repeat bottom;
        background-size: contain;
        position: absolute;
        bottom: 0px;
        left: 0;
        z-index: 0;
      }

      .title-event {
        text-align: right;
      }
      .title-event-card {
        padding-bottom: 20px;
        position: relative;
        &:after{
          content: '';
          width: 60px;
          height: 3px;
          background-color: $grey-dark-2;
          position: absolute;
          bottom: 5px;
          left: 0;
        }

      }
      .text-event {
        padding-top: 10px;
      }
      .event-link {
        text-decoration: none;
        display: block;
        color: $blue-4;
        font-size: 12px;
        @include font('Lato', 700);
        text-transform: uppercase;
        padding: 20px 0 50px;
      }
      .post-date {
        position: relative;
        z-index: 1;
        @include font('Lato', 700);
        color: $white;
        text-align: right;
        .location {
          position: relative;
          &:after{
            content: '';
            width: 7px;
            height: 12px;
            background: url('/static/images/pin.png') no-repeat center;
            background-size: contain;
            position: absolute;
            top: 4px;
            left: -14px;
          }
        }
        .date {
          position: relative;
          text-transform: uppercase;
          padding-left: 30px;
          &:after{
            content: '';
            width: 11px;
            height: 11px;
            background: url('/static/images/calendar.png') no-repeat center;
            background-size: contain;
            position: absolute;
            top: 4px;
            left: 10px;
          }
        }
      }
    }
  }


  .is-active{
    opacity: 1;
    transform: translate3D(0 , 0, 0);
    transition: opacity .6s cubic-bezier(.4,0,0,1), transform .6s cubic-bezier(.4,0,0,1);

  }
</style>
