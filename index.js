//console.log('Osmanbell world of creativity')
let myHeading;
let effect;

myHeading = document.querySelector('.World')
effect = document.querySelector('.touch')

effect.addEventListener('click', function(){
    myHeading.classList.toggle('move')

})