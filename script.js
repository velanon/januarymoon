document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const correctPasswordHash = 'c0c7c76d30bd3dcaefc96f40275bdc0a'; 
    const password = document.getElementById('password').value; 
    const hashedPassword = CryptoJS.SHA256(password).toString();

    if (hashedPassword === correctPasswordHash) {
        window.location.href = 'menu.html'; // Redirect to the menu page if the password is correct
    } else {
        alert('Incorrect password. Please try again. I know you can remember it.');
    }
});
