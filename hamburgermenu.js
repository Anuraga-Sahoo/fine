addEventListener("DOMContentLoaded", (event) => {

//hamburger menue

  document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('.menu').classList.toggle('active');
  });

  document.addEventListener('click', function(e) {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove('active');
    }
  });

  document.querySelectorAll('.menu a, .sign-in-btn').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.menu').classList.remove('active');
    });
  });

})

