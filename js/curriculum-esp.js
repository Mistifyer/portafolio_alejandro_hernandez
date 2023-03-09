var estatus
var pantalla

function ocultarSeccionContacto() {
    estatus=main__contacto.style.display;
    pantalla=screen.availWidth;

    if (pantalla<768) {
        if (estatus=="none") {
        main__contacto.style="display: block";
        }
        else {
        main__contacto.style="display: none";
        }  
    }   
}

function ocultarSeccionEducacion() {
    estatus=main__educacion.style.display;
    pantalla=screen.availWidth;
    if (pantalla<768) {
        if (estatus=="none") {
            main__educacion.style="display: block";
        }
        else {
            main__educacion.style="display: none";
        }  
    }
}

function ocultarSeccionActual() {
    estatus=main__actual.style.display;
    if (estatus=="none") {
        main__actual.style="display: block";
    }
    else {
        main__actual.style="display: none";
    }  
}

function ocultarSeccionUltimo() {
    estatus=main__ultimo.style.display;
    if (estatus=="none") {
        main__ultimo.style="display: block";
    }
    else {
        main__ultimo.style="display: none";
    }  
}

function ocultarSeccionAnteriores() {
    estatus=main__anteriores.style.display;
    if (estatus=="none") {
        main__anteriores.style="display: block";
    }
    else {
        main__anteriores.style="display: none";
    }  
}

function ocultarSeccionSistemas() {
    estatus=main__sistemas.style.display;
    if (estatus=="none") {
        main__sistemas.style="display: block";
        main__gestor.style="display: block";
        main__soluciones.style="display: block";
    }
    else {
        main__sistemas.style="display: none";
        main__gestor.style="display: none";
        main__soluciones.style="display: none";
    }  
}

function ocultarSeccionLogros() {
    estatus=main__logros.style.display;
    if (estatus=="none") {
        main__logros.style="display: block";
    }
    else {
        main__logros.style="display: none";
    }  
}

function ocultarSeccionHabilidades() {
    estatus=main__habilidades.style.display;
    if (estatus=="none") {
        main__habilidades.style="display: block";
    }
    else {
        main__habilidades.style="display: none";
    }  
}

function ocultarSeccionValores() {
    estatus=main__valores.style.display;
    console.log(estatus);

    if (estatus=="none") {
        main__valores.style="display: block";
    }
    else {
        main__valores.style="display: none";
    }
    
    console.log(estatus);
}
