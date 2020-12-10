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

}