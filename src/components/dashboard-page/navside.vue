<template>
  <aside class='menu has-text-left navside is-dark'>
    <p class='menu-label'>General</p>
    <ul class="menu-list">
      <li><router-link :to="{name: 'Dashboard.Overview'}" class='router-link'>Overview</router-link></li>
    </ul>
    <p class='menu-label'>Articles</p>
    <ul class="menu-list">
      <li><router-link :to="{name: 'Dashboard.Article', params: {id: 1}}" class='router-link'>Create an article</router-link></li>
      <li><router-link :to="{name: 'Dashboard.Articles'}" class='router-link'>Articles list</router-link></li>
    </ul>
    <p class='menu-label'>Presets</p>
    <ul class="menu-list">
      <li><router-link :to="{name: 'Dashboard.Preset'}" class='router-link'>Presets list</router-link></li>
    </ul>

  </aside>
<!--   <ul class='navside is-dark menu-list has-text-left'>
    <li><router-link :to="{name: 'Dashboard.Overview'}" class='router-link'>Overview</router-link></li>
    <li class="section-router">
      <li class="section-router__title">Articles</li>
      <li><router-link :to="{name: 'Dashboard.Article', params: {id: 1}}" class='router-link'>Create an article</router-link></li>
      <li><router-link :to="{name: 'Dashboard.Articles'}" class='router-link'>Articles list</router-link></li>
    </li>
    <li class="section-router">
      <li class="section-router__title">Presets</li>
      <li><router-link :to="{name: 'Dashboard.Preset'}" class='router-link'>Presets list</router-link></li>
    </li>
  </ul> -->
</template>

<script>
  export default {
    name: 'Navside',
    data () {
      return {
      }
    }
  }
</script>

<style lang='scss'>
  @import '~bulma/sass/utilities/variables.sass';

  .navside {
    width: 200px;
    min-width: 200px;
    padding: 20px;
    li {
      width: 100%;
    }
    .router-link {
      width: 100%;
      color: $grey-lighter;
      transition: color 0.3s;
      display: inline-block;
      /*padding: 0 0 0 20px;*/
      &:hover,
      &:focus {
        color: $white;
        background-color: $turquoise;
      }

    }
  }
</style>
