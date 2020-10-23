let menu = true;
toggle = () => {
    let btn = document.getElementById('toggle');
    let modal = document.getElementById('modal');
    if (menu) {
        menu = false;
        modal.style.display = 'block';
    } else {
        menu = true;
        modal.style.display = 'none';
    }
}