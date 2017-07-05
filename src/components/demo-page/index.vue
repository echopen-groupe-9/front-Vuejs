<template>
  <div>
    <div class="demo__section" v-for='(section, index) in sections' :data-position='index' >
        <div class="demo__content">
          <transition name="fade" mode="out-in">
            <div class="demo__thumbnail" v-show='section.img.visible'>
              <img :src="section.img.source" alt="" class='img-responsive'>
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <Description :description='section.description' v-show='section.description.visible'></Description>
          </transition>
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
              content: 'description first section description first section description first section ',
              visible: false
            },
            img: {
              source: viewme,
              visible: false
            }
          },
          {
            description: {
              title: 'Second section',
              content: 'description second section description second section description second section ',
              visible: false
            },
            img: {
              source: viewme,
              visible: false
            }
          },
          {
            description: {
              title: 'Third section',
              content: 'description third section description third section description third section ',
              visible: false
            },
            img: {
              source: viewme,
              visible: false
            }
          }
        ]
      }
    },
    methods: {
      handleScroll () {
        let posScrollWindow = window.scrollY

        this.triggerVisibility('.demo__section', 0, posScrollWindow)
        // console.log(posScrollWindow)
      },
      triggerVisibility (el, offset, ref) {
        let container = document.querySelectorAll(el)

        container.forEach((element, index) => {
          let posElement = element.offsetTop
          let heightContainer = element.offsetHeight
          let active = false
          let conditionImg = (ref > (posElement - (offset)) && ref < (posElement + heightContainer))
          let conditionDescription = (ref > (posElement - (offset) + (heightContainer / 4)))

          if (conditionImg && active == false) {
            this.sections[index].img.visible = true
            if (conditionDescription) {
              this.sections[index].description.visible = true
            } else {
              this.sections[index].description.visible = false
            }
            active = true
          } else {
            this.sections[index].img.visible = false
            this.sections[index].description.visible = false
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

  .fade-enter-active {
    transition: all 0.3s ease 0.4s;
  }

  .fade-leave-active {
    transition: all 0.4s ease;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-leave-to {
    opacity: 0;
  }

</style>
