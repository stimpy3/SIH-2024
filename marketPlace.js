document.addEventListener('DOMContentLoaded', () => {
    // Get the stored email from localStorage
    const storedEmail=localStorage.getItem('userEmail');

    // Find the profile name element
    const nameProfile=document.getElementById('nameProfile');

    if (storedEmail) {
        // Extract the part before the '@' symbol
        const username = storedEmail.split('@')[0];
        nameProfile.textContent = ` ${username}`;
    } else {
        nameProfile.textContent = ' Profile';
    }
});
