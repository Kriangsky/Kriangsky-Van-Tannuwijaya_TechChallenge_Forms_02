// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const male = document.getElementById('male');
// const female = document.getElementById('female');

// form.addEventListener('submit', (error) =>{
//     let message = [];
//     if(name.value === '' || name.value == null){
//         message.push("Field is required");
//     }
//     if(email.value === '' || email.value == null){
//         message.push("Field is required");
//     }
//     error.preventDefault();
// })

const form = document.getElementById('registration-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const male = document.getElementById('male');
const female = document.getElementById('female');
const errorDiv = document.getElementById('error');

form.addEventListener('submit', (event) => {
    let errorMessage = [];
    errorDiv.innerHTML = ''; // Clear previous errors

    // Check if name field is empty
    if (name.value.trim() === '') {
        errorMessage.push("Name field is required.");
    }

    // Check if email field is empty
    if (email.value.trim() === '') {
        errorMessage.push("Email field is required.");
    }

    // Check if gender radio button is not selected
    if (!male.checked && !female.checked) {
        errorMessage.push("Please select your gender.");
    }

    if (errorMessage.length > 0) {
        event.preventDefault(); // Prevent form submission
        errorDiv.innerHTML = errorMessage.join('<br>'); // Display error messages
    } else {
        // If no errors, allow form submission and redirect to success.html
    }
});
