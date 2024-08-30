document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const existingButton = document.getElementById('existing');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('checkbox');

    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        existingButton.style.display = 'inline-block';
    }

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (rememberMeCheckbox.checked) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);
    });

    existingButton.addEventListener('click', function () {
        const savedUsername = localStorage.getItem('username');
        alert(`Logged in as ${savedUsername}`);
    });
});