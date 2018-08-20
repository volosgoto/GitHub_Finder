/**
 * GitHub Finder
 * @version 1.0
 */
class Github{
    constructor() {
        this.client_id = '2ea202242781b69ed739';
        this.client_secret = '3e3baa4f4e02b8f373fbd3240f95faf075fec01b';
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