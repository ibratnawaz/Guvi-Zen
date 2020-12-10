async function register() {
    try {
        document.getElementById('btn-register').disabled = true;
        let data = {
            first_name: document.getElementById('first_name').value.trim(),
            last_name: document.getElementById('last_name').value.trim(),
            email: document.getElementById('email').value.trim(),
            password: document.getElementById('password').value.trim(),
            confirm_password: document.getElementById('confirm_password').value.trim()
        }
        let apiRegister = await fetch('http://localhost:3000/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        });

        let response = await apiRegister.json();
        if (response.status == "rejected") {
            showAlert(response.message, 'danger');
            document.getElementById('email-error').innerHTML = `${response.message}`;
            document.getElementById('password-error').innerHTML = ``;
        } else if (response.status == "failed") {
            showAlert(response.message, 'danger');
            document.getElementById('password-error').innerHTML = `${response.message}`;
            document.getElementById('email-error').innerHTML = '';
            document.getElementById('password').value = '';
            document.getElementById('confirm_password').value = '';
        } else {
            document.getElementById('email-error').innerHTML = '';
            document.getElementById('password-error').innerHTML = ``;
            showAlert(response.message, 'success', true);
        }
        document.getElementById('btn-register').disabled = false;
    } catch (error) {
        console.log(error);
    }
}

function showAlert(message, status, next = '') {
    let alertBox = document.getElementById('alert-message');
    alertBox.removeAttribute('class');
    alertBox.style.display = 'block';
    alertBox.setAttribute('class', `alert alert-${status}`);
    alertBox.innerHTML = message;
    if (next) {
        setTimeout(() => {
            alertBox.innerHTML = 'You will now be redirect to login page.';
            redirectToLogin();
        }, 3500);
    }
}

function redirectToLogin() {
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}