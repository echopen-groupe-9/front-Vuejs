<template>
  <div class='dashboard'>
    <Header></Header>
    <div class="dashboard__container">
      <Navside></Navside>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './header.vue'
  import Navside from './navside.vue'

  export default {
    name: 'Dashboard',
    data () {
      return {
      }
    },
    components: {
      Header,
      Navside
    }
  }
</script>

<style lang='scss'>
  @import '~bulma/bulma.sass';

  .nav {
    display: none;
  }

  .dashboard {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    align-content: stretch;

    .dashboard__container {
      display: flex;
      align-self: stretch;
      flex: 1;
    }

    .is-dark {
      background-color: $black-ter;
    }
  }

</style>


@mixin
