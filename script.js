document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    this.classList.add('active');
    document.getElementById('signup-btn').classList.remove('active');
});

document.getElementById('signup-btn').addEventListener('click', function() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    this.classList.add('active');
    document.getElementById('login-btn').classList.remove('active');
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (username && email && password) {
        alert('Signup successful');
    } else {
        alert('Please fill in all fields');
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        alert('Login successful');
    } else {
        alert('Please fill in all fields');
    }
});
