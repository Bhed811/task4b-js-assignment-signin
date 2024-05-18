document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    

    try {
        const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        });

        if (!response.ok) {
            throw new Error('Failed to login. Check your email and password.');
        }

        const data = await response.json();
        console.log('Login successful:', data);
        // Redirect user or update UI
        alert('Login successful! ');
        this.reset();
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('error-message').textContent = error.message;
    }
});
