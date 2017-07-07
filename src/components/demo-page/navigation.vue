<template>
  <div class='demo__navigation dp-flex'>
    <ul class='flex-column dp-flex navigation__list'>
      <li class='navigation__section' v-for='(section, index) in sections' :class='section.img.visible ? "active" : ""'>
        <div class="title text-right flex-1-child">
          <h3>{{index}}</h3>
          <p class='text'>{{section.description.title}}</p>
        </div>
      </li>
    </ul>
    <div class="progress">
      <div class="progress-bar bg-blue-2 hidden visible-desktop" :style='{height: percent + "%"}'></div>
      <div class="progress-bar bg-blue-2 hidden-desktop" :style='{width: (percent * 1.3) + "%"}'></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['sections', 'percent'],
    name: 'navigation',
    data () {
      return {

      }
    }
  }
</script>

<style lang='scss'>
  @import '../../core.scss';

  .progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    z-index: 50;
    @include mq($from: 'desktop') {
      position: static;
      width: auto;
      height: auto;
    }

    .progress-bar {
      width: 0%;
      height: 2px;
      @include mq($from: 'desktop') {
        width: 1px;
        height: 0%;
      }
    }
  }


  .navigation__list {
    width: 200px;
  }

  .navigation__section {
    position: relative;
    padding: 10px 0;
    color: $grey-light;
    display: none;
    @include mq($from: 'desktop') {
      display: block;
    }
    .title {
      transition: all 0.3s;
      color: $grey-light;
      padding: 0 20px 0 0;
    }
    &:after {
      content: '';
      position: absolute;
      right: -1px;
      top: 0;
      width: 2px;
      height: 100%;
      background: white;
      opacity: 1;
      z-index: 100;
    }
    &.active {
      .title {
        color: $blue-2;
      }
      &:after {
        opacity: 0;
        transition: all 0.3s;
      };
    }
  }
</style>
