<template>
  <div id="app">
    <navigation></navigation>
    <transition name="transition-page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
/* Import components*/
import navigationList from './components/navigation/list.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'navigation': navigationList,
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
  color: #42b983;
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
.transition-page-leave-to{
  opacity: 0;
}
</style>
