let menuVisible = false;
// Oculta o muestra el menu

const mostrarOcultarMenu =() => {
    if (menuVisible) {
        document.getElementById("nav").classList="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

const seleccionar = () => {
    //El menu se oculta cuando selecciono una opcion

    document.getElementById("nav").classList="";
    menuVisible=false;
} 

// const probandoScroll = () => {
//     let skills = document.getElementById("skills");
//     console.log("Que tan cerca esta " + (window.innerHeight - skills.getBoundingClientRect().top));
    
// }

// window.onscroll = function(){
//     probandoScroll();
// }