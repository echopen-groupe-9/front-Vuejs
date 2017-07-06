<template>
    <div id="home">
        <landing></landing>
        <event></event>
        <review></review>
        <result></result>
        <contributors></contributors>
        <trust></trust>
        <actu></actu>
    </div>
</template>

<script>
    import landingSection from './home-landing-section/landing-section.vue'
    import reviewSection from './home-review-section/review-section.vue'
    import resultSection from './home-results-section/results-section.vue'
    import Contributors from './contributors.vue'
    import trustSection from './home-trust-section/trustSection.vue'
    import eventSection from './home-event-section/eventSection.vue'
    import actuSection from './home-actu-section/actu-section.vue'

    export default {
        name: 'Home',
        data () {
            return {

            }
        },
        components: {
            'landing': landingSection,
            'review': reviewSection,
            'result': resultSection,
            'trust': trustSection,
            'contributors' : Contributors,
            'event': eventSection,
            'actu': actuSection
        }
    }
</script>

<style lang="scss">

    .Home-title {
        font-size: 64px;
    }
</style>
