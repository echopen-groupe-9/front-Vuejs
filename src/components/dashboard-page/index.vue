<template>
  <div>
    <Header></Header>
    <Navside></Navside>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './header.vue'
  import Navside from './navside.vue'

  export default {
    name: 'Dashboard',
    data () {
      return {
      }
    },
    components: {
      Header,
      Navside
    }
  }
</script>

<style>

</style>
