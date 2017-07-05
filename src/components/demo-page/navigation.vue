<template>
  <div class='demo__navigation'>
    <ul class='flex-column dp-flex navigation__list'>
      <li class='navigation__section dp-flex' v-for='(section, index) in sections'>
        <div class="title text-primary-2 text-right flex-1-child">
          <h3>{{index}}</h3>
          <p class='text'>{{section.description.title}}</p>
        </div>
        <div class="progress-bar bg-blue-2"></div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['sections'],
    name: 'navigation',
    data () {
      return {

      }
    }
  }
</script>

<style lang='scss'>
  .progress-bar {
    width: 1px;
    height: 50px;
  }

  .navigation__list {
    width: 200px;
  }

  .navigation__section {
    padding: 10px 0;
    .title {
      padding: 0 20px 0 0;
    }
  }
</style>
