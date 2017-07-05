<template>
  <div>
    <div class="demo__section" v-for='(section, index) in sections' :data-position='index' >
      <div class="demo__content" v-show='section.visible'>
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
    methods: {
      handleScroll () {
        let posScrollWindow = window.scrollY

        this.triggerClass('.demo__section', 0, posScrollWindow)
        // console.log(posScrollWindow)
      },
      triggerClass (el, offset, ref) {
        let container = document.querySelectorAll(el)

        container.forEach((element) => {
          console.log(element)

          let posElement = element.offsetTop
          let heightContainer = element.offsetHeight
          let active = false
          let condition = (ref > (posElement - (offset)) && ref < (posElement + heightContainer))

          if (condition && active == false) {
            element.classList.add('active')
            active = true
          } else {
            element.classList.remove('active')
          }
        })
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    components: {
      Description
    }
  }
</script>

<style lang='scss'>
  .demo__section {
    height: 400vh;
    opacity: 0;
    &.active {
      opacity: 1;
    }
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
