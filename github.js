/**
 * GitHub Finder
 * @version 1.0
 */
class Github{
    constructor() {
        this.client_id = '2ea202242781b69ed739';
        this.client_secret = '5abcaca1ae908a13245bba0e2748ad819324dfda';
        this.repos_count = 10;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){  // return Promise
        let profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        let repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        let profile = await profileResponse.json();
        let repos = await repoResponse.json();

        return {profile, repos};
    }
}