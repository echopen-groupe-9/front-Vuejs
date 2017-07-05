<template>
    <nav class="nav">
        <ul class="navigation">
            <li class="logo">
                <router-link :to="{name: 'Home'}"><img src="../../assets/Logo.svg"></router-link>
            </li>
            <li>
                <router-link :to="{name: 'Home'}">Echopen et<br> vous</router-link>
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
            <select class="contributor">
                <option value="" disabled selected>Je suis :</option>
                <option>
                    <router-link :to="{name: 'Contributor', params: {contributor: 'maker'}}">Makers</router-link>
                </option>
                <option>
                    <router-link :to="{name: 'Contributor', params: {contributor: 'linker'}}">Linkers</router-link>
                </option>
            </select>
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
    .navigation {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .navigation li {
        margin-right: 30px;
    }
    a {
        text-decoration: none;
    }
    .logo {
        position: absolute;
        left: 0;
    }
    .contributor {
        width: 75px;
        height: 44px;
    }

</style>
