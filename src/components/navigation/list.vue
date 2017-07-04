<template>
    <nav class="nav">
        <ul>
            <li>
                <router-link :to="{name: 'Home'}">Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'Contributor', params: {contributor: 'maker'}}">Makers</router-link>
            </li>
            <li>
                <router-link :to="{name: 'Contributor', params: {contributor: 'linker'}}">Linkers</router-link>
            </li>
            <li>
                <router-link :to="{name: 'User', params: {user: 'renan'}}">User</router-link>
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
