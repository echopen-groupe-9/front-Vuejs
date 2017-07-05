<template>
  <div>
    <div class="demo__section" v-for='(section, index) in sections'>
      <div class="demo__content" :data-position='index' v-show='section.visible'>
        <div class="demo__thumbnail">
          <img :src="section.img" alt="" class='img-responsive'>
        </div>
        <Description :description='section.description'></Description>
      </div>
    </div>
  </div>
</template>

<script>
  import Description from './description.vue'
  import viewme from '../../assets/images/viewme.jpg'

  export default {
    name: 'demo',
    data () {
      return {
        sections: [
          {
            description: {
              title: 'First section',
              content: 'description first section description first section description first section '
            },
            img: viewme,
            visible: true
          },
          {
            description: {
              title: 'Second section',
              content: 'description second section description second section description second section '
            },
            img: viewme,
            visible: true
          },
          {
            description: {
              title: 'Third section',
              content: 'description third section description third section description third section '
            },
            img: viewme,
            visible: true
          }
        ]
      }
    },
    components: {
      Description
    }
  }
</script>

<style>
  .demo__section {
    height: 400vh;
  }

  .demo__content {
    height: 100vh;
    max-height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .demo__thumbnail {
    width: 50%;
    margin: auto;
  }
</style>
