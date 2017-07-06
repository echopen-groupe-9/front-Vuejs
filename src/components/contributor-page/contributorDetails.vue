<template>
    <article class="details-contributor">

        <header class="details-contributor-header">
            <div class="main-wrapper">
                <h1>Maker</h1>
                <p>Avez-vous l’esprit D.I.Y?</p>

                <div>
                    <h2>Votre rôle</h2>
                    <p>Que vous soyez bricolo du dimanche ,  amateur ou militant, si vous avez l’âme d’un Maker et que vous  êtes  motivés par le fait de réaliser avec nous des prototypes qui changeront les pratiques de la médecine aujourd’hui et demain. Vous êtes içi au bon endroit!</p>
                </div>

                <div>
                    <h2>Votre mission:</h2>
                    <p>Nous aider à emmener Echopen toujours plus loin.</p>
                </div>
            </div>
        </header>

        <section class="participate-section">
            <div class="main-wrapper">
                <div class="participate-wrapper">
                    <div class="participate-content">
                        <h2 class="section-subtitle title">Comment <span class="section-subtitle-span">participer ?</span></h2>
                        <p class="text">Avec son application universelle, la sonde S1 d'échopen offre un support simple pour plus de précision et pour un diagnostic plus rapide.</p>
                    </div>
                    <div class="slack-block">
                        <div class="slack-block-content">
                            <h3 class="slack-title title-small">Rejoignez la communauté sur slack.</h3>
                            <p class="slack-paragraph text-2">Nous voulons aussi entendre votre avis. Communiquez autour d’idées et de concepts avec les autres contributeurs. </p>
                            <a href="http://slack.echopen.org/" target="_blank">Rejoindre le slack</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section v-if="contributorType == 'maker'">
            <div class="main-wrapper">
                <h2 class="section-subtitle title"><span class="section-subtitle-span">Github issues</span></h2>
                <ul class="github-cards-list">
                    <github-cards></github-cards>
                </ul>
            </div>
        </section>

        <section>
            <div class="main-wrapper">
                <h2 class="section-subtitle title">Hackaton & <span class="section-subtitle-span">Rencontres</span></h2>
                <hackaton-cards></hackaton-cards>
            </div>
        </section>

    </article>
</template>

<script>
    /* Import Components */
    import githubCardsList from './githubCardsList.vue'
    import hackatonCardsList from './hackatonCardsList.vue'    

    export default {
        name: 'Details',
        components: {
            'github-cards': githubCardsList,
            'hackaton-cards': hackatonCardsList
        },
        computed: {
            contributorType () {
                return this.$route.params.contributor
            }
        }
    }
</script>

<style lang="scss">
    @import '../../core.scss';

    .details-contributor-header{
        padding: 7rem 0;
        color: $white;
        text-align: left;
        background-color: #4784FF;
    }

    .participate-section{
        text-align: left;
    }

    .participate-wrapper{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .participate-content{
        width: 100%;
        max-width: 450px;
        padding-right: 40px;
    }

    .slack-title{
        margin-bottom: 20px;
    }
    .slack-paragraph{
        margin-bottom: 25px;
    }

    .slack-block{
        position: relative;
        width: 100%;
        max-width:650px;
        text-align: left;
        background-color: $grey-light2;
        overflow: hidden;

        &:after{
            content:'';
             position: absolute;
             right: 5px;
             bottom: 0;
             width: 50%;
             max-width: 250px;
             height: 100%;
            background-image: url('../../assets/images/slack.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center bottom;
         }
    }

    .slack-block-content{
        width: 50%;
        padding: 40px 0 40px 40px;
    }

    .github-cards-list{
        text-align: left;
    }

</style>
