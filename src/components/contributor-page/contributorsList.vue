<template>
    <section class="section">
        <div class="main-wrapper">
            <h1 class="section-title title">Devenez<span class="section-title-alt section-title-alt-white">contributeur</span></h1>
            <p class="section-introduction text">Participez à votre façon, à la création de la sonde S1 d’Echopen en rejoignant notre communauté. Choisissez votre profil et apportez votre pierre à l’édifice.</p>
            <ul class="cards-list">
                <li class="cards-list-item">
                    <router-link class="cards-list-link" :to="{name: 'Contributor', params: {contributor: 'brainer'}}">
                        <h2 class="title-contributor">Brainer</h2>
                        <p class="cards-subtitle text-contributor">Pense le produit</p>
                        <p class="cards-content text-small">Le bon candidat est capable d’avoir une vue d’ensemble du projet, en particulier sur la facette scientifique, pour trouver des solutions...</p>
                        <span class="cards-background">&nbsp;</span>
                    </router-link>
                </li>
                <li class="cards-list-item">
                    <router-link class="cards-list-link" :to="{name: 'Contributor', params: {contributor: 'builder'}}">
                        <h2 class="title-contributor">Builder</h2>
                        <p class="cards-subtitle text-contributor">Développe et conçoit</p>
                        <p class="cards-content text-small">Votre mission est de participer aux développement des logiciels Open Source qui contribuent à la conception opérationnelle de l'appareil...</p>
                        <span class="cards-background">&nbsp;</span>
                    </router-link>
                </li>
                <li class="cards-list-item">
                    <router-link class="cards-list-link" :to="{name: 'Contributor', params: {contributor: 'maker'}}">
                        <h2 class="title-contributor">Maker</h2>
                        <p class="cards-subtitle text-contributor">Les petites mains</p>
                        <p class="cards-content text-small">Que vous soyez bricolo du dimanche , amateur ou militant, si vous avez l’âme d’un Maker et que vous êtes motivé...</p>
                        <span class="cards-background">&nbsp;</span>
                    </router-link>
                </li>
                <li class="cards-list-item">
                    <router-link class="cards-list-link" :to="{name: 'Contributor', params: {contributor: 'linker'}}">
                        <h2 class="title-contributor">Linker</h2>
                        <p class="cards-subtitle text-contributor">Transmets le message</p>
                        <p class="cards-content text-small">Être linker, c’est rejoindre une communauté, il est l'acteur fondamental de notre organisation et il adhère à un ensemble de valeurs...</p>
                        <span class="cards-background">&nbsp;</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">

    @import '~styles/_plugins/sass-mq/_mq';
    @import '~styles/generics/variable.scss';
@import '~styles/generics/mixin.scss';

    .cards-list{

        position: relative;
        display: block;
        max-width: 960px;
        margin: 0 auto 50px;

        @include mq($from: 'desktop'){
            height: 450px;
        }
    }

    .cards-list-item{
        position: relative;
        padding: 40px 30px;
        margin-bottom: 10px;
        z-index: 0;

        &:before{
            content: "";
             position: absolute;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             opacity: 0;
            background-color: #374657;
            z-index: -1;
            transition: opacity .4s ease-out;
         }

        &:nth-child(1){
             background-color: #00ADFE;
            &:after{
                 background-image: url("/static/images/brainer_card_bg.png")
             }
        }

        &:nth-child(2){
             background-color: #4E76F2;
            &:after{
                 background-image: url("/static/images/builder_card_bg.png")
             }
        }

        &:nth-child(3){
             background-color: #444CB2;
            &:after{
                 background-image: url("/static/images/maker_card_bg.png")
             }
        }

        &:nth-child(4){
             background-color: #3740B0;
            &:after{
                 background-image: url("/static/images/linker_card_bg.png");
             }
        }


        @include mq($from: 'mobile'){
            display: inline-block;
            vertical-align: top;
            width: calc(50% - 10px);
            text-align: center;

            &:after{
                 content:'';
                 position: absolute;
                 bottom: 0;
                 left: 0;
                 width: 100%;
                 height: 100%;
                 background-size: contain;
                 background-repeat: no-repeat;
                 background-position: bottom;
                 z-index: -2;
             }

            &:nth-child(odd){
                 margin-right: 5px;
             }
            &:nth-child(even){
                 margin-left: 5px;
             }

            &:hover{
                &:before{
                     opacity: 1;
                     transition: opacity .4s ease-out;
                 }
            }
        }

        @include mq($from: 'desktop'){
            position: absolute;
            top: 0;
            width: 270px;
            height: 360px;

            &:nth-child(odd){
                 margin-right: 0;
             }
            &:nth-child(even){
                 margin-left: 0;
             }

            &:nth-child(1){
                left: 0;
            }
            &:nth-child(2){
                 left: 24%;
                 margin-top: 30px;
             }
            &:nth-child(3){
                 right: 24%;
                 margin-top: 60px;
            }
            &:nth-child(4){
                 right: 0;
                 margin-top: 90px;
            }

            &:hover{

                .cards-content{
                    opacity: 1;
                    transform: translateY(0);
                    transition: opacity .4s ease-out, transform .4s ease-out;
                }
            }
        }
    }

    @include mq($from: 'desktop'){
        .cards-content{
            opacity: 0;
            transform: translateY(20px);
            transition: opacity .3s ease-out, transform .3s ease-out;
        }
    }

    .cards-subtitle{
        padding-bottom: 20px;
    }

    .cards-list-link{
        display: block;
        width: 100%;
        height: 100%;
        color: #FFFFFF;
        text-align: left;
        text-decoration: none;
    }
</style>
