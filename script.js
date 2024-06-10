document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const correctPassword = 'toad011424aurora'; // Ensure this matches your intended password

    if (password === correctPassword) {
        window.location.href = 'menu.html'; // Redirect to the menu page
    } else {
        alert('Incorrect password. Please try again. I know you can remember it.');
    }
});
