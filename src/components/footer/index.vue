<template>
  <div class="footer">
    <ul class="footer-nav">
      <li class="footer-element">
        <h3 class="text-small white bold">
          Developers
        </h3>
        <ul class="links">
          <li class="text-small white">
            <span class="link">
              Documentation
            </span>
          </li>
          <li class="text-small white">
            <span class="link">
              Open Source
            </span>
          </li>
        </ul>
      </li>
      <li class="footer-element">
        <h3 class="text-small white bold">
          EchoPen
        </h3>
        <ul class="links">
          <li class="text-small white">
            <span class="link">
              Histoire
            </span>
          </li>
          <li class="text-small white">
            <span class="link">
              Presse
            </span>
          </li>
        </ul>
      </li>
      <li class="footer-element">
        <h3 class="text-small white bold">
          Ressources
        </h3>
        <ul class="links">
          <li class="text-small white">
            <span class="link">
              Contact
            </span>
          </li>
        </ul>
      </li>
      <li class="footer-element">
        <h3 class="text-small white bold">
          Newsletter
        </h3>
        <ul class="links newsletter">
          <input type="email" placeholder="Your email adress" class="input">
          <button class="btn">Subscribe</button>
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

  @import '~styles/_plugins/sass-mq/_mq';
  @import '~styles/generics/variable.scss';
@import '~styles/generics/mixin.scss';

  .footer {
    padding: 60px 20px 130px 20px;
    background-color: $blue;

    .footer-nav {
      display: flex;
      max-width: 800px;
      margin: 0 auto;
      flex-wrap: wrap;
      justify-content: space-around;
      .footer-element {
        text-align: left;
        h3 {
          text-transform: uppercase;
          padding: 5px 0;
        }
        .links {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          padding-top: 10px;
          @include mq($from:'desktop'){
            padding-top: 25px;
          }
          &.newsletter {
            flex-direction: row;
            .input {
              @include font('Lato', 400);
              font-size: 14px;
              display: inline-block;
              border: none;
              height: 38px;
              line-height: 38px;
              max-width: 260px;
              background-color: $blue-3;
              border-radius: 4px;
              padding-left: 20px;
              outline: none;
              color: $white;

              &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                color: $grey-light;
              }
              &::-moz-placeholder { /* Firefox 19+ */
                color: $grey-light;
              }
              &:-ms-input-placeholder { /* IE 10+ */
                color: $grey-light;
              }
              &:-moz-placeholder { /* Firefox 18- */
                color: $grey-light;
              }
            }
            .btn {
              display: inline-block;
              @include font('Lato', 700);
              font-size: 14px;
              margin-left: 20px;
              width: 127px;
              height: 40px;
              color: $grey;
              background-color: $blue-dark;
              border: none;
              border-radius: 20px;
              outline: none;
              cursor: pointer;
              transition: color 500ms ease;
              transition: background 500ms ease;

              &:hover {
                color: $blue-dark;
                background-color: $grey;
                transition: color 500ms ease;
                transition: background 500ms ease;
              }
            }
          }
          .link{
            position: relative;
            display: inline-block;
            cursor: pointer;
            &:before {
              content: "";
              position: absolute;
              display: block;
              bottom: 2px;
              width: 100%;
              height: 1px;
              background-color: $white;
              transform: scaleX(0);
              transform-origin: 100% 50%;
              transition: transform .3s cubic-bezier(.39,.575,.565,1);
            }
            &:hover {
              &:before {
                transform-origin: 0 50%;
                transform: scaleX(1);
              }
            }
          }
        }
      }
    }
  }
</style>
