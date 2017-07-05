<template>
    <ul>
        <li>
            <router-link :to="{name: 'Contributor.Details', params: {contributor: 'brainer'}}">Brainer</router-link>
        </li>
        <li>
            <router-link :to="{name: 'Contributor.Details', params: {contributor: 'builder'}}">Builder</router-link>
        </li>
        <li>
            <router-link :to="{name: 'Contributor.Details', params: {contributor: 'maker'}}">Maker</router-link>
        </li>
        <li>
            <router-link :to="{name: 'Contributor.Details', params: {contributor: 'linker'}}">Linker</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">

</style>
