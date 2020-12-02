let query = window.location.search.split(',');
let _token = query[0].split('=');
let email = query[1].split('=');
document.getElementById('email').value = email[1];

function checkPassword() {
    let password = document.getElementById('password').value;
    let cPassword = document.getElementById('confirm-password').value;
    if (password != cPassword) {
        clearInputs('Password and Confirm password should be same.');
    } else if (password.length < 8) {
        clearInputs('Password should be of 8 characters long');
    } else {
        document.getElementById('error').innerHTML = '';
        document.getElementById('btn-submit').disabled = true;
        let status = document.getElementById('message');
        status.innerHTML = 'Password updating...';
        status.style.color = '#28a745';
        resetPassword(password);
    }
}

function clearInputs(message) {
    document.getElementById('error').innerHTML = `${message}`;
    document.getElementById('password').value = '';
    document.getElementById('confirm-password').value = '';
}

async function resetPassword(password) {
    data = {
        email: email[1],
        token: _token[1],
        password
    };
    let api = await fetch('http://localhost:3000/password/reset', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    });
    let res = await api.json();
    let status = document.getElementById('message');
    if (res.data.status == 'success') {
        status.innerHTML = `${res.data.message}`;
        status.style.color = '#28a745';
        alert(`${res.data.message}`);
        window.location.href = 'login.html';
    } else {
        status.innerHTML = `${res.data.message}`;
        status.style.color = '#dc3545';
    }
}