async function resetPassword() {
    try {
        let uid = window.location.search.split('=').pop();
        let data = {
            password: document.getElementById('password').value,
            confirm_password: document.getElementById('confirm_password').value
        }
        let apiReset = await fetch(`http://localhost:3000/password/reset/${uid}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        });
        let response = await apiReset.json();
        if (response.status == 'success') {
            showAlert(response.message, 'success', true);
        } else {
            showAlert(response.message, 'danger');
        }
        console.log(response);
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
        redirectToLogin();
    }
}

function redirectToLogin() {
    setTimeout(() => {
        window.location.href = 'login.html'
    }, 1500);
}