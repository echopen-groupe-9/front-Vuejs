<template>
    <section class="Home-presentation">
        <div class="Home-presentation_wrapper main-wrapper">
            <div class="Home-presentation_holder section-introduction">
                <h1 class="Home-presentation_title section-title title">Améliorons le monde <span class="section-title-alt section-title-alt-span">ensemble</span></h1>
                <p class="Home-presentation_desc section-introduction text">Le premier échostéthoscope  connecté accessible à tous.</p>
                <router-link :to="{name: 'Demo'}" class='link Home-presentation_link'>Voir la demo</router-link>
                <!-- <a href="/#" class="link Home-presentation_link">Voir la demo</a> -->
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
            }
        }
    }
</script>

<style lang="scss">
    @import '../../../core';

    .Home-presentation {
        @include font('Lato', normal);
        color: #FFF;
        background: url(/static/images/home-bg.png) no-repeat;
        background-size: cover;
        height: 780px;
        position: relative;

        .Home-presentation_title {
            color: #FFF;
            font-weight: lighter;
            text-align: left;

            &:after {
                content: attr(title);
                display: block;
                letter-spacing: 0;
            }
        }

        .Home-presentation_wrapper{
            position: relative;
            min-height: 100vh;
        }

        .Home-presentation_holder {
            position: absolute;
            left:  0 10px;
            top: 50%;
            text-align: left;
            transform: translateY(-50%);
        }
        .Home-presentation_link {
            background: #FFFFFF;
            padding: 10px 30px;
            font-size: 14px;
            color: $grey;
            font-weight: bold;
            border-radius: 100px;
            text-transform: uppercase;
        }
        .Home-presentation_desc {
            margin-bottom: 45px;
        }
    }
</style>
