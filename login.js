const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
// toggle password script starts here 
const passwordInput = document.getElementById('password');
        const togglePasswordBtn = document.querySelector('.toggle-password');

        function togglePassword() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Change the text of the button based on the password visibility
            togglePasswordBtn.textContent = type === 'password' ? 'Show Password' : 'Hide Password';
        }