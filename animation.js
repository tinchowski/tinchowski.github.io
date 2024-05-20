/*Busca en html todas las clases section-animation*/
const sections = document.querySelectorAll('.section-animation');

/*escuchar el listener scroll y pasar por callback la funcion animationScroll*/
window.addEventListener('scroll', animationScroll);
//Llamar a la funcion animationScroll
//animationScroll();

//Declarar la funcion animationScroll
function animationScroll(){
    const triggerBottom = window.innerHeight / 5 * 4;
    sections.forEach((section)=> {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        };
    });    
    
};
