<template>
    <nav class="nav">
        <ul class="navigation text-small">
            <li class="logo">
                <router-link :to="{name: 'Home'}"><img src="../../assets/logo-echotech.jpg"></router-link>
            </li>
            <li>
                <router-link :to="{name: 'Home'}">Wiki</router-link>
            </li>
            <li>
                <router-link :to="{name: 'Contributor'}">Contributeurs</router-link>
            </li>
            <li>
                <router-link :to="{name: 'News'}">Actualités</router-link>
            </li>
            <li>
                <router-link :to="{name: 'Home'}">Documentation</router-link>
            </li>
            <li>
                <router-link :to="{name: 'Home'}">Contact</router-link>
            </li>
            <div class="select_box">
                <select class="contributor text-small">
                    <option value="" disabled selected>Je suis :</option>
                    <option>
                        <router-link :to="{name: 'Contributor', params: {contributor: 'maker'}}">Makers</router-link>
                    </option>
                    <option>
                        <router-link :to="{name: 'Contributor', params: {contributor: 'linker'}}">Linkers</router-link>
                    </option>
                </select>
            </div>
        </ul>
    </nav>
</template>

<script>
    export default {
        data () {
            return {}
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
    }
    .navigation {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .navigation li {
        margin-right: 30px;
        text-transform: uppercase;
    }
    a {
        text-decoration: none;
    }
    .logo {
        position: absolute;
        left: 0;
    }
    .select_box{
        width: 75px;
        height: 44px;
        background-color: $white;
        color: $blue-2;
        border: 1px solid $white;
        border-radius: 5px;
        -moz-appearance:none;
        -webkit-appearance: none;
        outline: none;
    }
    .select_box:after{
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid $blue-2;
        position: absolute;
        top: 40%;
        right: 5px;
        content: "";
        z-index: 98;
    }
    .select_box select{
        width: 75px;
        height: 40px;
        color: $blue-2;
        text-transform: uppercase;
        position: relative;
        border: none;
        outline: none;
        z-index: 99;
        background: none;
        -moz-appearance:none;
        -webkit-appearance: none;
    }


</style>
