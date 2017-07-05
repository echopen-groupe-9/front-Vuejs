<template>
  <div class='demo__description text-center'>
    <h3 class='demo_descriptionTitle title title-sm text-primary-2'>{{description.title}}</h3>
    <p class='demo_descriptionSubtitle text text-base text-sm'>{{description.content}}</p>
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

<style lang='scss'>
  .demo__description {
    position: absolute;
    bottom: 50px;
    margin: 0 35%;
  }

  .demo_descriptionSubtitle {
    margin: 15px 0 0 0;
  }
</style>
