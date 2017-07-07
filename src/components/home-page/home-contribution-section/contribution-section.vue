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

        &_list {
            display: flex;
            flex-flow: row nowrap;
            height: 800px;

            & .Home-contribution_item {
                background: url(../../../assets/images/bg-contributor-1.png) no-repeat;
                background-size: cover;
                flex: 1;
                position: relative;

                &:last-child {
                    background: url(../../../assets/images/bg-contributor-2.png) no-repeat;
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
