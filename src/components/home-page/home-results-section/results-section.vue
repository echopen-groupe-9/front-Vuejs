<template>
    <section class="Home-result">
        <div class="main-wrapper">
            <h2 class="Home-result_title section-subtitle title">
                Nos chiffres <span class="section-subtitle-span">clés</span>
            </h2>
            <ul class="Home-result_list">
                <li class="Home-result_item" v-for="result in results">
                    <p class="Home-result_item--nmb title">{{result.number}}</p>
                    <p class="Home-result_item--desc text">{{result.desc}}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                results: [
                    {
                        number: '350',
                        desc: 'Contributions'
                    },
                    {
                        number: '14',
                        desc: 'Hackathon'
                    },
                    {
                        number: '178',
                        desc: 'Donateurs'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .Home-result {
        width: 100%;
        margin: 50px auto 70px auto;
    }
    .Home-result_list {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        text-align: center;
    }
    .Home-result_item {
        max-width: 20%;
        position: relative;
        z-index: 1;


        .Home-result_item--nmb {
            margin-top: 30px;
            font-size: 90px;
            position: relative;

            &:before {
                content: url(../../../assets/images/bg-result-1.png);
                position: absolute;
                display: block;
                left:calc(35%);
                bottom:-20px;
                z-index: -1;
            }
        }
        .Home-result_item--desc {
            margin-top: 20px;
        }
        &:nth-child(2) {
            .Home-result_item--nmb:before {
                content: url(../../../assets/images/bg-result-2.png);
            }
        }
        &:nth-child(3) {
            .Home-result_item--nmb:before {
                content: url(../../../assets/images/bg-result-3.png);
            }
        }
    }
</style>
