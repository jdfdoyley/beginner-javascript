// Classes
const pic = document.querySelector('.nice');

function roundClass() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', roundClass);
