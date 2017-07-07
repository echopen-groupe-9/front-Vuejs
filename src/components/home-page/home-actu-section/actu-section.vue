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
        flex-flow: row wrap;
        justify-content: space-around;
        text-align: left;
    }

    .Home-actu_item {
        max-width: 100%;
        border: 1px solid #fff;
        box-shadow: 0px 7px 21px 0px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        position: relative;
        z-index: 1;
        margin-bottom: 20px;

        @include mq($from: tablet){
            max-width: 30%;
        }
    }

    .Home-actu_contain {
        padding: 0 20px 20px 20px;

        @include mq($from: 'desktop') {
          flex-flow: row;
        }

        a{
            @include font('Lato', 700);
            width: 100%!important;
            font-size: 16px!important;
            line-height: 18px;
            text-decoration: none!important;
            color: $blue;
        }
    }

    .Home-actu_text {
        color: $grey-light;
    }

    .Home-actu_img {
        width: 100%;
    }


    .Home-actu_button {
        background-image: linear-gradient(to right, #00c6fb 0%, #005bea 100%);
        padding: 10px 30px;
        font-size: 14px;
        color: $white;
        border-radius: 100px;
        border-color: $blue-2;
        border-bottom: $blue-2;
        border-right: $blue-2;
        border-left: $blue-2;
        border-top: $blue-2;
        text-transform: uppercase;
        outline: none;
        cursor: pointer;
        margin-top: 5%;
        text-decoration: none;
    }
</style>
