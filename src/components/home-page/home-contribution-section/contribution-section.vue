<template>
    <section class="Home-contribution">
        <h2 class="Home-contribution_title section-subtitle white title">
            Devenez <span class="section-white section-subtitleWhite-span">donateurs</span><br>
            <p class="text">{{desc}}</p><br>
            <button class="Home-contribution-button">Participez</button>
        </h2>
    </section>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                desc: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio semnec elit. Nulla vitae elit libero, a pharetra augue.'
            }
        },
        methods: {}
    }
</script>

<style lang="scss">
    @import '../../../core.scss';

    .Home-contribution {
        width: 100%;
        background-image: url("../../../assets/images/bg_donateur.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        padding: 100px 180px;
    }
    .Home-contribution_title {
        color: $white;
    }
    .Home-contribution-button {
        background: $white;
        padding: 10px 30px;
        font-size: 14px;
        color: $blue-2;
        border-radius: 100px;
        border-color: white;
        border-bottom: white;
        border-right: white;
        text-transform: uppercase;
        outline: none;
        cursor: pointer;
    }
</style>
