<template>
    <section class="Home-presentation">
        <div class="Home-presentation_holder .main-wrapper">
            <h1 class="Home-presentation_title section-title title">{{title}}</h1>
            <p class="Home-presentation_desc .section-introduction"> {{desc}}</p>
<<<<<<< HEAD
            <a href="/#" class="link Home-presentation_link">Voir la demo</a>
=======
            <a href="/#" class="app-link Home-presentation_link"></a>
>>>>>>> [ADD:components/homepage] css for components
        </div>
    </section>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                title: 'Let’s make something good',
                desc: 'Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies ut id elit.'
            }
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
<<<<<<< HEAD
            padding: 10px 30px;
            font-size: 14px;
            color: $grey;
            font-weight: bold;
            border-radius: 100px;
            text-transform: uppercase;
        }
        .Home-presentation_desc {
            margin-bottom: 45px;
=======
            padding: 10px 20px;
            font-size: 14px;
            color: #000;
>>>>>>> [ADD:components/homepage] css for components
        }
    }
</style>
