<template>
    <section class="Home-presentation">
        <div class="Home-presentation_holder">
            <h1 class="Home-presentation_title" title="together">{{title}}</h1>
            <p class="Home-presentation_desc"> {{desc}}</p>
            <a href="/#" class="app-link Home-presentation_link"></a>
        </div>
        <div class="Home-presentation_holder">
            <img src="http://lorempixel.com/400/200/technics" alt="voici le stetographe"
                 class="Home-presentation_image">
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
    .Home-presentation_title {
        position: relative;
        color: #32325D;
        font-size: 64px;
        &:after {
            content: attr(title);
            display: block;
            font-weight: bold;
        }
    }
</style>
