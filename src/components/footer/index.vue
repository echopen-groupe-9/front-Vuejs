<template>
  <div class="footer">
    <ul class="footer-nav">
      <li class="footer-element">
        <h3 class="text-small white">
          Developers
        </h3>
        <ul class="links">
          <li class="link text-small white">Documentation</li>
          <li class="link text-small white">Open Source</li>
        </ul>
      </li>
      <li class="footer-element">
        <h3 class="text-small white">
          EchoPen
        </h3>
        <ul class="links">
          <li class="link text-small white">Documentation</li>
          <li class="link text-small white">Open Source</li>
        </ul>
      </li>
      <li class="footer-element">
        <h3 class="text-small white">
          Ressources
        </h3>
        <ul class="links">
          <li class="link text-small white">Documentation</li>
          <li class="link text-small white">Open Source</li>
        </ul>
      </li>
      <li class="footer-element">
        <h3 class="text-small white">
          Stay in touch
        </h3>
        <ul class="links">
          <li class="link text-small white">Documentation</li>
          <li class="link text-small white">Open Source</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {
        msg: 'je suis le footer'
      }
    }
  }
</script>

<style lang="scss">
  @import '../../core.scss';

  .footer {
    padding-top: 125px;
    background-color: $purple;
    position: relative;
    &:before {
      content: '';
      width: 100%;
      height:125px;
      background: url('../../assets/images/footer-shape.png') no-repeat right center;
      background-size: cover;
    }

    .footer-nav {
      display: flex;
      max-width: 660px;
      margin: 0 auto;
      justify-content: space-around;
      .footer-element {
        min-width: 145px;
        text-align: left;
        h3 {
          text-transform: uppercase;
          padding: 5px 0;
          border-bottom: 1px solid $white;
        }
        .links {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          padding-top: 25px;
          .link{

          }
        }
      }
    }
  }
</style>
