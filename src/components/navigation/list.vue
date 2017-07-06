<template>
    <nav class="nav">
        <ul class="navigation text-small">
            <li class="logo">
                <div class="logo-img">
                    <router-link :to="{name: 'Home'}"></router-link>
                </div>
            </li>
            <div class="nav-link">
                <li>
                    <router-link :to="{name: 'Home'}">Wiki</router-link>
                </li>
            </div>
            <div class="nav-link">
                <li>
                    <router-link :to="{name: 'Contributor'}">Contributeurs</router-link>
                </li>
            </div>
            <div class="nav-link">
                <li>
                    <router-link :to="{name: 'Home'}">Echopen et vous</router-link>
                </li>
            </div>
            <div class="nav-link">
                <li>
                    <router-link :to="{name: 'Home'}">Contact</router-link>
                </li>
            </div>
            <div class="nav-link">
                <li>
                    <router-link :to="{name: 'News'}">Actualités</router-link>
                </li>
            </div>
            <div class="select_box">
                <a class="select-button" href="#" @click="toggle">Je suis :</a>
                <div class="hidden-box" v-show="active">
                    <li v-show="show" @click="close">
                        <router-link :to="{name: 'Contributor.Details', params: {contributor: 'brainer'}}">Brainer</router-link>
                    </li>
                    <li v-show="show" @click="close">
                        <router-link :to="{name: 'Contributor.Details', params: {contributor: 'maker'}}">Maker</router-link>
                    </li>
                </div>
            </div>
        </ul>
    </nav>
</template>

<script>
    export default {
        data () {
            return {
                active : false,
                show:false,
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
        background-color: transparent;
        padding: 1% 4% 1% 2%;
        height: 100%;
        max-height: 60px;
        margin-bottom: 10%;
    }
    a {
        color: $grey;
        text-transform: uppercase;
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
    }
    .nav-link:before {
         content: "";
         position: absolute;
         display: block;
         bottom: 2px;
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
        width: 12%;
        height: 150%;
        position: absolute;
        left: 0;
        background-image: url('../../assets/Logo.svg');
        background-size: contain;
        background-repeat: no-repeat;
    }
    .logo-img, .logo-img a {
        display: block;
        height: 100%;
    }
    .hidden-box {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        position: absolute;
        top: 32px;
        right: -26px;
        padding: 10px 20px;
        text-align: center;
        background-color: $blue-2;
    }
    .hidden-box a {
        color: $white;
    }
    .hidden-box li {
        margin-right: 0;
    }
    .select-button:after{
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid $grey;
        position: absolute;
        top: 40%;
        right: -15px;
        content: "";
        z-index: 98;
    }

</style>
