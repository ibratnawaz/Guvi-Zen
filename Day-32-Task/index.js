async function checkAccount() {
    let email = document.getElementById('email').value;
    document.getElementById('btn-submit').disabled = true;
    showMessage('alert-box', 'alert-warning', 'Sending email. Please wait.');
    data = {
        email
    };
    let api = await fetch('https://nodejs-auth-user.herokuapp.com/password/forgot', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    });
    let res = await api.json();
    document.getElementById('btn-submit').disabled = false;
    if (res.data.status == 'success') {
        showMessage('alert-box', 'alert-success', res.data.message);
    } else {
        showMessage('alert-box', 'alert-danger', res.data.message);
    }
}

function showMessage(id, className, message) {
    let msgBox = document.getElementById(id);
    msgBox.classList.remove('alert-warning', 'alert-success', 'alert-danger');
    msgBox.classList.add(className);
    msgBox.innerHTML = message;
    msgBox.style.display = 'flex';
}