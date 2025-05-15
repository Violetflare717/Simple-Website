// Toggle the visibility of extra profile details
function toggleProfileDetails() {
  const extra = document.getElementById('extra-profile');
  if (extra.style.display === 'none' || extra.style.display === '') {
    extra.style.display = 'block';
  } else {
    extra.style.display = 'none';
  }
}

// Toggle dark/light mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Scroll to top button visibility and action
const scrollButton = document.createElement('button');
scrollButton.textContent = '⬆';
scrollButton.id = 'scrollToTopBtn';
scrollButton.style.position = 'fixed';
scrollButton.style.bottom = '20px';
scrollButton.style.right = '20px';
scrollButton.style.display = 'none';
scrollButton.style.padding = '10px';
scrollButton.style.borderRadius = '50%';
scrollButton.style.border = 'none';
scrollButton.style.background = '#333';
scrollButton.style.color = '#fff';
scrollButton.style.cursor = 'pointer';
document.body.appendChild(scrollButton);

scrollButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  scrollButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});