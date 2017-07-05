<template>
    <nav class="nav">
        <ul>
            <li>
                <router-link :to="{name: 'Home'}">Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'Contributor'}">Contributeurs</router-link>
            </li>
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

</style>
