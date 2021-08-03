document.addEventListener('DOMContentLoaded', function(event){
    let myHeader = document.querySelector('.header');

    setTimeout(() => myHeader.classList.remove('.hidden'), 3000)
})