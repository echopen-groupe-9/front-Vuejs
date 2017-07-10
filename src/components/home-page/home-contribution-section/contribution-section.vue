<template>
    <section class="Home-contribution">
        <h2 class="Home-contribution_title section-subtitle white title">
            Devenez <span class="section-white section-subtitle-span white">donateurs</span><br>
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
                desc: 'Soutenir le projet Echopen c’est soutenir le progrès de la médecine à travers le monde. Rejoignez les membres qui nous aident à rendre ce projet réel.'
            }
        },
        methods: {}
    }
</script>

<style lang="scss">

    @import '~styles/_plugins/sass-mq/_mq';
    @import '~styles/generics/variable.scss';
@import '~styles/generics/mixin.scss';

    .Home-contribution {
        width: 100%;

        &_list {
            display: flex;
            flex-flow: row nowrap;
            height: 800px;

            & .Home-contribution_item {
                background: url(/static/images/bg-contributor-1.png) no-repeat;
                background-size: cover;
                flex: 1;
                position: relative;

                &:last-child {
                    background: url(/static/images/bg-contributor-2.png) no-repeat;
                    background-size: cover;
                    margin-left: 20px;
                }

                .Home-contribution_item--text {
                    position: absolute;
                    left: 10%;
                    bottom: 10%;
                }
            }
        }
        .Home-contribution_link {
            text-decoration: none;
            color: $grey-dark;
        }
    }
</style>
