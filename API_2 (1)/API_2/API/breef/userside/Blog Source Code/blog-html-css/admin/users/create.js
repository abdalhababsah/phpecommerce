const addUserForm = document.getElementById('addUserForm')
addUserForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const formData = {
        username: username,
        email: email,
        password: password,
    }
    fetch("http://localhost/API/serverside/userinsert.php", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json();
        })
        .then(data => {
            console.log('User added:', data)
            window.location.href= "index.html"
        })
        .catch(error => {
            console.error('Error:', error)
        })
})


//
//