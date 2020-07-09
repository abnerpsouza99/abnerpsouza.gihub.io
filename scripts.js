const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset;
  target.forEach(function (element) {
    if (windowTop > element.OffsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

window.addEventListener("scroll", function () {
  animeScroll();
})


// Checkbox

//const toggle = document.querySelector('#toggleButton')

// function darkMode() {
//   if (toggle.checked) {
//     // main.style.toggle(toggle.classList.add('.dark'))
//     main.classList.add('dark')
//   }
//   else if (!toggle.checked) {
//     main.classList.remove('dark')
//   }
// }



const main = document.querySelector('main')
const darkModeToggle = document.querySelector('.darkMode')
const darkModeCircle = document.querySelector('.dark-mode-circle')

function darkMode() {
  main.classList.toggle('dark')
  darkModeCircle.classList.toggle('circle-right')
  darkModeToggle.classList.toggle('dark-mode-on')
}