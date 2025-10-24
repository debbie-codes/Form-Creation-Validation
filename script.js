// This is the waiting until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

    // the selection form and the feedback division
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Add Event Listener for the form submission
    form.addEventListener("submit", function(event) {
        // prevents the form from submitting to the server
        event.preventDefault();

        // Retrieval and Trimming of the User inputs
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // The initialization of the validation variables
        let isValid = true;
        const messages = [];

        // Username validation
        if(username.length < 3){
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // The Email Validation
        if(!email.includes("@") || !email.includes(".")){
            isValid = false;
            messages.push("Please enter a valid email address.")
        }

        // Password validation
        if(password.length < 8){
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Displaying the Feedback
        feedbackDiv.style.display = "block";

        if(isValid){
            feedbackDiv.textContent = "Registration Successful";
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.backgroundColor = "#d4edda";
        }else{
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = "#f8d7da";
        }
    });
});