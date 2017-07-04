<template>
    <nav class="nav">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/makers">Contributeurs</router-link>
            </li>
            <li>
                <router-link to="/user/elvis">User</router-link>
            </li>
            <li>
                <router-link to="/gre/gre">404</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'navigationList',
        data () {
            return {}
        }
    }
</script>

<style lang="scss">

</style>
