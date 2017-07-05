<template>
    <section>
        <h1>Let’s make something good <span>together</span></h1>
        <ul class="cards-list">
            <li class="cards-list-item">
                <router-link class="cards-list-link" :to="{name: 'Contributor.Details', params: {contributor: 'brainer'}}">
                    <h2>Brainer</h2>
                    <p>Risus Vulputate</p>
                    <p class="cards-content">Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies ut id elit. Nullam id dolor id nibh.</p>
                    <span class="cards-background">&nbsp;</span>
                </router-link>
            </li>
            <li class="cards-list-item">
                <router-link class="cards-list-link" :to="{name: 'Contributor.Details', params: {contributor: 'builder'}}">
                    <h2>Builder</h2>
                    <p>Risus Vulputate</p>
                    <p class="cards-content">Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies ut id elit. Nullam id dolor id nibh.</p>
                    <span class="cards-background">&nbsp;</span>
                </router-link>
            </li>
            <li class="cards-list-item">
                <router-link class="cards-list-link" :to="{name: 'Contributor.Details', params: {contributor: 'maker'}}">
                    <h2>Maker</h2>
                    <p>Risus Vulputate</p>
                    <p class="cards-content">Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies ut id elit. Nullam id dolor id nibh.</p>
                    <span class="cards-background">&nbsp;</span>
                </router-link>
            </li>
            <li class="cards-list-item">
                <router-link class="cards-list-link" :to="{name: 'Contributor.Details', params: {contributor: 'linker'}}">
                    <h2>Linker</h2>
                    <p>Risus Vulputate</p>
                    <p class="cards-content">Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies ut id elit. Nullam id dolor id nibh.</p>
                    <span class="cards-background">&nbsp;</span>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">
    .cards-list{
        position: relative;
        display: block;
        height: 450px;
        max-width: 960px;
        margin: 0 auto;
    }

    .cards-list-item{
        position: absolute;
        top: 0;
        display: inline-block;
        vertical-align: top;
        width: 270px;
        height: 360px;
        padding: 40px 30px;
        margin: 0;
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

        &:hover{
            &:before{
                 opacity: 1;
                transition: opacity .4s ease-out;
             }

            .cards-content{
                opacity: 1;
                transform: translateY(0);
                transition: opacity .4s ease-out, transform .4s ease-out;
            }
         }

        &:nth-child(1){
             left: 0;
             background-color: #00ADFE;
            .cards-background{
                background-image: linear-gradient(to right, #3f8bef, rgba(62, 149, 237, 0.52));
                &:before{
                     background-image: url("../../assets/brainer_card_bg.png")
                 }
                &:after{
                     background-color: #29BEF0;
                 }
            }
        }

        &:nth-child(2){
             left: 24%;
             margin-top: 30px;
             background-color: #4E76F2;
            .cards-background{
                background-image: linear-gradient(to right, #3f8bef, rgba(62, 149, 237, 0.52));
                &:before{
                     background-image: url("../../assets/builder_card_bg.png")
                 }
                &:after{
                     background-color: #81E4D1;
                 }
            }
        }

        &:nth-child(3){
             right: 24%;
             margin-top: 60px;
             background-color: #444CB2;
            .cards-background{
                background-image: linear-gradient(to right, #4b76eb, rgba(82, 169, 229, 0.68));
                &:before{
                     background-image: url("../../assets/maker_card_bg.png")
                 }
                 &:after{
                    background-color: #6288FF;
                  }
            }
        }

        &:nth-child(4){
             right: 0;
             margin-top: 90px;
             background-color: #3740B0;
            .cards-background{
                background-image: linear-gradient(to right, #444cb2, #4978e5);
                &:before{
                     background-image: url("../../assets/linker_card_bg.png");
                     background-position: left bottom;
                     background-size: 75%;
                 }
                &:after{
                    background-color: #819DEE;
                 }
            }
        }
    }

    .cards-background{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 110px;
        z-index: -2;
        &:before{
             content:'';
             position: absolute;
             bottom: 110px;
             left:0;
             width: 100%;
             height: 100%;
             background-size: contain;
             background-repeat: no-repeat;
             background-position: bottom;
         }
        &:after{
            content: '';
            position: absolute;
             bottom: 0;
             right: 0;
             width: 25%;
             height: 100%;
        }
    }

    .cards-content{
        opacity: 0;
        transform: translateY(20px);
        transition: opacity .3s ease-out, transform .3s ease-out;
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
