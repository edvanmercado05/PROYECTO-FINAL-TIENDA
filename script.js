document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  // Validar credenciales (temporalmente fijas)
  if ((username === 'admin' && password === 'admin') || (username === 'cliente' && password === 'cliente')) {
      // Redirigir según el tipo de usuario
      if (username === 'admin') {
          window.location.href = 'admin.html';
      } else {
          window.location.href = 'cliente.html';
      }
  } else {
      document.getElementById('login-error').innerText = 'Credenciales incorrectas. Inténtalo de nuevo.';
  }
});

