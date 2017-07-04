<template>
  <div id="user">
    <h1>{{msg}}</h1>
    <formAuthentication></formAuthentication>
  </div>
</template>

<script>
  import formAuthentication from '../shared/form.vue'

  export default {
    name: 'user',
    data () {
      return {
        msg: 'Je suis une page User'
      }
    },
    components: {
      formAuthentication
    }
  }
</script>

<style lang="scss">

</style>
