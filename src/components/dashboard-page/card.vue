<template>
  <div class='card'>
    <div class='card__thumbnail'>{{img}}</div>
    <div class='card__content'>
      <h4>{{title}}</h4>
      <slot name='description'></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: [
      'img', 'title'
    ],
    data () {
      return {
      }
    }
  }
</script>

<style>

</style>
