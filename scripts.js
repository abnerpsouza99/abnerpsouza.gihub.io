const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
  const windowTop = window.pageYOffset;
  target.forEach(function(element) {
    if(windowTop > element.OffsetTop){
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

window.addEventListener("scroll", function(){
  animeScroll();
})