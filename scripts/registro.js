document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.getElementById('registroForm');
  
    registroForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const nombre = document.getElementById('nombre').value.trim();
      const apellido = document.getElementById('apellido').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const contrasena = document.getElementById('contrasena').value.trim();
      const repetirContrasena = document.getElementById('repetirContrasena').value.trim();
  
      if (!nombre || !apellido || !telefono || !correo || !contrasena || !repetirContrasena) {
        alert('Todos los campos son obligatorios');
        return;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(correo)) {
        alert('Por favor, ingrese un correo electrónico válido');
        return;
      }
  
      if (contrasena !== repetirContrasena) {
        alert('Las contraseñas no coinciden');
        return;
      }
  
      const usuario = {
        nombre,
        apellido,
        telefono,
        correo,
        contrasena
      };
  
      localStorage.setItem(correo, JSON.stringify(usuario));
      alert('Registro exitoso');
      registroForm.reset();
    });
  });
  