document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let rememberMe = document.getElementById('checkbox').checked;

    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);

    let savedUsername = localStorage.getItem('username');
    let savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        document.getElementById('existing').style.display = 'block';
    } else {
        document.getElementById('existing').style.display = 'none';
    }
});

document.getElementById('existing').addEventListener('click', function() {
    let savedUsername = localStorage.getItem('username');
    alert(`Logged in as ${savedUsername}`);
});

window.onload = function() {
    let savedUsername = localStorage.getItem('username');
    let savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        document.getElementById('username').value = savedUsername;
        document.getElementById('password').value = savedPassword;
        document.getElementById('existing').style.display = 'block';
    }
};