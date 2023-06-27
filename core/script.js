// Navega para a página de login
function navigateSignIn() {
  window.location.href = "sign-in.html";
}

// Navega para a página de cadastro
function navigateSignUp() {
  window.location.href = "sign-up.html";
}

// Função para redirecionar para a página de login após 7 segundos (simulação de carregamento)
function loadingSimulator() {
  setTimeout(function () {
    window.location.href = "sign-in.html";
  }, 7000);
}
