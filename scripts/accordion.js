const button = document.querySelector('.intro__form__btn-arrow');
const container = document.querySelector('.intro__form');

button.addEventListener("click", (e)=> { 
  e.preventDefault();
   
  if(container.classList.contains('is-show')){
    container.style.height = 315 +'rem';
  }else{
    container.style.height = 1793 +'rem';
  }
  
  container.classList.toggle('is-show');
  button.classList.toggle('intro__form__btn-arrow-up');
});