<template>
    <div id="home">
       <landing></landing>
        <review></review>
        <result></result>
        <contribution></contribution>
        <trust></trust>
        <actu></actu>
    </div>
</template>

<script>
    import landingSection from './home-landing-section/landing-section.vue'
    import reviewSection from './home-review-section/review-section.vue'
    import resultSection from './home-results-section/results-section.vue'
    import contributionSection from './home-contribution-section/contribution-section.vue'
    import trustSection from './home-trust-section/trustSection.vue'
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
            'contribution': contributionSection,
            'trust': trustSection,
            'actu': actuSection,
        }
    }
</script>

<style lang="scss">

    section {
        margin-bottom: 70px;
    }
    .Home-title {
        font-size: 64px;
    }
</style>
