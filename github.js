/**
 * GitHub Finder
 * @version 1.0
 */
class Github{
    constructor() {
        this.client_id = '2ea202242781b69ed739';
        this.client_secret = '3e3baa4f4e02b8f373fbd3240f95faf075fec01b';
    }

    async getUser(user){
        let profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        // let profileResponse = await fetch(`https://api.github.com/users/${user}`);

        let profile = await profileResponse.json();

        return {
            profile
        };

    }
    
}