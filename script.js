document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const correctPasswordHash = 'c0c7c76d30bd3dcaefc96f40275bdc0a'; // SHA-256 hash of 'toad011424aurora'

    const hashedPassword = hashPassword(password);

    if (hashedPassword === correctPasswordHash) {
        incrementPasswordCount();
        updatePasswordCountDisplay();
        window.location.href = 'menu.html'; // Redirect to the menu page
    } else {
        alert('Incorrect password. Please try again.');
    }
});

function hashPassword(password) {
    return CryptoJS.SHA256(password).toString();
}

function incrementPasswordCount() {
    let passwordCount = localStorage.getItem('passwordCount');
    if (!passwordCount) {
        localStorage.setItem('passwordCount', '0');
        passwordCount = 0;
    }
    passwordCount++;
    localStorage.setItem('passwordCount', passwordCount.toString());
}

function updatePasswordCountDisplay() {
    const passwordCount = localStorage.getItem('passwordCount');
    document.getElementById('password-count').innerText = `Password entered ${passwordCount} times.`;
}
