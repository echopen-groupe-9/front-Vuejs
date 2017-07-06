<template>
    <nav class="nav">
        <ul class="navigation text-small">
            <li class="logo">
                <router-link :to="{name: 'Home'}">
                  <img :src="nameRoute === 'Home' ? logoImg.home : logoImg.default" alt="">
                </router-link>
            </li>
            <li class="nav-link">
                <router-link :to="{name: 'Home'}">Wiki</router-link>
            </li>
            <li class="nav-link">
                <router-link :to="{name: 'Contributor'}">Contributeurs</router-link>
            </li>
            <li class="nav-link">
                <router-link :to="{name: 'Home'}">Echopen et vous</router-link>
            </li>
            <li class="nav-link">
                <router-link :to="{name: 'Home'}">Contact</router-link>
            </li>
            <li class="nav-link">
                <router-link :to="{name: 'News'}">Actualités</router-link>
            </li>
            <li class="nav-link">
                <router-link :to="{name: 'Demo'}">Demo</router-link>
            </li>
            <li class="select_box nav-link">
                <a class="select-button" href="#" @click="toggle">Je suis :</a>
                <div class="hidden-box" v-show="active">
                    <li v-show="show" @click="close">
                        <router-link :to="{name: 'Contributor.Details', params: {contributor: 'brainer'}}">Brainer</router-link>
                    </li>
                    <li v-show="show" @click="close">
                        <router-link :to="{name: 'Contributor.Details', params: {contributor: 'maker'}}">Maker</router-link>
                    </li>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
    import homeLogo from '../../assets/Logo-Echopen.svg'
    import defaultLogo from '../../assets/Logo.svg'

    export default {
        props: ['nameRoute'],
        data () {
            return {
                active : false,
                show:false,
                logoImg: {
                  home: homeLogo,
                  default: defaultLogo
                }
            }
        },
        methods: {
            toggle: function () {
                this.active = !this.active;
                this.show = true;
            },
            close: function () {
              this.active = false;
              this.show = false;
            },
        }
    }
</script>
<style lang="scss">
    @import '../../core.scss';

    .nav {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
        background-color: white;
        padding: 0 20px;
    }

    .Home .nav {
      position: absolute;
    }

    .navigation {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .navigation li {
        text-transform: uppercase;
    }
    .nav-link {
        position: relative;
        display: inline-block;
        cursor: pointer;
        margin-right: 30px;
      a {
          display: inline-block;
          color: $grey;
          text-transform: uppercase;
          padding: 20px 0;
      }
    }
    .nav-link:before {
      content: "";
      position: absolute;
      display: block;
      bottom: 15px;
      width: 100%;
      height: 1px;
      background-color: $grey;
      transform: scaleX(0);
      transform-origin: 0 50%;
      transition: transform .3s cubic-bezier(.39,.575,.565,1);
     }
    .nav-link:hover {
        &:before {
             transform-origin: 0 50%;
             transform: scaleX(1);
         }
    }
    a {
        text-decoration: none;
    }
    .logo {
        display: block;
        padding: 5px 0;
        // width: 12%;
        position: absolute;
        left: 0;
    }
    .logo a {
      height: 100%;
        display: inline-block;
    }
    .hidden-box {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        overflow: hidden;
        position: absolute;
        top: 90%;
        right: 0;
        text-align: center;
        background-color: $blue-2;
    }
    .hidden-box a {
        display: inline-block;
        color: $white;
        padding: 10px 20px
    }
    .hidden-box li {
        display: inline-block;
        margin-right: 0;
        &:hover {
          background: lighten($grey-light, 20%);
        }
        & + li {
          a {
            padding-top: 5px;
          }
        }
    }

    .select_box {
      padding: 0 15px 0 0;
      // &:after {
      //   width: 0;
      //   height: 0;
      //   border-left: 4px solid transparent;
      //   border-right: 4px solid transparent;
      //   border-top: 4px solid $grey;
      //   position: absolute;
      //   top: 40%;
      //   right: 0;
      //   content: "";
      //   // z-index: 98;
      // }
    }

    .select-button:after{
      content: "";
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid $grey;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      z-index: 10;
    }

</style>
