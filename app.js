/* Form Handling */
let submitBtn = document.getElementById('submitButton');
let userEmail = document.getElementById('userEmail');
let userPassWord = document.getElementById('userPassword');
submitBtn.addEventListener('click', checkValid);

// show warning

function checkValid() {
    if(userEmail.value == '') {
        document.getElementById('email_warning').style.display = 'inline-block';
    }
    if(userPassWord.value == '') {
        document.getElementById('password_warning').style.display = 'inline-block';
    }
    document.getElementById('userEmail').value = '';
    document.getElementById('userPassword').value = '';
}

// Remove the warning

userEmail.addEventListener('keyup', function() {
    document.getElementById('email_warning').style.display = 'none';
});

userPassWord.addEventListener('keyup', function() {
    document.getElementById('password_warning').style.display = 'none';
});