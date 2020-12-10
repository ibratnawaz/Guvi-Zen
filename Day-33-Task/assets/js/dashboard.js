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
    document.getElementById('btn-url').disabled = true;
    let data = {
        long_url: document.getElementById('url').value
    }
    let apiShortUrl = await fetch('http://localhost:3000/short-url', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Authorization": localStorage.getItem('_token'),
            "Content-type": "application/json"
        }
    });

    let response = await apiShortUrl.json();
    console.log(response);
    showAlert(response.message, 'success');
    document.getElementById('btn-url').disabled = false;
    getData();
}

function showAlert(message, status) {
    let alertBox = document.getElementById('alert-message');
    alertBox.removeAttribute('class');
    alertBox.style.display = 'block';
    alertBox.setAttribute('class', `alert alert-${status}`);
    alertBox.innerHTML = message;
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 2000);
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
        let table = document.getElementById('data-table');
        if (response.data[0].results.length) {
            table.innerHTML = '';
            response.data[0].results.forEach((obj, index) => {
                let tr = document.createElement('tr');
                tr.innerHTML = `
                    <th scope="row">${index+1}</th>
                    <td title="${obj.long_url}">${obj.long_url.substring(0,49)}...</td>
                    <td>http://localhost:3000/${obj.short_url_code}</td>
                    <td><a href="http://localhost:3000/${obj.short_url_code}" target="_blank"><i class="fa fa-link"></i></a></td>
                `;
                table.appendChild(tr);
            });
        } else {
            table.innerHTML = '';
            let tr = document.createElement('tr');
            tr.innerHTML = `
                    <td class="text-center" colspan="4">No data</td>
                `;
            table.appendChild(tr);
        }
    } catch (error) {
        console.log(error);
    }
}

getData()