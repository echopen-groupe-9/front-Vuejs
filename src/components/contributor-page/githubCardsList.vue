<template>
    <ul v-if="repos">
        <li class="github__card" v-for="repo in filterRepos">
            {{repo.repoName}}
            <ul class="github__issues__list">
                <li class="github__issues__list__item" v-for="issue in repo.issue">
                    {{issue.title}}
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
    /* Import Lib */
    import axios from 'axios'

    /* Import Config*/
    import githubApi from '../../config/githubApi.js';

    export default {
        data () {
            return {
                pending: true,
                repos: []
            }
        },
        computed: {
            filterRepos(){
                let filterArr = [];
                this.repos.forEach((repo) =>{
                    /* Limit to 5 */
                    if (repo.issue.length > 5){
                        /* If there are more than 5 issues create another block to see github page*/
                        let issueObj = {
                            title: "Voir plus d'issues",
                            url: `${repo.repoUrl}/issues`
                        };
                        /* Splice */
                        repo.issue = repo.issue.splice(0, 5);
                        /* Push fake block*/
                        repo.issue.push(issueObj);
                    }
                    /* Push in filter array*/
                    filterArr.push(repo);
                });
                return filterArr;
            }
        },
        methods: {
            getGithubCards(){

                let gitApi = new githubApi();

                return axios.all([gitApi.getRepos(), gitApi.promises])
                        .then(() =>{
                            this.$data.repos = gitApi.issues;
                            this.$data.pending = false;
                        })
            }
        },
        mounted(){
            this.getGithubCards();
        }
    }
</script>

<style lang="scss">
    .github__card {
        display: block;
        padding-bottom:3rem;
        text-align: left;
    }

    .github__issues__list__item{
        display: block;
    }
</style>
