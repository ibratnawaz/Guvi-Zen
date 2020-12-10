async function login() {
    try {
        document.getElementById('btn-login').disabled = true;
        let data = {
            email: document.getElementById('email').value.trim(),
            password: document.getElementById('password').value.trim()
        }
        let apiLogin = await fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        });
        let response = await apiLogin.json();
        console.log(response)
        if (response.status == "failed") {
            showAlert(response.message, 'danger');
        } else {
            localStorage.setItem('_token', response.token);
            localStorage.setItem('uid', response.userId);
            showAlert(response.message, 'success', true);
        }
        document.getElementById('btn-login').disabled = false;
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
        redirectToDashboard();
    }
}

function redirectToDashboard() {
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1500);
}