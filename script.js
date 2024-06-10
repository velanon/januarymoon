document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const password = 'toad011424aurora';
    const hashedPassword = CryptoJS.SHA256(password).toString();


    if (hashedPassword === correctPasswordHash) {
        window.location.href = 'menu.html'; // Redirect to the menu page
    } else {
        alert('Incorrect password. Please try again. I know you can remember it.');
    }
});
