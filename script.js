document.addEventListener('DOMContentLoaded', () => {
  const abas = document.querySelectorAll('.aba');
  const menuButtons = document.querySelectorAll('.menu button');

  function mostrar(indice) {
    abas.forEach((aba, i) => {
      aba.style.display = i === indice ? 'block' : 'none';
    });

    menuButtons.forEach((btn, i) => btn.classList.toggle('ativo', i === indice));
  }

  menuButtons.forEach((btn, i) => btn.addEventListener('click', () => mostrar(i)));

  mostrar(0);
});
