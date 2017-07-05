<template>
  <header class='dashboard__header'>
    <h3>Dashboard Admin {{msg}}</h3>
    <div class='menu-burger'></div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        msg: 'pilou'
      }
    }
  }
</script>

<style lang='scss'>
  @import '~bulma/sass/utilities/variables.sass';

  .dashboard__header {
    background-color: $blue;
    flex-shrink: 0;
    padding: 20px;
  }
</style>
