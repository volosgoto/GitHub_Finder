/**
 * GitHub Finder
 * @version 1.0
 */

 // Search input
 let searchUser = document.getElementById('searchUser');
 
 // Search User
 searchUser.addEventListener('keyup', (e)=>{
    // Get input text
    let userText = e.target.value;
    if (userText !== '') {
        console.log(userText);
        
    }
 });