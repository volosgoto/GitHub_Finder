/**
 * GitHub Finder
 * @version 1.0
 */

// Init
let github = new Github();

 // Search input
 let searchUser = document.getElementById('searchUser');
 
 // Search User
 searchUser.addEventListener('keyup', (e)=>{
    // Get input text
    let userText = e.target.value;
    if (userText !== '') {
        // console.log(userText);
        // Make http call
        github.getUser(userText)
            .then(data => {
                
                // console.log(data);
                               
                if (data.profile.messge == 'Not Found'){
                    // Show alert
                } else {
                    //Show pofile
                }

            }
        );
    } else {
        // Clear profile
    }
 });