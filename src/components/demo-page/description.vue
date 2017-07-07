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
  @import '../../core.scss';

  .demo__description {
    margin: 0 5%;
    @include mq($from: 'desktop') {
      width: 35%;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      margin: 0;
      padding: 0 40px;
    }
  }

  .demo_descriptionSubtitle {
    margin: 15px 0 0 0;
  }
</style>
