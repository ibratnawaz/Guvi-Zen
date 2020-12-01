getUser(1);
getUser(2);
async function getUser(role) {
    try {
        let api;
        let table;
        if (role == 1) {
            api = await fetch('https://nodejs-zen.herokuapp.com/students');
            table = document.getElementById('student-table');
        } else if (role == 2) {
            api = await fetch('https://nodejs-zen.herokuapp.com/mentors');
            table = document.getElementById('mentor-table');
        }
        let res = await api.json();
        if (res.items) {
            table.innerHTML = '';
            res.data.forEach((ele, index) => {
                let tr = createMyTag('tr');
                let td1 = createMyTag('td');
                td1.innerHTML = index + 1;
                let td2 = createMyTag('td');
                td2.innerHTML = ele.name;
                let td3 = createMyTag('td');
                td3.innerHTML = ele.email;
                let td4 = createMyTag('td');
                td4.innerHTML = ele.phone;
                let td5 = createMyTag('td');
                td5.innerHTML = `
                <button class="btn btn-link text-warning" data-toggle="modal" 
                data-target="#modal" onclick="editUser('${role}','${ele['_id']}','${ele.name}','${ele.email}','${ele.phone}')">Edit
                </button>
                <button class="btn btn-link text-danger" onclick="deleteUser('${role}','${ele["_id"]}')">Delete</button>`;
                tr.append(td1, td2, td3, td4, td5);
                table.appendChild(tr);
            });
        } else {
            table.innerHTML = '';
            let tr = createMyTag('tr', 'text-center');
            let td = createMyTag('td');
            td.setAttribute('colspan', 5);
            td.innerHTML = `No data`
            tr.append(td);
            table.appendChild(tr);
        }
    } catch (error) {
        console.log(error)
    }

}

function createMyTag(tagName, className = '') {
    let ele = document.createElement(tagName);
    ele.setAttribute('class', className);
    return ele;
}

function validation(phone, id) {
    if ((+phone).toString().length != 10) {
        document.getElementById(id).innerHTML = `Mobile Number should be of 10 digits`;
        return false;
    } else {
        document.getElementById(id).innerHTML = ``;
        return true;
    }
}

async function createUser() {
    try {

        let role = document.getElementById('role').value;
        if (validation(document.getElementById('phone').value, 'error')) {
            data = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value
            }
            if (role == 1) {
                let api = await fetch('https://nodejs-zen.herokuapp.com/student/create', {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type": "application/json"
                    }
                });
                let res = await api.json();
                alertMessage(res.success, 'success');
                getUser(1);
            } else if (role == 2) {
                let api = await fetch('https://nodejs-zen.herokuapp.com/mentor/create', {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type": "application/json"
                    }
                });
                let res = await api.json();
                alertMessage(res.success, 'success');
                getUser(2);
            }
            document.getElementById('my-form').reset();
        }
    } catch (error) {
        console.log(error)
    }
}

function alertMessage(message, id) {
    let alertBox = document.getElementById(id);
    alertBox.innerHTML = `${message}`;
    alertBox.style.display = 'flex';
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 2500);
}

function editUser(role, userId, name, email, phone) {
    document.getElementById('edit-name').value = name;
    document.getElementById('edit-email').value = email;
    document.getElementById('edit-phone').value = phone;
    document.getElementById('userId').value = userId;
    document.getElementById('role').value = role;
}

async function updateUser() {
    try {
        if (validation(document.getElementById('edit-phone').value, 'edit-error')) {
            $('#modal').modal('hide');
            let data = {
                name: document.getElementById('edit-name').value,
                email: document.getElementById('edit-email').value,
                phone: document.getElementById('edit-phone').value
            };

            let userId = document.getElementById('userId').value;
            let role = document.getElementById('role').value;
            if (role == 1) {
                let api = await fetch(`https://nodejs-zen.herokuapp.com/student/edit/${userId}`, {
                    method: "PUT",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type": "application/json"
                    }
                });
                let res = await api.json();
                alertMessage(res.success, 'warning');
                getUser(1);
            } else if (role == 2) {
                let api = await fetch(`https://nodejs-zen.herokuapp.com/mentor/edit/${userId}`, {
                    method: "PUT",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type": "application/json"
                    }
                });
                let res = await api.json();
                alertMessage(res.success, 'warning');
                getUser(2);
            }
        }
    } catch (error) {
        console.log(error);
    }
}

async function deleteUser(role, userId) {
    try {
        let check = confirm("You won't be able to revert this!");
        if (check) {
            let api;
            if (role == 1) {
                api = await fetch(`https://nodejs-zen.herokuapp.com/student/${userId}`, {
                    method: "DELETE",
                });
                let res = await api.json();
                alertMessage(res.success, 'danger');
                getUser(1);
            } else if (role == 2) {
                api = await fetch(`https://nodejs-zen.herokuapp.com/mentor/${userId}`, {
                    method: "DELETE",
                });
                let res = await api.json();
                alertMessage(res.success, 'danger');
                getUser(2);
            }
        }
    } catch (error) {
        console.log(error)
    }
}