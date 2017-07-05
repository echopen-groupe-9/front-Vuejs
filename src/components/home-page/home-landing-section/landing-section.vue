<template>
    <section class="Home-presentation">
        <navigation></navigation>
        <div class="Home-presentation_holder .main-wrapper">
            <h1 class="Home-presentation_title section-title title">{{title}}</h1>
            <p class="Home-presentation_desc .section-introduction"> {{desc}}</p>
            <a href="/#" class="app-link Home-presentation_link"></a>
        </div>
    </section>
</template>

<script>
    import navigation from '../../navigation/list.vue'
    export default {
        name: 'home',
        data () {
            return {
                title: 'Let’s make something good',
                desc: 'Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies ut id elit.'
            }
        },
        components: {
            'navigation': navigation
        }
    }
</script>

<style lang="scss">
    @import '../../../core';

    .Home-presentation {
        @include font('Lato', normal);
        color: #FFF;
        background: url(../../../assets/images/home-bg.png) no-repeat;
        background-size: cover;
        height: 780px;
        position: relative;

        .Home-presentation_title {
            color: #FFF;
            font-weight: lighter;

            &:after {
                content: attr(title);
                display: block;
                letter-spacing: 0;
            }
        }

        .Home-presentation_holder {
            position: absolute;
            width: 40vw;
            left: 10vw;
            top: 30%;
        }
        .Home-presentation_link {
            background: #FFFFFF;
            padding: 10px 20px;
            font-size: 14px;
            color: #000;
        }
    }
</style>
