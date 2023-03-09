var estatus
var pantalla

function ocultarSeccionUbicacion() {
    estatus=main__ubicacion.style.display;
    pantalla=screen.availWidth;
        if (estatus=="none") {
            main__ubicacion.style="display: block";
        }
        else {
            main__ubicacion.style="display: none";
    }   
}

function ocultarSeccionPortafolio() {
    estatus=main__portafolio.style.display;
    pantalla=screen.availWidth;
        if (estatus=="none") {
            main__portafolio.style="display: block";
        }
        else {
            main__portafolio.style="display: none";
    }   
}

