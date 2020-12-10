async function authUser() {
    let uid = localStorage.getItem('uid');
    let token = localStorage.getItem('_token');
    localStorage.setItem('fromPage', window.location.pathname);
    try {
        let apiAuth = await fetch(`http://localhost:3000/verify/${uid}`, {
            method: 'GET',
            headers: {
                "Authorization": token
            }
        });
        let response = await apiAuth.json();
        if (response.status == 'failed') {
            if (localStorage.getItem('fromPage') == '/dashboard.html') {
                alert('Session expired. Login again.')
                localStorage.setItem('fromPage', window.location.pathname);
                window.location.href = 'login.html';
            }
        } else if (response.status == 'success') {
            if (window.location.pathname != '/dashboard.html') {
                window.location.href = 'dashboard.html';
            }
        }
    } catch (error) {
        console.log(error);
    }
}

authUser();