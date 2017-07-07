<template>
    <section class="Home-actu">
        <div class="main-wrapper">
            <h2 class="Home-actu_title section-subtitle title">
                Nos dernières <span class="section-subtitle-span">actualités</span>
            </h2>
            <ul class="Home-actu_list">
              <CardActu v-for='news in AllNewsStore' :news='news'></CardActu>
            </ul><br>
            <button class="Home-actu_button">Voir plus</button>
        </div>
    </section>
</template>

<script>
  import Vuex from 'vuex'
  import CardActu from './card-actu.vue'

  export default {
      name: 'actu',
      data () {
        return {
        }
      },
      methods: {
        ...Vuex.mapActions({
          'fetchNewsStore': 'fetchNews'
        })
      },
      computed: {
        ...Vuex.mapGetters({
          'AllNewsStore': 'getAllNews',
          'getImageStore': 'getImage'
        })
      },
      mounted () {
        this.fetchNewsStore();
      },
      components: {
        CardActu
      }
  }
</script>

<style lang="scss">
    @import '../../../core.scss';

    .Home-actu {
        width: 100%;
        margin: 50px auto 70px auto;
    }
    .Home-actu_list {
        display: flex;
        // flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        text-align: left;

        @include mq($from: 'desktop') {
          flex-flow: row;
        }
    }
</style>
