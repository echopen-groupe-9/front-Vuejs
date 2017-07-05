<template>
  <ul>
    <li v-for='link in links'><router-link :to="{name: link.linkPath}">{{link.title}}</router-link></li>
  </ul>
</template>

<script>
  export default {
    name: 'Navside',
    data () {
      return {
        links: [
          {
            title: 'Overview',
            linkPath: 'Dashboard.Overview'
          },
          {
            title: 'Create an article',
            linkPath: 'Dashboard.Article'
          },
          {
            title: 'Articles list',
            linkPath: 'Dashboard.Articles'
          },
          {
            title: 'Presets list',
            linkPath: 'Dashboard.Preset'
          }
        ]
      }
    }
  }
</script>

<style>

</style>
