<template>
    <section class="Home-actu">
        <div class="main-wrapper">
            <h2 class="Home-actu_title section-subtitle title">
                Nos dernières <span class="section-subtitle-span">actualités</span>
            </h2>
            <ul class="Home-actu_list">
                <li class="Home-actu_item">
                    <img class="Home-actu_img" src="../../../assets/images/bg_donateur.jpg">
                    <div class="Home-actu_contain">
                        <h3 class="Home-actu_title text">Nulla vitae elit libero, a pharetra augue</h3>
                        <p class="Home-actu_text text-2">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non
                            metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                            lacinia odio semnec elit. Nulla vitae elit libero, a pharetra augue.
                        </p><br>
                        <a href="#">Lire la suite</a>
                    </div>
                </li>
                <li class="Home-actu_item">
                    <img class="Home-actu_img" src="../../../assets/images/bg_donateur.jpg">
                    <div class="Home-actu_contain">
                        <h3 class="Home-actu_title text">Nulla vitae elit libero, a pharetra augue</h3>
                        <p class="Home-actu_text text-2">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non
                            metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                            lacinia odio semnec elit. Nulla vitae elit libero, a pharetra augue.
                        </p><br>
                        <a href="#">Lire la suite</a>
                    </div>
                </li>
                <li class="Home-actu_item">
                    <img class="Home-actu_img" src="../../../assets/images/bg_donateur.jpg">
                    <div class="Home-actu_contain">
                        <h3 class="Home-actu_title text">Nulla vitae elit libero, a pharetra augue</h3>
                        <p class="Home-actu_text text-2">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non
                            metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                            lacinia odio semnec elit. Nulla vitae elit libero, a pharetra augue.
                        </p><br>
                        <a href="#">Lire la suite</a>
                    </div>
                </li>
            </ul><br>
            <button class="Home-actu_button">Voir plus</button>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'actu',
        data () {
            return {
            }
        }
    }
</script>

<style lang="scss">
    @import '../../../core.scss';

    .Home-actu {
        width: 100%;
        margin: 50px auto 70px auto;
    }
    .Home-actu_list {
        display: flex;
        // flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        text-align: left;

        @include mq($from: 'desktop') {
          flex-flow: row;
        }
    }
    .Home-actu_item {
        width: 100%;
        border: 1px solid #fff;
        box-shadow: 0px 7px 21px 0px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        position: relative;
        z-index: 1;
        margin: 0 0 40px 0;
        @include mq($from: 'tablet') {
          width: 40%;
        }
        @include mq($from: 'desktop') {
          width: 30%;
        }
    }
    .Home-actu_contain {
        padding: 0 20px 20px 20px;

        a {
            display: block;
            width: 30%;
            text-align: center;
            color: $blue-2;
            text-decoration: underline;
            font-size: 10px;
            font-family: "Lato";
            text-transform: none;
            margin: 0 auto;
        }
    }
    .Home-actu_text {
        color: $grey-light;
    }
    .Home-actu_img {
        width: 100%;
    }
    .Home-actu_button {
      background-image: linear-gradient(to right, #00c6fb 0%, #005bea 100%);
      font-size: 14px;
      color: $white;
      border-radius: 100px;
      border-color: $blue-2;
      border-bottom: $blue-2;
      border-right: $blue-2;
      border-left: $blue-2;
      border-top: $blue-2;
      text-transform: uppercase;
      outline: none;
      cursor: pointer;
      padding: 10px 30px;
    }
</style>
