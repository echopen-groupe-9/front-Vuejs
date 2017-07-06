<template>
    <li class="github__card">
        <div class="github__card__title__wrapper">
            <h3 class="github__card__title"><a :href="repo.repoUrl" target="_blank">{{repo.repoName}}</a></h3>
        </div>
        <ul class="github__issues__list">
            <li class="github__issues__list__item text" v-for="issue in repo.issue">
                <a class="issue__link" :href="issue.html_url" target="_blank">
                    <h4 class="issue__title">{{issue.title}}</h4>
                    <span class="issue__date text-small">Créé le {{ date(issue.created_at) }}</span>
                    <span class="issue__user text-small">{{ issue.user.login }}</span>
                </a>
            </li>
        </ul>
        <a class="repo_link text" :href="repo.issuesUrl" target="_blank"> +Voir plus d'issues</a>
    </li>
</template>

<script>
    /* Import Lib */
    import moment from 'moment'

    export default {
        props: ['repo'],
        methods:{
            date: function (date) {
                return moment(date).format('L');
            }
        }
    }
</script>

<style lang="scss">

    @import '../../core.scss';

    .github__card {
        display: block;
        text-align: left;
        border-radius: 16px;
        background-color: $grey-light2;
    }

    @include mq($from:'tablet'){
        .github__card {
            display: inline-block;
            vertical-align: top;
            border: 10px solid $white;
            vertical-align: top;
            width: 50%;
        }
    }

    @include mq($from:'desktop'){
        .github__card {
            width: 33.33%;
        }
    }

    .github__card__title{
        @include font('Lato', 700);
        font-size: 24px;
        line-height: 34px;
        letter-spacing: 2;
        padding: 30px;
        color: $white;
        
        a{
            text-decoration: none;
            color: $white;
        }
        &__wrapper{
             border-top-left-radius: 6px 6px;
             border-top-right-radius: 6px 6px;
             border-bottom-right-radius: 0;
             border-bottom-left-radius: 0;
             background-color: $blue-4;
         }
    }

    .github__issues__list__item{
        display: block;
    }

    .issue__link{
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        padding: 30px;
        text-decoration: none;
        color: $blue;
        transition: background-color .4s ease-out;
        &:hover{
            background-color: lighten($grey-light2, 10%);
            transition: background-color .4s ease-out;
        }
        
        &:after{
            content:'';
            display: block;
            position: absolute;
            bottom: 0;
            left:50%;
            width: 80%;
            height: 2px;
            background-color: darken($grey-light2, 5%);
            transform: translateX(-50%);
        }
    }

    .issue__title{
        text-transform: capitalize;
        margin-bottom: 20px;
    }

    .issue__user,
    .issue__date{
        position: relative;
        display: block;
        color: $blue;
        padding-left: 20px;
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
        &.text-small{
            color: $blue;
        }
    }

    .issue__date{
        &:before{
            background-image:url('../../assets/images/icons/calendar.svg');
        }
    }

    .issue__user{
        &:before{
            background-image:url('../../assets/images/icons/user.svg');
        }
    }

    .repo_link{
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-decoration: none;
        color: $blue;
        padding: 20px;
        transition: background-color .4s ease-out;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 6px 6px;
        border-bottom-left-radius: 6px 6px;
        &:hover{
            background-color: lighten($turquoise, 10%);
            transition: background-color .4s ease-out;
        }
    }
</style>
