<template>
    <li class="Home-actu_item">
      <img class="Home-actu_img" :src='getImageStore + news.imageName'>
      <div class="Home-actu_contain">
        <h3 class="Home-actu_title text">{{news.title}}</h3>
        <p class="Home-actu_text text-2">{{ news.content }}</p><br>
        <a :href='news.url' target='_blank' title=''>Lire la suite</a>
      </div>
    </li>
</template>

<script>
  import Vuex from 'vuex'

  export default {
    name: 'CardActu',
    props: ['news'],
    data () {
      return {}
    },
    computed: {
      ...Vuex.mapGetters({
        'getImageStore': 'getImage'
      })
    }
  }
</script>

<style lang='scss'>

  @import '~styles/_plugins/sass-mq/_mq';
  @import '~styles/generics/variable.scss';
@import '~styles/generics/mixin.scss';

  .Home-actu_item {
    width: 100%;
    border: 1px solid #fff;
    box-shadow: 0px 7px 21px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    position: relative;
    z-index: 1;
    margin: 0 0 40px 0;
    @include mq($from: 'tablet') {
      width: 40%;
    }
    @include mq($from: 'desktop') {
      width: 30%;
    }
  }
  .Home-actu_contain {
    padding: 0 20px 20px 20px;
    a {
      display: block;
      width: 30%;
      text-align: center;
      color: $blue-2;
      text-decoration: underline;
      font-size: 10px;
      font-family: "Lato";
      text-transform: none;
      margin: 0 auto;
    }
  }
  .Home-actu_text {
    color: $grey-light;
  }
  .Home-actu_img {
    width: 100%;
  }
  .Home-actu_button {
    background-image: linear-gradient(to right, #00c6fb 0%, #005bea 100%);
    font-size: 14px;
    color: $white;
    border-radius: 100px;
    border-color: $blue-2;
    border-bottom: $blue-2;
    border-right: $blue-2;
    border-left: $blue-2;
    border-top: $blue-2;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    padding: 10px 30px;
  }
</style>
