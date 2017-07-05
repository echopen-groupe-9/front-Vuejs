<template>
    <div id="home">
       <landing></landing>
        <review></review>
        <result></result>
        <contribution></contribution>
        <trust></trust>
    </div>
</template>

<script>
    import landingSection from './home-landing-section/landing-section.vue'
    import reviewSection from './home-review-section/review-section.vue'
    import resultSection from './home-results-section/results-section.vue'
    import contributionSection from './home-contribution-section/contribution-section.vue'
    import trustSection from './home-trust-section/trustSection.vue'

    export default {
        name: 'Home',
        data () {
            return {
                msg: 'Je suis la Home',
                title: 'Let’s make something good',
            }
        },
        components: {
            'landing': landingSection,
            'review': reviewSection,
            'result': resultSection,
            'contribution': contributionSection,
            'trust': trustSection
        }
    }
</script>

<style lang="scss">
 .Home-presentation_title {
     position: relative;
     color: #32325D;
     &:after {
         content: attr(title);
         display: block;
         font-weight: bold;
     }
 }
</style>
