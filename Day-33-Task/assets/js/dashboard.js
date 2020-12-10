function logout() {
    let check = confirm('Do you really want to log out?')
    if (check) {
        localStorage.setItem('_token', '');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
    }
}

async function createShortUrl() {
    let data = {
        longUrl: document.getElementById('url').value
    }
    console.log(data);
}

async function getData() {
    try {
        let api = fetch('http://localhost:3000/users/url-data', {
            method: 'GET',
            headers: {
                "Authorization": localStorage.getItem('_token')
            }
        });
        let response = await (await api).json();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
getData()