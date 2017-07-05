<template>
    <section class="Home-review">
        <div class="Home-review_carousel">
            <div class="Home-review_holder"  v-for="review in reviews">
                <div class="Home-review_text">
                    <h2 class="Home-review_title">{{review.title}}</h2>
                    <p class="Home-review_desc">{{review.desc}}<span class="Home-review_desc--tiny"></span></p>
                    <div class="Home-review--author"></div>
                </div>
                <div class="Home-review_holder--image">
                    <img src="http://lorempixel.com/400/200/technics" alt="" class="Home-review_image">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                reviews: [
                    {
                        title: 'Highly Manipulable',
                        desc: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.'
                    },
                    {
                        title: 'Highly Noobish',
                        desc: 'Vivamus sgittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.'
                    }
                ]
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss">

    .Home-review_holder {
        margin: 0 5vw;
    }
</style>
