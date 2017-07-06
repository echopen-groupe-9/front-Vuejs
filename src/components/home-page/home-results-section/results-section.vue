<template>
    <section class="Home-result">
        <h2 class="Home-result_title title">
            Nos chiffres clés
        </h2>
        <ul class="Home-result_list">
            <li class="Home-result_item" v-for="result in results">
                <p class="Home-result_item--nmb title">{{result.number}}</p>
                <p class="Home-result_item--desc text2">{{result.desc}}</p>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                results: [
                    {
                        number: '01',
                        desc: 'Nulla vitae elit libero, a pharetra augue. '
                    },
                    {
                        number: '02',
                        desc: 'Nulla vitae elit libero, a pharetra augue. '
                    },
                    {
                        number: '08',
                        desc: 'Nulla vitae elit libero, a pharetra augue. '
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .Home-result {
        width:80%;
        margin: 0 auto 70px auto;
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
