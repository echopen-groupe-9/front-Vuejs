<template>
    <div id="contributor">
        <contributors-list></contributors-list>
        <transition name="transition-page">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    /* Import Components */
    import contributorsList from './contributorsList.vue'

    export default {
        name: 'Contributor',
        components: {
            'contributors-list': contributorsList
        }
    }
</script>

<style lang="scss">

</style>
