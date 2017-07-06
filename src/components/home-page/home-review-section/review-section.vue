<template>
    <section class="Home-review main-wrapper">
        <ul class="Home-review_carousel">
            <li class="Home-review_holder" v-for="review in reviews">
                <div class="Home-review_text">
                    <h2 class="Home-review_title section-subtitle title">Highly <span class="section-subtitle-span">Manipulable</span></h2>
                    <p class="Home-review_desc text">{{review.desc}}<span class="Home-review_desc--tiny"></span></p>
                    <div class="Home-review--author"></div>
                </div>
                <div class="Home-review_holder--image">
                    <img src="../../../assets/images/phone-graph.png" alt="" class="Home-review_image phone--image">
                    <img src="../../../assets/images/echograpg-graph.png" alt="" class="Home-review_image echo--image">
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                reviews: [
                    {
                        desc: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.'
                    },
                    {
                        desc: 'Vivamus sgittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.'
                    }
                ]
            }
        },
        methods: {}
    }
</script>

<style lang="scss">
    .Home-review_carousel {
        width:100%;
        margin: 0 auto;
        .Home-review_holder {
            width: 100%;
            height: 800px;
            background: #FAFAFA;
            border-radius: 25px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 10px 5%;


            .Home-review_text {
                display: flex;
                flex-flow: column wrap;
                flex: 1;
                text-align: left;
            }
            .Home-review_holder--image {
                flex: 1;
                position: relative;

                .echo--image {
                    max-height: 180px;
                    max-width: 200px;
                    position: absolute;
                    bottom: -20%;
                    right: 0;
                }
            }
        }
    }
</style>
