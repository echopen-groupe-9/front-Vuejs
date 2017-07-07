<template>
    <section class="Home-review main-wrapper">
        <div class="Home-review_carousel">
            <ul class="Home-review_carousel--list_tabs">
                <li class="Home-review_carousel--tabs text-2" v-for="(review, index) in reviews"
                    v-on:click="checkIndex(tabsIndex =  index)" :class="tabsIndex === index ? 'is-active' : ''">
                    {{review.tab}}
                </li>
            </ul>
            <div class="Home-review_holder">
                <div class="Home-review_text" v-for="(review, index) in reviews"
                     :class="tabsIndex != index ? 'is-out' : 'is-active'">
                    <h2 class="Home-review_title section-subtitle title">{{review.title}}<span
                            class="section-subtitle-span">{{review.span}}</span></h2>
                    <p class="Home-review_desc text">{{review.desc}}<span class="Home-review_desc--tiny"></span></p>
                    <div class="Home-review--author text-2">{{review.quote}}</div>
                </div>
                <div class="Home-review_holder--image">
                    <img src="../../../assets/images/phone-graph.png" alt="" class="Home-review_image phone--image">
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
                tabsIndex: 0,
                descIndex: 0,
                reviews: [
                    {
                        tab: 'Highly Manipulable',
                        title: 'Highly ',
                        span: 'Manipulate',
                        desc: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.',
                        quote: 'Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Ju vitae elit libero, a pharetra augue. '
                    },
                    {
                        tab: 'Highly Noobish',
                        title: 'Highly ',
                        span: 'Noobish',
                        desc: 'Vivamus sgittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.',
                        quote: 'Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Ju vitae elit libero, a pharetra augue. '
                    }
                ]
            }
        },
        methods: {
            checkIndex: function (index) {
                console.log(index)
                this.tabIndex = this.index
                this.descIndex = this.index
            }
        }
    }
</script>


<style lang="scss">
    @import '../../../core.scss';

    .Home-review_carousel {
        width: 100%;
        margin: 0 auto;
        .Home-review_holder {
            width: 100%;
            height: 800px;
            border-radius: 25px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 10px 5%;
            margin: 0 auto;
            box-shadow: 0 6px 25px 0 rgba(0, 0, 0, .1);

            .Home-review_text {
                display: flex;
                flex-flow: column wrap;
                flex: 1;
                text-align: left;
                align-items: flex-end;

                .Home-review--author {
                    margin-top: 10%;
                    width: 60%;
                    position: relative;

                    &:before {
                        content: '"';
                        font-size: 90px;
                        color: $blue-2;
                        position: absolute;
                        left: -40px;
                        top: 20px;
                    }
                }

                &.is-out {
                    visibility: hidden;
                    opacity: 0;
                    transition: visibility 0s, opacity 1s ease;
                    position: absolute;
                }
                &.is-active {
                    visibility: visible;
                    opacity: 1;
                    transition: visibility 0s, opacity 1s ease;
                }

                .Home-review_title {
                    .section-subtitle-span {
                        font-weight: bold;
                    }
                }
            }
            .Home-review_holder--image {
                flex: 1;
                position: relative;

                .phone--image {
                    width: 80%;

                }
            }
        }
        .Home-review_carousel--tabs {
            margin: 0 1%;
            position: relative;
            transition: ease .3s;

            &:hover {
                cursor: pointer;
            }
            opacity: .8;
            top: 40px;

            &:after {
                content: '';
                position: absolute;
                background: $blue-2;
                bottom: -10px;
                left: calc(50% - 2.5px);
                display: block;
                border-radius: 50%;
                transition: ease .3s;
                opacity: 0;
                width: 0;
                height: 0;
            }

            &:hover {
                cursor: pointer;
            }
            &.is-active {
                font-weight: bold;

                &:after {
                    width: 6px;
                    height: 6px;
                    opacity: 1;
                }
            }
        }
    }
</style>


