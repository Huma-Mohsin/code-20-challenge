// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
// Explain & TIP: This is like a self-building lego set. Once you start it, it builds a user profile by itself and can tell you about the user.
//solution.
//with my own understanding of question.
function user_profile(name, age) {
    var person_information = {
        //creating an object of person information
        name: name,
        age: age,
    };
    return person_information;
}
var info = user_profile("HUMA MOHSIN", 32);
console.log(info);
//with help of outsource understandings.
//To create a self-running user profile in TypeScript, we can use an immediately invoked function expression (IIFE) to automatically set up the profile when the script runs.
//A  self-running user profile is a concept where a user's profile is automatically set up and displayed without the need for any explicit user input or function calls. It's like a pre-configured script that, when executed, initializes the user's profile and presents it without requiring any further interaction.
//1- create a function that defines user profile only.
(function () {
    //IIFE
    var user_profile = {
        //making an object
        name: "HUMA MOHSIN",
        age: 32,
    };
    //function to display user profile
    function displayUserProfile() {
        console.log("USER;S NAME:", user_profile.name);
        console.log("USER'S AGE:", user_profile.age);
    }
    //calling function
    displayUserProfile();
})(); //ends IIFE FUNCTION IMMEDIATELY AS IT INVOKES.
//Author- HUMA MOHSIN
