function validateFirstName() {
    var firstname = document.getElementById('First-Name').value;
    var firstnameError = document.getElementById('firstname-error');

    if (firstname.trim() === '') {
        firstnameError.textContent = 'First Name is required';
        return false;
    } else {
        firstnameError.innerHTML = '';
        return true;
    }
}

function validateLastName() {
    var lastname = document.getElementById('Last-Name').value;
    var lastnameError = document.getElementById('lastname-error');

    if (lastname.trim() === '') {
        lastnameError.textContent = 'Last Name is required';
        return false;
    } else {
        lastnameError.innerHTML = '';
        return true;
    }
}
function validateEmailId() {
    var email = document.getElementById('EmailId').value;
    var emailError = document.getElementById('Emailid-error');

    if (email.trim() === '') {
        emailError.textContent = 'Email is required';
        return false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = 'Invalid email format';
        return false;
    } else {
        emailError.innerHTML = '';
        return true;
    }
}
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function validatePassword() {
    var password = document.getElementById('Password').value;
    var passwordError = document.getElementById('Password-error');

    // Regular expressions for strong password criteria
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var numberRegex = /[0-9]/;
    var specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    // Check if password meets all criteria
    if (password.trim() === '') {
        passwordError.textContent = 'Password is required';
        return false;
    } else if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
        return false;
    } else if (!uppercaseRegex.test(password)) {
        passwordError.textContent = 'Password must contain at least one uppercase letter';
        return false;
    } else if (!lowercaseRegex.test(password)) {
        passwordError.textContent = 'Password must contain at least one lowercase letter';
        return false;
    } else if (!numberRegex.test(password)) {
        passwordError.textContent = 'Password must contain at least one number';
        return false;
    } else if (!specialCharRegex.test(password)) {
        passwordError.textContent = 'Password must contain at least one special character';
        return false;
    } else {
        passwordError.innerHTML = '';
        return true;
    }
}

function validateConfirmPassword() {
    var confirmPassword = document.getElementById('Confirm-Password').value;
    var confirmPasswordError = document.getElementById('ConfirmPassword-error');
    var password = document.getElementById('Password').value;

    if (confirmPassword.trim() === '') {
        confirmPasswordError.textContent = 'Confirm Password is required';
        return false;
    } else if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match';
        return false;
    } else {
        confirmPasswordError.innerHTML = '';
        return true;
    }
}

function validateForm(event) {
    event.preventDefault(); 
   
    var isFirstNameValid = validateFirstName();
    var isLastNameValid = validateLastName();
    var isEmailValid = validateEmailId();
    var isPasswordValid = validatePassword();
    var isConfirmPasswordValid = validateConfirmPassword();

  
    if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
       
        var successMessage = document.getElementById('success-message');
        successMessage.textContent = 'Successfully Submitted';
        successMessage.style.color = 'green';

        var submitError = document.getElementById('submit-error');
        submitError.textContent = '';

      
        document.getElementById('First-Name').value = '';
        document.getElementById('Last-Name').value = '';
        document.getElementById('EmailId').value = '';
        document.getElementById('Password').value = '';
        document.getElementById('Confirm-Password').value = '';
    } else {
        var submitError = document.getElementById('submit-error');
        submitError.textContent = 'Please fix the errors above.';

        var successMessage = document.getElementById('success-message');
        successMessage.textContent = '';
    }
}
