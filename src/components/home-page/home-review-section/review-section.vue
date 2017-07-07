<template>
    <section class="Home-review main-wrapper">
        <div class="Home-review_carousel">
            <ul class="Home-review_carousel--list_tabs">
                <li class="Home-review_carousel--tabs text-2" v-on:click="checkIndex(0)" :class="tabsIndex === 0 ? 'is-active' : ''">
                    Une présentation
                </li>
                <li class="Home-review_carousel--tabs text-2" v-on:click="checkIndex(1)" :class="tabsIndex === 1 ? 'is-active' : ''">
                    Petit historique
                </li>
            </ul>
            <div class="">
                <div v-show='tabsIndex == 0' class='Home-review_holder'>
                    <div class="Home-review_text" >
                        <h2 class="Home-review_title section-subtitle title">La sonde<span
                                class="section-subtitle-span">echopen</span></h2>
                        <p class="Home-review_desc text">48 heures pour la connaître<span class="Home-review_desc--tiny"></span></p>
                        <div class="Home-review--author text-2">
                            <p class="Home-review--author_quote text-small grey">Dr Lips</p>
                            <span class="Home-review--author_author text-small grey">C'est un vrai petit bijou,
                                <small class="Home-review--author_author--detail text-small grey">j'ai apris à l'utiliser en deux jours</small>
                            </span>
                        </div>
                    </div>
                    <div class="Home-review_holder--image">
                        <img src="../../../assets/images/android_phone_1.png" alt="" class="Home-review_image phone--image">
                    </div>
                </div>
                <div class="carousel Home-review_holder" v-show='tabsIndex === 1'>
                    <div class="slide-carousel" v-for='(slide, index) in slides' :class='index == slideIndex ? "active" : ""'>
                        <div class="progress-bar-review"></div>
                        <div class="content dp-flex">
                            <h3 class='content__title title'>
                                {{slide.date}}<br>
                                <span class='text'>{{slide.subtitleDate}}</span>
                            </h3>
                            <p class='content__description text'>{{slide.subtitle}}</p>
                        </div>
                    </div>
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
                slideIndex: 0,
                reviews: [
                    {
                        tab: 'Highly Manipulable',
                        title: 'Highly ',
                        span: 'Manipulate',
                        desc: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.',
                        quote: {
                            author: 'Martin',
                            detail: 'Étudiant en médecine',
                            quote: 'Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Ju vitae elit libero, a pharetra augue. '
                        }
                    },
                    {
                        tab: 'Highly Noobish',
                        title: 'Highly ',
                        span: 'Noobish',
                        desc: 'Vivamus sgittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.',
                        quote: {
                            author: 'Martin',
                            detail: 'Étudiant en médecine',
                            quote: 'Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Ju vitae elit libero, a pharetra augue. '
                        }
                    }
                ],
                slides: [
                  {
                    title: 'Prochain Evenement',
                    subtitle: 'L’étude des bruits générés par le corps humain est déjà décrite dans un papyrus de l’Egypte ancienne. Ce document décrit les signes audibles de la maladie dans le corps.',
                    content: 'Comment utiliser la sonde Echopen en toute simplicité.',
                    date: '17ème',
                    subtitleDate: 'Siècle av J.C'
                  },
                  {
                    title: 'Prochain MeetUp',
                    subtitle: 'Par la suite, Hippocrate plaide pour le développement d’instruments destinés à améliorer la pratique médicale. Il secoue ses patients par les épaules afin d’écouter les sons générés par l’accumulation de fluides dans la poitrine.',
                    content: 'Définition du besoin médical pour la sonde echopen',
                    date: '350',
                    subtitleDate: 'avant J.C'
                  },
                  {
                    title: 'Prochain Evenement',
                    subtitle: 'Le célèbre médecin Ambroise Paré écrit “s’il y a des matières ou d’autres humeurs dans le thorax, on peut entendre un bruit de gargouillis similaire à celui d’une bouteille à moitié pleine”',
                    content: 'Comment récupérer les données transmises par la sonde.',
                    date: '16ème',
                    subtitleDate: 'Siècle'
                  },
                  {
                    title: 'Prochain Evenement',
                    subtitle: 'L’invention du stéthoscope doit aujourd’hui son existence au Docteur René Laënnec. Il est également à l’origine du tensiomètre créé peu de temps après le stéthoscope. Deux grandes inventions dans le développement de la recherche pour améliorer le diagnostic médical.',
                    content: 'Comment récupérer les données transmises par la sonde.',
                    date: '1816',
                    subtitleDate: ''
                  },
                  {
                    title: 'Prochain Evenement',
                    subtitle: 'Le célèbre médecin Ambroise Paré écrit “s’il y a des matières ou d’autres humeurs dans le thorax, on peut entendre un bruit de gargouillis similaire à celui d’une bouteille à moitié pleine”',
                    content: 'Le monde médical connaît un réel succès concernant le stéthoscope électronique. Il est utilisé par presque tous les professionnels du corps médical.',
                    date: '20ème',
                    subtitleDate: 'siècle'
                  },
                  {
                    title: 'Prochain Evenement',
                    subtitle: 'Echopen vise à développer le premier Echo Stethoscope connecté accessible à tous, destiné aux professionnels de la santé et développé grâce à une communauté multidisplinaire qui partage la même vision.',
                    content: 'Comment récupérer les données transmises par la sonde.',
                    date: 'De nos jours',
                    subtitleDate: ''
                  }

                ]
            }
        },
        methods: {
            checkIndex: function (index) {
                this.tabsIndex = index
            },
            nextSlides: function () {
                if (this.slideIndex === (this.slides.length - 1)) {
                  this.slideIndex = 0;
                } else {
                  this.slideIndex ++;
                }
            }
        },
        mounted () {
            setInterval(() => {
                this.nextSlides();
            }, 5000)
        }
    }
</script>


<style lang="scss">
    @import '../../../core.scss';

    .slide-carousel {
        min-height: 100%;
        min-width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        opacity: 0;
        transition: opacity .4s;
        &.active {
            min-height: 100%;
            position: relative;
            opacity: 1;
            .progress-bar-review {
                &:after {
                    width: 100%;
                }
            }
        }
    }

    .progress-bar-review {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        height: 4px;
        &:after {
            content: '';
            transition: width 10s linear;
            width: 0%;
            height: 4px;
            position: absolute;
            top: 0;
            left: 0;
            background: $blue-2;
        }
    }

    .is-out {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 1s ease;
        position: absolute;
    }
    .is-active {
        visibility: visible;
        opacity: 1;
        transition: visibility 0s, opacity 1s ease;
    }

    .Home-review_carousel {
        width: 100%;
        margin: 0 auto;
        .Home-review_holder {
            width: 100%;
            border-radius: 25px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 15% 5%;
            margin: 0 auto;
            box-shadow: 0 6px 25px 0 rgba(0, 0, 0, .1);

            &.carousel {
                position: relative;
                display: flex;
                align-items: stretch;
                overflow: hidden;
                padding: 0;
                .content {
                    flex-direction: column;
                    min-height: 100%;
                    align-items: center;
                    justify-content: flex-start;
                    .content__title {
                        margin: 50px 0 0 0;
                    }

                    .content__title,
                    .content__description {
                        padding: 40px;
                        text-align: left;
                    }
                    @include mq($from: tablet){
                        flex-direction: row;
                        .content__title {
                            width: 40%;
                            margin: 0;
                        }

                        .content__description {
                            width: 60%;
                            font-size: 30px;
                            line-height: 39px;
                        }
                        .content__title,
                        .content__description {
                            padding: 60px;
                            text-align: center;
                        }
                    }
                }

            }

            @include mq($from: tablet){
                min-height: 800px;
                padding: 10px 5%;
            }

            .Home-review_text {
                display: flex;
                flex-flow: column wrap;
                flex: 1;
                text-align: left;
                align-items: flex-end;
                .Home-review--author {
                    margin-top: 10%;
                    width: 60%;

                    .Home-review--author_quote {
                        position: relative;

                        &:before {
                            content: '"';
                            font-size: 90px;
                            color: $blue-2;
                            position: absolute;
                            left: -40px;
                            top: 20px;
                        }

                        &:after {
                            content: '';
                            display: block;
                            position: absolute;
                            background: #E6E6E6;
                            height: 1px;
                            width: 100%;
                            bottom: -10px;
                            left: 0;
                        }

                    }

                    &_author {
                        opacity:.5;
                        margin-top: 45px;
                        display: block;
                        font-weight: bold;

                        &--detail {
                            display: block;
                            font-weight: bold;

                        }
                    }
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
                display: none;
                @include mq($from: tablet){
                    display: block;
                }

                .phone--image {
                    width: 80%;

                }
            }
        }
        .Home-review_carousel--list_tabs {
            position: relative;
            z-index: 2;
        }
        .Home-review_carousel--tabs {
            margin: 0 10px;
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


