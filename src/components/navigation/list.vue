<template>
    <nav class="nav">
        <ul class="navigation text-small">
            <li class="logo">
                <router-link :to="{name: 'Home'}"><img src="../../assets/logo-echotech.jpg"></router-link>
            </li>
            <div class="link">
                <li>
                    <router-link :to="{name: 'Home'}">Wiki</router-link>
                </li>
            </div>
            <div class="link">
                <li>
                    <router-link :to="{name: 'Contributor'}">Contributeurs</router-link>
                </li>
            </div>
            <div class="link">
                <li>
                    <router-link :to="{name: 'Home'}">Echopen et vous</router-link>
                </li>
            </div>
            <div class="link">
                <li>
                    <router-link :to="{name: 'Home'}">Contact</router-link>
                </li>
            </div>
            <div class="link">
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
        position: relative;
        background-color: $blue-2;
        padding: 1% 2%;
    }
    a {
        color: $white;
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
    .link {
        position: relative;
        display: inline-block;
        cursor: pointer;
        margin-right: 30px;
    }
    .link:before {
         content: "";
         position: absolute;
         display: block;
         bottom: 2px;
         width: 100%;
         height: 1px;
         background-color: $white;
         transform: scaleX(0);
         transform-origin: 0 50%;
         transition: transform .3s cubic-bezier(.39,.575,.565,1);
     }
    .link:hover {
        &:before {
             transform-origin: 0 50%;
             transform: scaleX(1);
         }
    }
    a {
        text-decoration: none;
    }
    .logo {
        position: absolute;
        left: 0;
    }
    .hidden-box {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 32px;
        right: -26px;
        padding: 0 20px 10px 20px;
        text-align: center;
        background-color: $blue-2;
    }
    .hidden-box li {
        margin-right: 0;
    }
    .select-button:after{
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid $white;
        position: absolute;
        top: 40%;
        right: -15px;
        content: "";
        z-index: 98;
    }

</style>
