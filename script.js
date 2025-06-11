let registeredUser = null;

function flipCard() {
  const card = document.getElementById("card");
  card.classList.toggle("flipped");
}

function handleRegister() {
  const user = document.getElementById('registerUser').value.trim();
  const pass = document.getElementById('registerPass').value.trim();
  if (!user || !pass) {
    alert("Usuario y contraseña requeridos");
    return;
  }
  registeredUser = { username: user, password: pass };
  alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
  flipCard();
}

function handleLogin() {
  const user = document.getElementById('loginUser').value.trim();
  const pass = document.getElementById('loginPass').value.trim();
  if (!registeredUser) {
    alert("No hay usuarios registrados");
    return;
  }
  if (user === registeredUser.username && pass === registeredUser.password) {
    alert("Inicio de sesión exitoso");
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}

function socialLogin(platform) {
  const urls = {
    Google: "https://accounts.google.com/",
    LinkedIn: "https://www.linkedin.com/login",
    GitHub: "https://github.com/login"
  };
  window.open(urls[platform], "_blank");
}
