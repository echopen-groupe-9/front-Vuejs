<template>
  <div class='section'>
    <div class="main-wrapper main-wrapper__xl">
      <div class="section-header">
        <h1 class="section-title title section-title-underline">Comment ça<br>fonctionne?</h1>
        <Navigation :sections='sections' :percent='percent'></Navigation>
      </div>
      <div class="section-content">
        <div class="demo__section" v-for='(section, index) in sections' :data-position='index' >
          <div class="demo__content">
            <transition name="fade" mode="out-in">
              <div class="demo__thumbnail text-center" v-show='section.img.visible'>
                <img :src="section.img.source" alt="" class='img-responsive-height'>
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <Description :description='section.description' v-show='section.description.visible'></Description>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Description from './description.vue'
  import Navigation from './navigation.vue'

  export default {
    name: 'demo',
    data () {
      return {
        sections: [
          {
            description: {
              title: 'Facile à utiliser',
              content: 'Avec son application universelle, la sonde S1 d\'échopen offre un support simple pour plus de précision et pour un diagnostic plus rapide.',
              visible: false
            },
            img: {
              source: '/static/images/android_phone_1.png',
              visible: false
            }
          },
          {
            description: {
              title: 'Petite et pratique',
              content: 'Pensée pour épouser la forme d\'une main, la sonde S1 d\'échopen est confortable à l\'usage et peut se tenir dans une poche. Tellement légère qu\'elle s\'emporte partout et peut. Vous pourrez alors faire une image de vos patient en toute facilité.',
              visible: false
            },
            img: {
              source: '/static/images/android_phone_2.png',
              visible: false
            }
          },
          {
            description: {
              title: 'Connectée',
              content: 'Connectée à un téléphone, la sonde peut stocker des images et les envoyer en toute sécurité par bluetooth.',
              visible: false
            },
            img: {
              source: '/static/images/android_phone_3.png',
              visible: false
            }
          }
        ],
        percent: 0
      }
    },
    methods: {
      handleScroll () {
        let posScrollWindow = window.scrollY
        let offset = window.innerWidth < 1024 ? (window.innerHeight / 2) : 0

        this.triggerVisibility('.demo__section', offset, posScrollWindow)
        this.triggerPercentage(posScrollWindow)
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
      },
      triggerPercentage (posScrollWindow) {
        let windowHeight = document.documentElement.offsetHeight

        this.percent = posScrollWindow/(windowHeight) * 100
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    components: {
      Description,
      Navigation
    }
  }
</script>

<style lang='scss'>

  @import '~styles/_plugins/sass-mq/_mq';
  @import '~styles/generics/variable.scss';
@import '~styles/generics/mixin.scss';

  .section {
    position: relative;
  }

  .section-header {
    @include mq($from: 'desktop') {
      width: 100%;
      position: fixed;
      top: 10vh;
      bottom: 0;
    }
  }

  .section-content {
    position: relative;
  }

  .demo__section {
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @include mq($from: 'desktop') {
      height: 400vh;
    }
  }

  .demo__content {
    height: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    @include mq($from: 'desktop') {
      display: block;
      height: auto;
      max-height: 100vh;
      width: 100%;
      position: fixed;
      top: 30vh;
      bottom: 0;
      left: 0;
      padding: 40px 0;
    }
  }

  .demo__thumbnail {
    width: 90%;
    height: 60%;
    margin: 60px auto;
    flex-shrink: 0;
    @include mq($from: 'desktop') {
      width: 30%;
      height: 100%;
      max-height: 100%;
      margin: 0 auto;
      img {
        width: auto;
        max-width: none;
        height: 100%;
        max-height: 100%;
      }
    }
  }

  .footer {
    display: none;
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
