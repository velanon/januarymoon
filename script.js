document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const correctPassword = 'toad011424aurora'; 

    if (password === correctPassword) {
        document.getElementById('password-form').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
    } else {
        alert('Incorrect password. Please try again.');
    }
});
