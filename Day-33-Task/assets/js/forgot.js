async function forgotPassword() {
    try {
        let data = {
            email: document.getElementById('email').value
        }
        console.log(data);
        let apiReset = await fetch(`https://url-shortener-backend-node.herokuapp.com/password/forgot`, {
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