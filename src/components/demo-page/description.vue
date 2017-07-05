<template>
  <div class='demo__description'>
    <h3 class='demo_descriptionTitle title'>{{description.title}}</h3>
    <h4 class='demo_descriptionSubtitle text'>{{description.content}}</h4>
  </div>
</template>

<script>
  export default {
    name: 'description',
    props: ['description'],
    data () {
      return {

      }
    }
  }
</script>

<style>
</style>
