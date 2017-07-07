<template>
  <div class="slide">
    <div class="left-content" id='0'>
      <h3 class="title-top-title text-small">{{slide.title}}</h3>
      <h2 class="slider-title text-contributor">{{slide.subtitle}}</h2>
      <p class="slider-text text white">{{slide.content}}</p>
    </div>
    <div class="right-content">
      <p class="slider-date text-2">{{slide.date}}</p>
      <a class="slider-link" href="javascript:;">
      <span class="text">
        Participer
      </span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Slide',
    props: ['slide'],
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped="">
    @import '../../../core.scss';
  .event-section {
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

  .fade-enter-active {
    position: absolute;
    margin: 65%;
    left: 15%;
  }

  .fade-enter {
    position: absolute;
  }
</style>
