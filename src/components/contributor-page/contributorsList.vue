<template>
    <section class="section">
        <div class="main-wrapper">
            <h1 class="section-title title">Let’s make <br>something good <span
                    class="section-title-alt">together</span></h1>
            <p class="section-introduction text">
                Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies ut id elit.</p>
            <ul class="cards-list">
                <li class="cards-list-item">
                    <router-link class="cards-list-link"
                                 :to="{name: 'Contributor.Details', params: {contributor: 'brainer'}}">
                        <h2 class="title-contributor">Brainer</h2>
                        <p class="cards-subtitle text-contributor">Risus Vulputate</p>
                        <p class="cards-content text-small">
                            Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies ut id elit. Nullam id dolor id nibh.</p>
                        <span class="cards-background">&nbsp;</span>
                    </router-link>
                </li>
                <li class="cards-list-item">
                    <router-link class="cards-list-link"
                                 :to="{name: 'Contributor.Details', params: {contributor: 'builder'}}">
                        <h2 class="title-contributor">Builder</h2>

                        <p class="cards-subtitle text-contributor">Risus Vulputate</p>
                        <p class="cards-content text-small">
                            Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies ut id elit. Nullam id dolor id nibh.</p>
                        <span class="cards-background">&nbsp;</span>
                    </router-link>
                </li>
                <li class="cards-list-item">
                    <router-link class="cards-list-link"
                                 :to="{name: 'Contributor.Details', params: {contributor: 'maker'}}">
                        <h2 class="title-contributor">Maker</h2>
                        <p class="cards-subtitle text-contributor">Risus Vulputate</p>
                        <p class="cards-content text-small">
                            Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies ut id elit. Nullam id dolor id nibh.</p>
                        <span class="cards-background">&nbsp;</span>
                    </router-link>
                </li>
                <li class="cards-list-item">
                    <router-link class="cards-list-link"
                                 :to="{name: 'Contributor.Details', params: {contributor: 'linker'}}">
                        <h2 class="title-contributor">Linker</h2>
                        <p class="cards-subtitle text-contributor">Risus Vulputate</p>
                        <p class="cards-content text-small">
                            Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies ut id elit. Nullam id dolor id nibh.</p>
                        <span class="cards-background">&nbsp;</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <section>
            <h1>Let’s make something good <span>together</span></h1>
            <ul class="cards-list">
                <li class="cards-list-item">
                    <router-link class="cards-list-link"
                                 :to="{name: 'Contributor.Details', params: {contributor: 'brainer'}}">
                        <h2>Brainer</h2>
                        <p>Risus Vulputate</p>
                        <p class="cards-content">
                            Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies ut id elit. Nullam id dolor id nibh.</p>
                        <span class="cards-background">&nbsp;</span>
                    </router-link>
                </li>
                <li class="cards-list-item">
                    <router-link class="cards-list-link"
                                 :to="{name: 'Contributor.Details', params: {contributor: 'builder'}}">
                        <h2>Builder</h2>
                        <p>Risus Vulputate</p>
                        <p class="cards-content">
                            Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies ut id elit. Nullam id dolor id nibh.</p>
                        <span class="cards-background">&nbsp;</span>
                    </router-link>
                </li>
                <li class="cards-list-item">
                    <router-link class="cards-list-link"
                                 :to="{name: 'Contributor.Details', params: {contributor: 'maker'}}">
                        <h2>Maker</h2>
                        <p>Risus Vulputate</p>
                        <p class="cards-content">
                            Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies ut id elit. Nullam id dolor id nibh.</p>
                        <span class="cards-background">&nbsp;</span>
                    </router-link>
                </li>
                <li class="cards-list-item">
                    <router-link class="cards-list-link"
                                 :to="{name: 'Contributor.Details', params: {contributor: 'linker'}}">
                        <h2>Linker</h2>
                        <p>Risus Vulputate</p>
                        <p class="cards-content">
                            Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies ut id elit. Nullam id dolor id nibh.</p>
                        <span class="cards-background">&nbsp;</span>
                    </router-link>
                </li>
            </ul>
        </section>
    </section>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    @import '../../core.scss';

<<<<<<< HEAD
    .cards-list {

    == == == = . cards-list {
        > > > > > > > [Feat:Contributors
    ] - Add style Contributors page position:relative;
        display: block;
        max-width: 960px;
        margin: 0 auto 50px;

        @include mq($from: 'desktop') {
            height: 450px;
        }
    }

        .cards-list-item {
            position: relative;
            .cards-list-item {

                position: absolute;
                top: 0;
                display: inline-block;
                vertical-align: top;
                width: 270px;
                height: 360px;
                padding: 40px 30px;
                margin-bottom: 10px;
                z-index: 0;

                &:before {
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

                &:after {
                    content: '';
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

                &:hover {
                    &:before {
                        opacity: 1;
                        transition: opacity .4s ease-out;
                    }

                    .cards-content {
                        opacity: 1;
                        transform: translateY(0);
                        transition: opacity .4s ease-out, transform .4s ease-out;
                    }
                }

                &:nth-child(1) {
                    left: 0;
                    background-color: #00ADFE;
                    &:after {
                        background-image: url("../../assets/images/brainer_card_bg.png")
                    }
                }

                &:nth-child(2) {
                    left: 24%;
                    margin-top: 30px;
                    background-color: #4E76F2;
                    &:after {
                        background-image: url("../../assets/images/builder_card_bg.png")
                    }
                }

                &:nth-child(3) {
                    right: 24%;
                    margin-top: 60px;
                    background-color: #444CB2;
                    &:after {
                        background-image: url("../../assets/images/maker_card_bg.png")
                    }
                }

                &:nth-child(4) {
                    right: 0;
                    margin-top: 90px;
                    background-color: #3740B0;
                    &:after {
                        background-image: url("../../assets/images/linker_card_bg.png");
                    }
                }

                @include mq($from: 'mobile') {
                    display: inline-block;
                    vertical-align: top;
                    width: calc(50% - 10px);
                    text-align: center;

                    &:after {
                        content: '';
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

                    &:nth-child(odd) {
                        margin-right: 5px;
                    }
                    &:nth-child(even) {
                        margin-left: 5px;
                    }

                    &:hover {
                        &:before {
                            opacity: 1;
                            transition: opacity .4s ease-out;
                        }
                    }
                }

                @include mq($from: 'desktop') {
                    position: absolute;
                    top: 0;
                    width: 270px;
                    height: 360px;

                    &:nth-child(odd) {
                        margin-right: 0;
                    }
                    &:nth-child(even) {
                        margin-left: 0;
                    }

                    &:nth-child(1) {
                        left: 0;
                    }
                    &:nth-child(2) {
                        left: 24%;
                        margin-top: 30px;
                    }
                    &:nth-child(3) {
                        right: 24%;
                        margin-top: 60px;
                    }
                    &:nth-child(4) {
                        right: 0;
                        margin-top: 90px;
                    }

                    &:hover {

                        .cards-content {
                            opacity: 1;
                            transform: translateY(0);
                            transition: opacity .4s ease-out, transform .4s ease-out;
                        }
                    }
                }
            }

            @include mq($from: 'desktop') {
                .cards-content {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity .3s ease-out, transform .3s ease-out;
                }
            }

            .cards-content {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity .3s ease-out, transform .3s ease-out;
            }

            .cards-list-link {
                display: block;
                width: 100%;
                height: 100%;
                color: #FFFFFF;
                text-align: left;
                text-decoration: none;
            }
        }
    }
</style>
