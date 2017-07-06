<template>
    <ul v-if="repos">
        <github-card v-for="repo in filterRepos" :repo="repo" ></github-card>
    </ul>
</template>

<script>
    /* Import Lib */
    import axios from 'axios'

    /* Import Config*/
    import githubApi from '../../config/githubApi.js';

    /* Import Component */
    import githubCard from './githubCard.vue';

    export default {
        data () {
            return {
                pending: true,
                repos: []
            }
        },
        components: {
            'github-card' : githubCard
        },
        computed: {
            filterRepos(){
                let filterArr = [];
                this.repos.forEach((repo) =>{

                    /* Set repo URL*/
                    repo.issuesUrl = `${repo.repoUrl}/issues`;

                    /* Limit */
                    if (repo.issue.length > 2){
                        /* Splice */
                        repo.issue = repo.issue.splice(0, 2);
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

</style>
