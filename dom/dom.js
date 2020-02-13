// Classes
const pic = document.querySelector('.nice');

function roundClass() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', roundClass);

// Attribute
pic.alt = 'random pictures'; // setters
console.log(pic.alt); // getters

// getters and setters
pic.setAttribute('alt', 'great random pics');
console.log(pic.getAttribute('alt'));
