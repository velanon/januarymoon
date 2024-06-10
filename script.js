document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const correctPassword = 'toad011424aurora'; // Ensure this matches your intended password

    if (password === correctPassword) {
        window.location.href = 'menu.html'; // Redirect to the menu page
        
        // Increment password count
        incrementPasswordCount();
        
        // Update the display of password count
        updatePasswordCountDisplay();
    } else {
        alert('Incorrect password. Please try again. I know you can remember it.');
    }
});

// Function to increment the password count
function incrementPasswordCount() {
    // Check if the password count is already stored in local storage
    let passwordCount = localStorage.getItem('passwordCount');

    // If not stored yet, initialize it to 0
    if (!passwordCount) {
        localStorage.setItem('passwordCount', '0');
        passwordCount = 0;
    }

    // Increment the count and store it in local storage
    passwordCount++;
    localStorage.setItem('passwordCount', passwordCount.toString());
    console.log(`Password entered ${passwordCount} times.`);
}

// Function to update the display of password count
function updatePasswordCountDisplay() {
    const passwordCount = localStorage.getItem('passwordCount');
    document.getElementById('password-count').innerText = `Password entered ${passwordCount} times.`;
}
