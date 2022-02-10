/* Form Handling */
let submitBtn = document.getElementById('submitButton');
let userEmail = document.getElementById('userEmail');
let userPassWord = document.getElementById('userPassword');
submitBtn.addEventListener('click', checkValid);
submitBtn.addEventListener('click', userInfo);

/* Form Validation */

// show warning

function checkValid() {
    if(userEmail.value == '') {
        document.getElementById('email_warning').style.display = 'inline-block';
    }
    if(userPassWord.value == '') {
        document.getElementById('password_warning').style.display = 'inline-block';
    }
}

// Remove the warning

userEmail.addEventListener('keyup', function() {
    document.getElementById('email_warning').style.display = 'none';
});

userPassWord.addEventListener('keyup', function() {
    document.getElementById('password_warning').style.display = 'none';
});

/* User Information */

function userInfo() {
    let email = userEmail.value;
    let passWord = userPassWord.value;
    if (email == 'nurmoin05@gmail.com' && passWord == '100504248668420123.') {
        window.location.href = 'bank.html';
    } else {
        document.getElementById('user_warning').style.display = 'inline-block';
    }
    document.getElementById('userEmail').value = '';
    document.getElementById('userPassword').value = '';
}