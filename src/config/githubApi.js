import axios from 'axios'

/**
 * Github API
 */
export default class githubApi {

  constructor() {
    this.api_url = 'https://api.github.com';
    this.account = 'echopen';
    this.clientID = '435b9b854d95487faf6c';
    this.clientSecret = '63568b716efc90ffdac4dec972c518f5bf59181e';
    this.repos = [];
    this.issues = [];
    this.promises = [];
  }


  getRepos(){
    return axios.get(`${this.api_url}/users/${this.account}/repos?client_id=${this.clientID}&client_secret=${this.clientSecret}`)
      .then((response) => {
        this.repos = response.data;
        this.getIssues();
      })
      .catch((error) =>{
        console.log(error);
      });
  }



  getIssues(){
    this.repos.forEach((repo) => {
      this.promises.push(
        axios.get(`${this.api_url}/repos/${this.account}/${repo.name}/issues?client_id=${this.clientID}&client_secret=${this.clientSecret}&state=open`)
          .then((response) => {
            let issueObj = {
              repoName: repo.name,
              issue: response.data
            };

            if (issueObj.issue.length) {
              this.issues.push(issueObj);
            }

          })
          .catch((error) =>{
            console.log(error);
          })
      );
    });
  }
}


