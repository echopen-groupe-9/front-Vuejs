<template>
  <div id="app">
    <navigation></navigation>
    <transition name="transition-page">
      <router-view></router-view>
    </transition>
    <footer-block></footer-block>
  </div>
</template>

<script>
  /* Import components*/
  import navigation from './components/navigation/list.vue'
  import footer from './components/footer/index.vue'
  import Vuex from 'vuex'

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'navigation': navigation,
      'footer-block': footer
    },
    computed: {
      ...Vuex.mapGetters({
        'isLoggedIn': ''
      })
    }
  }
</script>

<style lang="scss">

  @import 'assets/stylesheet/generics/fonts.scss';
  @import 'assets/stylesheet/generics/variable.scss';
  @import 'assets/stylesheet/generics/mixin.scss';
  @import 'assets/stylesheet/generics/text.scss';

  #app {
    text-align: center;
    color: #2c3e50;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  .transition-page-enter-active {
    transition: all .3s ease .4s;
  }

  .transition-page-leave-active {
    transition: all .4s ease;
  }

  .transition-page-enter {
    opacity: 0;
  }

  .transition-page-leave-to {
    opacity: 0;
  }
</style>
