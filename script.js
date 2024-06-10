document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const correctPasswordHash = '189dd24609c5542a85dce3516fb4ae7c0ae93d2b7cbe13b352c3695b5fc62ae3'; 
    const password = document.getElementById('password').value;
    const hashedPassword = CryptoJS.SHA256(password).toString();

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
