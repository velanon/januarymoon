 document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const correctPasswordHash = 'c0c7c76d30bd3dcaefc96f40275bdc0a'; // Correct hashed value of the password
    const password = document.getElementById('password'); // Get the value of the password input field
    const hashedPassword = CryptoJS.SHA256(password).toString(); // Hash the entered password

    console.log('Entered Password:', password);
    console.log('Hashed Password:', hashedPassword);
    console.log('Correct Password Hash:', correctPasswordHash);

    if (hashedPassword === correctPasswordHash) {
        console.log('Password is correct. Redirecting to menu.html...');
        window.location.href = 'menu.html'; // Redirect to the menu page if the password is correct
    } else {
        alert('Incorrect password. Please try again. I know you can remember it.');
    }
});
