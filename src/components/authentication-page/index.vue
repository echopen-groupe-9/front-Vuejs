<template>
  <div>
    <h1>Authentication page</h1>
    <formAuthentication></formAuthentication>
  </div>
</template>

<script>
  import formAuthentication from './form.vue'

  export default {
    name: 'Dashboard',
    data () {
      return {
        msg: 'pilou'
      }
    },
    components: {
      formAuthentication
    }
  }
</script>

<style>

</style>
