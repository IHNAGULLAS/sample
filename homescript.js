// Get the "Login" dropdown toggle button
const loginDropdownToggle = document.getElementById('loginDropdown');

// Get the dropdown menu
const dropdownMenu = loginDropdownToggle.nextElementSibling;

// Add click event listener to the dropdown toggle button
loginDropdownToggle.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
});

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropdown-toggle')) {
    const dropdowns = document.getElementsByClassName('dropdown-menu');
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});

// Handle login authentication and redirection
const dropdownItems = dropdownMenu.getElementsByTagName('a');
for (let i = 0; i < dropdownItems.length; i++) {
  const dropdownItem = dropdownItems[i];
  dropdownItem.addEventListener('click', function(event) {
    event.preventDefault();
    const userType = this.textContent.toLowerCase();
    let redirectUrl;

    if (userType === 'student') {
      // Redirect to student voting form
      redirectUrl = 'studentvotingform.html';
    } else if (userType === 'faculty') {
      // Redirect to faculty login form
      redirectUrl = 'faculty-login.html';
    } else if (userType === 'admin') {
      // Redirect to admin login form
      redirectUrl = 'admin-login.html';
    }

    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  });
}