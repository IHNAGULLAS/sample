// Get the "Login" button element
const loginBtn = document.getElementById('loginBtn');

// Add a click event listener to the "Login" button
loginBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default behavior of the link

  // Redirect to the student voting form page
  window.location.href = 'studentvotingform.html';
});