<template>
    <section class="event-section">
      <div class="previous">&nbsp;</div>
      <div class="slide">
        <div class="left-content">
          <h3 class="title-top-title text-small">Prochain Evenement</h3>
          <h2 class="slider-title text-contributor">CAPMed chez echopen</h2>
          <p class="slider-text text white">Définition du besoin médical pour la sonde echopen</p>
        </div>
        <div class="right-content">
          <p class="slider-date text-2">Samedi 18 Juin</p>
          <a class="slider-link" href="javascript:;">
          <span class="text">
            Participer
          </span>
          </a>
        </div>
      </div>
      <div class="next">&nbsp;</div>
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

<style lang="scss" scoped="">
    @import '../../../core.scss';
  .event-section {
    width:100%;
    min-height: 250px;
    background-color: #1F2C46;
    padding: 65px 75px;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .previous{
      padding: 10px;
      cursor: pointer;
      position: relative;
      &:before{
        content: '';
        width: 15px;
        height: 3px;
        background-color: $white;
        transform: rotate(135deg);
        position: absolute;
        top: 10px;
        left: 0;
      }
      &:after{
        content: '';
        height: 3px;
        width: 15px;
        background-color: $white;
        transform: rotate(-135deg);
        position: absolute;
        top: 19px;
        left: 0;
      }
    }
    .next{
      padding: 10px;
      cursor: pointer;
      position: relative;
      &:before{
        content: '';
        width: 15px;
        height: 3px;
        background-color: $white;
        transform: rotate(45deg);
        position: absolute;
        top: 10px;
        left: 0;
      }
      &:after{
        content: '';
        height: 3px;
        width: 15px;
        background-color: $white;
        transform: rotate(-45deg);
        position: absolute;
        top: 19px;
        left: 0;
      }
    }
    .slide {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;

      .left-content{
        max-width: 455px;
        display: inline-block;

        .title-top-title{
          text-transform: uppercase;
        }
        .slider-title{
          @include font('Lato', 700);
        }
      }
      .right-content{
        display: inline-block;
        padding-left: 100px;
        .slider-date{
          color: $white;
          text-transform: uppercase;
          letter-spacing: 2px;
          display: inline-block;
          margin-right: 40px;
          position: relative;
          &:before {
            content: '';
            width: 38px;
            height: 82px;
            background: url('../../../assets/images/cal_icon.png') center;
            background-size: contain;
            position: absolute;
            top: -27px;
            left: -60px;
          }
        }
        .slider-link{
          display: inline-block;
          min-width: 185px;
          height: 50px;
          line-height: 54px;
          border-radius: 25px;
          background-color: $white;
          text-align: center;
          .text {
            color: $blue-2;
          }
        }
      }
    }
  }
</style>
