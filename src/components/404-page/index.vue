<template>
    <div id="pageNotFound">
        <h1 class="title">{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'pageNotFound',
        data () {
            return {
                msg: 'Je suis une 404'
            }
        }
    }
</script>

<style lang="scss">
    .title {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        font-weight: bold;
        margin-top: 60px;
    }
</style>
