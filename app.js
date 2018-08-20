/**
 * GitHub Finder
 * @version 1.0
 */

// Init
let github = new Github();
let ui = new Ui();

 // Search input
let searchUser = document.getElementById('searchUser');
 
// Search User
searchUser.addEventListener('keyup', (e)=>{
    // Get input text
    let userText = e.target.value;
    if (userText !== '') {
        // console.log(userText);
        // Make http call
        github.getUser(userText) // returns Promise
            .then(data => {
                // console.log(data);
                if (data.profile.messge == 'Not Found'){
                    // Show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    //Show pofile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            }
        );
    } else {
        // Clear profile
        ui.clearProfile();
    }
});