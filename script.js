
document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const correctPasswordHash = 'c0c7c76d30bd3dcaefc96f40275bdc0a'; 

    const hashedPassword = hashPassword(password);
    console.log(`Entered password: ${password}`);
    console.log(`Hashed password: ${hashedPassword}`);
    console.log(`Correct hash: ${correctPasswordHash}`);

    if (hashedPassword === correctPasswordHash) {
        incrementPasswordCount();
        updatePasswordCountDisplay();
        window.location.href = 'menu.html'; // Redirect to the menu page
    } else {
        alert('Incorrect password. Please try again. I know you can remember it.');
    }
});

// Function to hash the password using SHA-256
function hashPassword(password) {
    return CryptoJS.SHA256(password).toString();
}

// Function to increment the password count
function incrementPasswordCount() {
    let passwordCount = localStorage.getItem('passwordCount');
    if (!passwordCount) {
        localStorage.setItem('passwordCount', '0');
        passwordCount = 0;
    }
    passwordCount++;
    localStorage.setItem('passwordCount', passwordCount.toString());
    console.log(`Password entered ${passwordCount} times.`);
}

// Function to update the display of password count
function updatePasswordCountDisplay() {
    const passwordCount = localStorage.getItem('passwordCount');
    document.getElementById('password-count').innerText = `Password entered ${passwordCount} times.`;
}
