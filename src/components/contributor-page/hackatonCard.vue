<template>
    <li class="hackaton-card">
        <span class="hackaton-cover" :style="{ 'background-image' : 'url(' + cover + ')' }">&nbsp;</span>    
        <h3 class="hackaton-card-title">Création d’une sonde</h3>
        <p class="text">Le lien entre l’ergonomie et la technologie.</p>
        <ul class="hackaton-tag-list text-small">
            <li>Builder</li>
            <li>Maker</li>
            <li>Brainer</li>
        </ul>
        <ul class="hackaton-infos-list text-small">
            <li class="hackaton-infos">
                <span class="hackaton-place">Paris</span>
                <span class="hackaton-date">01/08/17</span>
            </li>
            <li>
                <ul class="hackaton-infos-list hackaton-datas-list">
                    <li>
                        <span class="hackaton-data">32</span> participants
                    </li>
                    <li>
                        <span class="hackaton-data">20</span> jours restants
                    </li>
                </ul>
            </li>
            
        </ul>
    </li>
</template>

<script>
    /* Import Lib */
    import moment from 'moment'

    export default {
        data () {
            return {
                cover: "../src/assets/images/home-bg.png"
            }
        },
        methods:{
            date: function (date) {
                return moment(date).format('L');
            }
        }
    }
</script>

<style lang="scss">

    @import '../../core.scss';

    .hackaton-card{
        position: relative;
        width: 100%;
        padding: 30px 30px 20px;
        text-align: left;
        border: 10px solid $white;
        background-color: $grey-light2;
        &:before{
            content:'';
            display: block;
            width: 100%;
            height: 160px;
            margin-bottom: 30px;
        }
    }

    @include mq($from:'tablet'){
        .hackaton-card{
            width: 50%;
        }
    }

    @include mq($from:'desktop'){
        .hackaton-card{
            width: 33.33%;
        }
    }
    
    .hackaton-cover{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 190px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .hackaton-card-title{
        @include font('Lato', 300);
        font-size: 24px;
        line-height: 29px;
        color: $blue;
        margin-bottom: 10px;
    }

    .hackaton-tag-list{
        margin-top: 20px;
        margin-bottom: 30px;

        li{
            display: inline-block;
            vertical-align: top;
            padding: 6px 10px;
            color: $white;
            background-color: $blue-4;
            margin-right: 10px;
            margin-bottom: 10px;
            border-radius: 6px;
            text-transform: uppercase;
        }
    }

    .hackaton-infos-list{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-end;

        .hackaton-infos-list{
            justify-content: space-between;
        }

        li{
            position: relative;
            height: 100%;
            color: $blue;
            line-height: 1;
            padding-right: 20px;

             &:first-child{
                 padding-left: 0;
            }
            &:last-child{
                 padding-right: 0;
            }
        }

        span{
            display: block;
        }
    }

    .hackaton-infos{
        margin-bottom: 10px;
    }

    .hackaton-data{
        @include font('Lato', 700);
        font-size: 30px;
        line-height: 40px;
        color: $blue-4;
    }

    .hackaton-datas-list{
        margin-bottom: 10px;
    }

    .hackaton-place,
    .hackaton-date{
        &:before{
            content:'';
            display: inline-block;
            vertical-align: middle;
            width: 16px;
            height: 16px;
            margin-right: 10px; 
            background-repeat: no-repeat;
            background-size: contain;
        }
    }

    .hackaton-date{
        &:before{
            background-image:url('../../assets/images/icons/calendar.svg');
        }
    }

    .hackaton-place{
        padding-bottom: 10px;
        &:before{
            background-image:url('../../assets/images/icons/place.svg');
        }
    }
</style>
