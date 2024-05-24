document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const loggedIn = urlParams.get('loggedIn');

  if (loggedIn === 'true') {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (loggedInUser) {
      const welcomeText = document.getElementById('welcomeText');
      welcomeText.textContent = `Bienvenido, ${loggedInUser}`;
      welcomeMessage.style.display = 'block';
    }
    
    const closeWelcome = document.getElementById('closeWelcome');
    closeWelcome.addEventListener('click', () => {
      welcomeMessage.style.display = 'none';
    });
  }
});
