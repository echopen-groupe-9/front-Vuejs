<template>
  <section class="event-section">
    <div class="previous" @click.prevent='prevSlide'>&nbsp;</div>
    <transition name='fade' v-for='(slide, index) in slides' mode="out-in">
      <Slide v-show='index === indexSlide' :slide='slide'></Slide>
    </transition>
    <div class="next" @click.prevent='nextSlide'>&nbsp;</div>
  </section>
</template>

<script>
    import Slide from './slide.vue'

    export default {
        name: 'home',
        data () {
            return {
                indexSlide: 0,
                slides: [
                  {
                    title: 'Prochain Evenement',
                    subtitle: 'Conférence sur les sondes Echopen',
                    content: 'Comment utiliser la sonde Echopen en toute simplicité.',
                    date: 'Samedi 18 Juin'
                  },
                  {
                    title: 'Prochain MeetUp',
                    subtitle: 'CAPMed chez echopen avec les associés',
                    content: 'Définition du besoin médical pour la sonde echopen',
                    date: 'Samedi 28 juillet'
                  },
                  {
                    title: 'Prochain Evenement',
                    subtitle: 'Workshop sur l\'API d\'Echopen sur git',
                    content: 'Comment récupérer les données transmises par la sonde.',
                    date: 'Samedi 30 Août'
                  }
                ],
                contributions: [
                    {
                        title: 'Contributeur',
                        desc: 'Nulla vitae elit libero, a pharetra augue. '
                    },
                    {
                        title: 'Contributeur',
                        desc: 'Nulla vitae elit libero, a pharetra augue. '
                    }
                ]
            }
        },
        methods: {
          nextSlide () {
            if (this.indexSlide === (this.slides.length - 1)) {
              this.indexSlide = 0;
            } else {
              this.indexSlide ++
            }
          },
          prevSlide () {
            if (this.indexSlide === 0) {
              this.indexSlide = (this.slides.length - 1);
            } else {
              this.indexSlide --
            }
          }
        },
        components: {
          Slide
        }
    }
</script>

<style lang="scss" scoped="">
    @import '../../../core.scss';
  .event-section {
    position: relative;
    width:100%;
    min-height: 250px;
    background-color: #1F2C46;
    padding: 65px 75px;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .previous{
      padding: 10px;
      cursor: pointer;
      position: relative;
      &:before{
        content: '';
        width: 15px;
        height: 3px;
        background-color: $white;
        transform: rotate(135deg);
        position: absolute;
        top: 10px;
        left: 0;
      }
      &:after{
        content: '';
        height: 3px;
        width: 15px;
        background-color: $white;
        transform: rotate(-135deg);
        position: absolute;
        top: 19px;
        left: 0;
      }
    }
    .next{
      padding: 10px;
      cursor: pointer;
      position: relative;
      &:before{
        content: '';
        width: 15px;
        height: 3px;
        background-color: $white;
        transform: rotate(45deg);
        position: absolute;
        top: 10px;
        left: 0;
      }
      &:after{
        content: '';
        height: 3px;
        width: 15px;
        background-color: $white;
        transform: rotate(-45deg);
        position: absolute;
        top: 19px;
        left: 0;
      }
    }
  }

  .fade-enter-active {
    transition: all .2s ease .3s;
    position: absolute;
  }

  .fade-leave-active {
    transition: all .3s ease;
    opacity: 0;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-leave-to {
    opacity: 0;
  }
</style>
