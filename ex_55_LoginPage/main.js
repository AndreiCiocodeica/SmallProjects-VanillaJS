const submitForm = document.getElementById('submit-form');
const userName = document.getElementById('user-name');
const password = document.getElementById('password');

submitForm.addEventListener('submit', () => {
    if (userName.value == '') {
        alert('fill user name');
    }
    else if (password.value == '') {
        alert('fill password');
    }
    else {
        alert('Login successful!');
    }
});