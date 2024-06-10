document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const correctPasswordHash = '4ea5c508a6566e76240543f8feb06fd457777be39549c4016436afda65d2330e'; // Correct hashed value of the password
    const password = document.getElementById('password').value; // Get the value of the password input field
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
