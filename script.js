function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');

    let isValid = true;

    // Name validation
    if (name === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    if (email === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = 'Invalid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Phone number validation
    if (phone === '') {
        phoneError.textContent = 'Phone number is required';
        isValid = false;
    } else if (!isValidPhone(phone)) {
        phoneError.textContent = 'Invalid phone number';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }
    //redirect to admin page if success
    if (isValid) {
        window.location.href = "admin.html";
    }
    return isValid;
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function register() {
    if (validateForm()) {
        window.location.href = "admin.html";
    }
}

function isValidPhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
}