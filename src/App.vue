<template>
  <div id="app" class='app' :class='titlePage'>
    <div class='app__pusher'>
      <navigation :nameRoute='titlePage'></navigation>
      <transition name="transition-page">
        <router-view></router-view>
      </transition>
      <footer-block></footer-block>
    </div>
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
      }),
      titlePage () {
          return this.$route.name
      }
    }
  }
</script>

<style lang="scss">
  @import 'core.scss';

  body {
    &.overflow-none {
      overflow: hidden;
      @include mq($from: 'desktop') {
        overflow: visible;
      }
    }
  }

  #app {
    position: relative;
    text-align: center;
    color: #2c3e50;
  }

  .app, .app .Home-presentation {
    padding: 65px 0 0 0;
    &.Home {
      padding: 0;
    }
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
  .Home {
    .nav {
      background-color: transparent;
      a {
        color: $white;
      }
      // .logo {
      //   background-image: url("assets/Logo-Echopen.svg");
      // }
      .hidden-box {
        background-color: $white;
      }
      .hidden-box a {
        color: $blue-2;
      }
      .select-button:after {
         border-top: 4px solid $white;
       }
      .nav-link:before {
        background-color: $white;
      }
    }
  }
</style>
