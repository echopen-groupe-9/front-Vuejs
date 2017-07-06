<template>
    <nav class="nav">
        <div class='nav__menu hidden-desktop'>
          <div class='btn navMenuIcon' @click.prevent='openMenu' :class='menuOpened ? "is-opened" : ""'>
            <span></span>
          </div>
        </div>

        <ul class="navigation text-small" :class='menuOpened ? "active" : ""'>
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
            <li class="select_box nav-link hidden visible-desktop">
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
                },
                menuOpened: false
            }
        },
        methods: {
            toggle () {
                this.active = !this.active;
                this.show = true;
            },
            close () {
              this.active = false;
              this.show = false;
            },
            openMenu () {
              this.menuOpened = !this.menuOpened;
              if (this.menuOpened) {
                document.querySelector('body').classList.add('overflow-none');
              } else {
                document.querySelector('body').classList.remove('overflow-none');
              }
            }
        }
    }
</script>
<style lang="scss">
    @import '../../core.scss';

    .nav {
        min-height: 65px;
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
      width: 300px;
      height: 100vh;
      overflow: auto;
      position: fixed;
      left: 100vw;
      display: flex;
      flex-direction: column;
      transform: translate3d(300px, 0, 0);
      transition: transform .4s ease-in-out;
      text-align: left;
      background: $blue-2;
      padding: 60px 20px 0 20px;
      &.active {
        transform: translate3d(-300px, 0, 0);
      }
      @include mq($from: 'desktop') {
        width: 100%;
        height: auto;
        transform: translate3d(0, 0, 0);
        overflow: visible;
        position: relative;
        left: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding: 0;
        background: transparent;
        &.active {
          transform: translate3d(0, 0, 0);
        }
      }
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
          color: white;
          display: inline-block;
          text-transform: uppercase;
          padding: 20px 0;
          @include mq($from: 'desktop') {
            color: $grey;
          }
      }

      &:before {
        content: "";
        position: absolute;
        display: block;
        bottom: 15px;
        width: 100%;
        height: 1px;
        transform: scaleX(0);
        transform-origin: 0 50%;
        transition: transform .3s cubic-bezier(.39,.575,.565,1);
        @include mq($from: 'desktop') {
          background-color: $grey;
        }
      }
    }
    .nav-link:before {
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
      padding: 5px 0;
      @include mq($from: 'desktop') {
        display: block;
        position: absolute;
        left: 0;
      }
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

    /////////////
    // menu burger
    ////////////
    .navMenuIcon {
        position: relative;
        width: 54px;
        height: 54px;
        transition: transform 0.5s;
        span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          display: block;
          width: 22px;
          height: 2px;
          background-color: $grey;
          transition: all 0.5s;
        }
        &.is-opened {
          span {
            background-color: white;
            &:before,
            &:after {
              background-color: white;
            }
          }
        }
    }

    .Home .navMenuIcon span {
      background-color: white;
      &:before,
      &:after {
        background-color: white;
      }
    }

    .navMenuIcon span::before, .navMenuIcon span::after {
        content: '';
        width: 22px;
        height: 2px;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-6px);
        display: block;
        background-color: $grey;
        transition: transform 0.5s;
    }

    .navMenuIcon span::after {
        transform: translateY(6px);
    }

    .navMenuIcon.is-opened {
      transform: rotate(180deg);
      span {
        background: transparent;
        &:before {
          transform: translateY(0) rotate(45deg);
        }
        &:after {
          transform: translateY(0) rotate(-45deg);
        }
      }
    }



    .nav__menu {
      width: 25px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
      z-index: 222;
    }

    .Home {
      .nav__menu .nav__menuLine {
        background: white;
      }
    }

</style>
