
  function toggleMenu() {
    const menu = document.querySelector('.navegacao .menu');
    menu.classList.toggle('ativo');
  }
function toggleMenu() {
  document.querySelector('.menu').classList.toggle('ativo');
}

// DARK MODE
const darkToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Verifica se já foi salvo no localStorage
if (localStorage.getItem('modoEscuro') === 'ativado') {
  body.classList.add('dark-mode');
}

darkToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('modoEscuro', 'ativado');
  } else {
    localStorage.setItem('modoEscuro', 'desativado');
  }
});
