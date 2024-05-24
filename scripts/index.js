document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const closeWelcome = document.getElementById('closeWelcome');
    const loggedInUser = localStorage.getItem('loggedInUser');
  
    if (loggedInUser) {
      welcomeMessage.textContent = `Bienvenido, ${loggedInUser}`;
      welcomeMessage.style.display = 'block';
    }
  });
  closeWelcome.addEventListener('click', () => {
    welcomeMessage.style.display = 'none';
    closeWelcome.style.display = 'none'; // Ocultar también el botón "Cerrar Sesión"
  });