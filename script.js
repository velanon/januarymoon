document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const password = 'c0c7c76d30bd3dcaefc96f40275bdc0a';
    const hashedPassword = CryptoJS.SHA256(password).toString();
    console.log(hashedPassword);

    if (hashedPassword === correctPasswordHash) {
        window.location.href = 'menu.html'; // Redirect to the menu page
    } else {
        alert('Incorrect password. Please try again. I know you can remember it.');
    }
});
