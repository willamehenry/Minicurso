const elemetosdiversos = document.querySelectorAll ('.divsetas')

elemetosdiversos.forEach (function(divsetas){
divsetas.addEventListener('click', function (){

divsetas.classList.toggle('ativa')

})

})