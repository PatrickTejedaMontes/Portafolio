let menuVisible = false;
//funcion que muestra o oculta el menu 
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }
    else{
        document.getElementById("nav").classList="responsive"
        menuVisible=true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible=false;
}

function efectoHabilidades(){
    var skills= document.getElementById("skills");
    var distancia_skills= window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades= document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("sqlserver");
        habilidades[3].classList.add("sapbtp");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("trabajoenequipo");
        habilidades[6].classList.add("puntualidad");
        habilidades[7].classList.add("orden");
        habilidades[8].classList.add("empatia");
        habilidades[9].classList.add("trabajobajopresion");
    }
    }
window.onscroll= function(){
    efectoHabilidades();
}
