<template>
    <section class="Home-contribution">
        <ul class="Home-contribution_list">
            <li class="Home-contribution_item" v-for="contribution in contributions">
                <a href="#" class="Home-contribution_link">
                    <div class="Home-contribution_item--text">
                        <h2 class="Home-contribution_item--title title">{{contribution.title}}</h2>
                        <p class="Home-contribution_item--desc text">{{contribution.desc}}</p>
                    </div>
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                contributions: [
                    {
                        title: 'Contributeur',
                        desc: 'Nulla vitae elit libero, a pharetra augue. '
                    },
                    {
                        title: 'Contributeur',
                        desc: 'Nulla vitae elit libero, a pharetra augue. '
                    }
                ]
            }
        },
        methods: {}
    }
</script>

<style lang="scss">
    @import '../../../core';

    .Home-contribution {
        width: 100%;

        &_list {
            display: flex;
            flex-flow: row nowrap;
            height: 800px;

            & .Home-contribution_item {
                background: url(../../../assets/images/bg-contributor-1.png) no-repeat;
                background-size: cover;
                margin-left: 20px;
                flex: 1;
                position: relative;

                &:last-child {
                    background: url(../../../assets/images/bg-contributor-2.png) no-repeat;
                    background-size: cover;
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
