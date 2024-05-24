document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const correo = document.getElementById('loginCorreo').value.trim();
      const contrasena = document.getElementById('loginContrasena').value.trim();
  
      if (!correo || !contrasena) {
        alert('Todos los campos son obligatorios');
        return;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(correo)) {
        alert('Por favor, ingrese un correo electrónico válido');
        return;
      }
  
      const usuario = JSON.parse(localStorage.getItem(correo));
  
      if (usuario && usuario.contrasena === contrasena) {
        alert('Inicio de sesión exitoso');
        localStorage.setItem('loggedInUser', correo);
        window.location.href = 'index.html';
      } else {
        alert('Correo o contraseña incorrectos');
      }
    });
  });
  