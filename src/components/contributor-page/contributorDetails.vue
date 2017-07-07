<template>
    <article class="details-contributor" :class="title">
        <div class="details-contributor-header-wrapper">
            <div class="main-wrapper">
                <header class="details-contributor-header">
                    <h1 class="details-contributor-title title-contributor">{{filteredByPage.type}}</h1>
                    <p class="details-contributor-baseline text-contributor">{{filteredByPage.content.baseline}}</p>

                    <div class="details-contributor-introduction">
                        <h2 class="text bold">Votre rôle</h2>
                        <p class="text">{{filteredByPage.content.role}}</p>
                    </div>

                    <div class="details-contributor-introduction">
                        <h2 class="text bold">Votre mission:</h2>
                        <p class="text">{{filteredByPage.content.mission}}</p>
                    </div>
                </header>
                <router-link class="back-link text" :to="{name: 'Home'}">Retour</router-link>
            </div>
        </div>

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
                            <a class="btn_link btn_link_blue" href="http://slack.echopen.org/" target="_blank">Rejoindre le slack</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="github-section" v-if="filteredByPage.type == 'maker'">
            <div class="main-wrapper">
                <h2 class="section-subtitle title"><span class="section-subtitle-span">Github issues</span></h2>
                <ul class="github-cards-list">
                    <github-cards></github-cards>
                </ul>
            </div>
        </section>

        <section class="hackaton-section">
            <div class="main-wrapper">
                <h2 class="section-subtitle title">Hackaton & <span class="section-subtitle-span">Rencontres</span></h2>
                <hackaton-cards></hackaton-cards>
            </div>
        </section>

    </article>
</template>

<script>
    /* Import Datas */
    import contributors from '../../datas/contributors'

    /* Import Components */
    import githubCardsList from './githubCardsList.vue'
    import hackatonCardsList from './hackatonCardsList.vue'

    export default {
        name: 'Details',
        data () {
            return {
                datas: contributors,
                title: this.$route.params.contributor
            }
        },
        components: {
            'github-cards': githubCardsList,
            'hackaton-cards': hackatonCardsList
        },
        computed: {
            contributorType () {
                return this.$route.params.contributor
            },
            filteredByPage() {
                return this.datas.contributorsDatas.filter(contributor => {
                    return contributor.type === this.$route.params.contributor;
                })[0]
            }
        }
    }
</script>

<style lang="scss">
    @import '../../core.scss';

    .Contributor{
        padding: 0;
        .nav{
            display: none;
        }
    }

    .details-contributor-header-wrapper{
        padding: 70px 0;
        color: $white;
        text-align: left;
        background-size: cover;
        background-position: center;
        background-color: #4784FF;

        .linker &{
            background-image: url('../../assets/images/linker-bg.jpg');
        }

        .maker &{
            background-image: url('../../assets/images/maker-bg.jpg');
        }

        .brainer &{
            background-image: url('../../assets/images/brainer-bg.jpg');
        }

        .builder &{
            background-image: url('../../assets/images/builder-bg.jpg');
        }
        .main-wrapper{
            position: relative;
        }
    }

    .details-contributor-header{
        width: 100%;
        max-width: 500px;
    }

    .back-link{
        position: absolute;
        right: 1rem;
        top: 0;
        text-decoration: none;
        color: $white;

    &:before{
         content:'';
         display: inline-block;
         vertical-align: middle;
         margin-right: 10px;
         width: 10px;
         height: 16px;
         background-image: url('../../assets/images/icons/arrow-back.svg');
         background-size: contain;
         background-repeat: no-repeat;
     }
    }

    .details-contributor-introduction{
        margin-bottom: 20px;
    }

    .details-contributor-title{
        margin-bottom: 30px;
        text-transform: uppercase;
    }

    .details-contributor-baseline{
        margin-bottom: 20px;
    }

    .participate-section{
        text-align: left;
    }

    .participate-wrapper{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 40px;
    }

    .participate-content{
        width: 100%;
        max-width: 450px;
        padding-right: 40px;
        padding-bottom: 40px;
    }

    .slack-title{
        margin-bottom: 20px;
        max-width: 50%;
    }
    .slack-paragraph{
        margin-bottom: 25px;
        max-width: 50%;
    }

    .slack-block{
        position: relative;
        width: 100%;
        max-width:650px;
        text-align: left;
        overflow: hidden;
    }

    .slack-block-content{
        position: relative;
        width: 100%;
        padding: 40px 0 40px 40px;
        display: block;
        height: auto;
        background-color: $grey-light2;

    &:before{
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

    .github-section{
        margin-top: 40px;
    }

    .github-cards-list{
        text-align: left;
    }

    .hackaton-section{
        padding-top: 40px;
        padding-bottom: 40px;
    }

</style>
