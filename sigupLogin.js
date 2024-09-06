document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const passwordInput = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('showPassword');
    const signupText = document.getElementById('signup');
    const switchTxt = document.getElementById('switchTxt');
    const switcher = document.getElementById('loginTxt');
    const signupBtn = document.getElementById('signupBtn');
    const buySellContainer = document.getElementById('buySellContainer');
    const passwordLabel = document.getElementById('passwordLabel');
    const emailInput = document.getElementById('email');
    const buyRadio = document.getElementById('buyRadio');
    const sellRadio = document.getElementById('sellRadio');
    const loginSwitch = document.getElementById('loginSwitch');
    
    // Flag to determine current form
    let isSignup = true;

    // Toggle password visibility
    showPasswordCheckbox.addEventListener('change', () => {
        passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
    });

    loginSwitch.addEventListener('click', () => {
        if (isSignup) {
            // Switch to Login
            buySellContainer.style.display = 'none';
            signupText.textContent = 'Log In';
            passwordLabel.textContent = 'Enter Password';
            passwordInput.placeholder = 'Enter your password';
            switchTxt.textContent = "Don't have an account?";
            switcher.textContent = 'Sign Up';
            signupBtn.textContent = 'Log In';
        } else {
            // Switch to Signup
            buySellContainer.style.display = 'block';
            signupText.textContent = 'Sign Up';
            passwordLabel.textContent = 'Set Password';
            passwordInput.placeholder = 'Create your password';
            switchTxt.textContent = 'Already have an account?';
            switcher.textContent = 'Log In';
            signupBtn.textContent = 'Sign Up';
        }
        isSignup = !isSignup;
    });

     // Handle Signup/ Login button click
     signupBtn.addEventListener('click', () => {
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        const isNumber = emailValue.length === 10 && /^[0-9]+$/.test(emailValue);
        const isEmail = emailValue.includes('@') && emailValue.includes('.');
        const isPasswordValid = passwordValue.length > 0 && !passwordValue.includes(' ');
        const purposeSelected = buyRadio.checked || sellRadio.checked;

        if (isSignup) {
            // Signup validation
            if ((isNumber || isEmail) && isPasswordValid && purposeSelected) {
                // Store user data in local storage
                localStorage.setItem('userEmail', emailValue);
                localStorage.setItem('userPassword', passwordValue);
                alert('Sign up successful! You can now log in.');
                // Redirect to another page or handle post-signup logic
                window.location.href = 'mainPage.html';
            } else {
                if (!(isNumber || isEmail)) {
                    alert('Please enter a valid email address or a 10-digit mobile number.');
                } else if (!isPasswordValid) {
                    alert('Please set a valid password.');
                } else if (!purposeSelected) {
                    alert('Please select the purpose of using this website.');
                }
            }
        } else {
            // Login validation
            const storedEmail = localStorage.getItem('userEmail');
            const storedPassword = localStorage.getItem('userPassword');

            if (emailValue === storedEmail && passwordValue === storedPassword) {
                alert('Login successful!');
                // Redirect to another page or show logged-in content
                window.location.href = 'mainPage.html';
            } else {
                alert('Invalid email or password.');
            }
        }
    });
});
       
