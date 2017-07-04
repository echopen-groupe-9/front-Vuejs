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
        items: [
          {
            title: 'Overview',
            linkPath: 'dashboard.overview'
          },
          {
            title: 'Create an article',
            linkPath: 'dashboard.article'
          },
          {
            title: 'Articles list',
            linkPath: 'dashboard.articles'
          },
          {
            title: 'Presets list',
            linkPath: 'dashboard.presets'
          }
        ]
      }
    }
  }
</script>

<style>

</style>
