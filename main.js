// https://as01.epimg.net/meristation/imagenes/2021/08/31/noticias/1630409487_516005_1630409560_noticia_normal.jpg

// https://images.unsplash.com/photo-1546561892-65bf811416b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&w=1000&q=80

//cuando se haga click al botón pase lo siguiente:

// que el color de fondo de la web pase a ser rgb(39,31,88);
// que los textos sean blancos
// que el título cambie y ponga escrito "¡Te voy a chupar la fuerza!"
// que cambie la foto por la de Darth Vader
// que cambie el atributo alt="foto de Darth Vader"
// que el texto del botón cambie a "Light mode"


// cuando le demos clic otra vez, que todo vuelva a ser como antes
const titulo = document.querySelector('h1');
const image = document.querySelector('img');
const botonChange = document.querySelector('.boton');

botonChange.addEventListener('click', () =>{
    
    if(botonChange.classList.value == 'boton'){
        botonChange.classList.add('inver-boton');
        document.body.style.backgroundColor = 'rgb(39,31,88)';
        document.body.style.color = 'white';
        titulo.innerText = "¡Te voy a chupar la fuerza!";
        image.setAttribute('src', 'https://images.unsplash.com/photo-1546561892-65bf811416b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&w=1000&q=80');
        image.setAttribute('alt', 'foto de Darth Vader');
    
    }else{
        botonChange.classList.remove('inver-boton');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        titulo.innerText = "¡Que la fuerza te acompañe!";
        image.setAttribute('src', 'https://as01.epimg.net/meristation/imagenes/2021/08/31/noticias/1630409487_516005_1630409560_noticia_normal.jpg');
        image.setAttribute('alt', 'foto de Yoda');
        
    }


})