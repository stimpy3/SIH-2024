// JavaScript for handling interactivity on the agriculture contract page

document.addEventListener('DOMContentLoaded', function () {

    // Toggle FAQ answers
    document.addEventListener('DOMContentLoaded', () => {
        const questions = document.querySelectorAll('.question');
    
        questions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                answer.classList.toggle('hidden');
            });
        });
    });
    // Handle Add button click
    document.querySelector('.searchContainer').addEventListener('submit', (e) => {
        e.preventDefault();
        const query = document.querySelector('.searchInput').value.trim();
        if (query) {
            // Do something with the search query
            console.log(`Search for: ${query}`);
        }
    });
  
    // Profile button click
    const profileBtn = document.getElementById('profileBtn');
    profileBtn.addEventListener('click', function () {
      alert('Profile page is under construction.');
    });
  });
  document.getElementById('uploadImage').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.getElementById('uploadedImagePreview');
            imgElement.src = e.target.result;  // Set the image source to the uploaded file data
            imgElement.style.display = 'block';  // Make the image visible
        };
        reader.readAsDataURL(file);  // Convert image file to base64 string
    }
});

  