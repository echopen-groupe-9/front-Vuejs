<template>
  <ul>
    <li><router-link :to="{name: 'Dashboard.Overview'}">Overview</router-link></li>
    <li><router-link :to="{name: 'Dashboard.Article', params: {id: 1}}">Create an article</router-link></li>
    <li><router-link :to="{name: 'Dashboard.Articles'}">Articles list</router-link></li>
    <li><router-link :to="{name: 'Dashboard.Preset'}">Presets list</router-link></li>
  </ul>
</template>

<script>
  export default {
    name: 'Navside',
    data () {
      return {
      }
    }
  }
</script>

<style>

</style>
