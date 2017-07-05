<template>
<<<<<<< HEAD
  <div id="app" class='app' :class='titlePage'>
    <navigation :nameRoute='titlePage'></navigation>
    <transition name="transition-page">
      <router-view></router-view>
    </transition>
    <footer-block></footer-block>
  </div>
=======
<<<<<<< HEAD
    <div id="app" class='app' :class='titlePage'>
        <navigation :nameRoute='titlePage'></navigation>
        <transition name="transition-page">
            <router-view></router-view>
        </transition>
        <footer-block></footer-block>
    </div>
>>>>>>> [ADD:components/homepage] css for components
</template>

<script>
  /* Import components*/
  import navigation from './components/navigation/list.vue'
  import footer from './components/footer/index.vue'
  import Vuex from 'vuex'

<<<<<<< HEAD
=======
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
=======
  <div id="app">
    <transition name="transition-page">
      <router-view></router-view>
    </transition>
    <footer-block></footer-block>
  </div>
</template>

<script>
  /* Import components*/
  import footer from './components/footer/index.vue'
  import Vuex from 'vuex'

>>>>>>> [ADD:components/homepage] css for components
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
<<<<<<< HEAD
      'navigation': navigation,
      'footer-block': footer
=======
      'footer-block': footer,
>>>>>>> [ADD:components/homepage] css for components
    },
    computed: {
      ...Vuex.mapGetters({
        'isLoggedIn': ''
<<<<<<< HEAD
      }),
      titlePage () {
          return this.$route.name
      }
=======
      })
>>>>>>> [ADD:components/homepage] css for components
>>>>>>> [ADD:components/homepage] css for components
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
    margin-top: 60px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: $turquoise;
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
