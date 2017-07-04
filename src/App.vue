<template>
    <div id="app">
        <navigation></navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    /* Import components*/
    import navigationList from './components/navigation/list.vue'
    import fadeInComponent from './assets/script/FadeInElem.js'

    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            'navigation': navigationList,
        },
        mounted: function () {
            fadeInComponent.FadeInElem.init()
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .js-isShown {
        animation: reveal 1s alternate;
    }

    @keyframes reveal {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
