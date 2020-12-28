/*
let links = document.querySelectorAll("a");

links.forEach(function(link) {
    console.log(link);
})
*/

/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log(this);
    })
})
*/

let links = document.querySelectorAll(".close");
links.forEach(function (link) {
    link.addEventListener('click', function (ev) {

        ev.preventDefault();

        let content = document.querySelector('.content');

        console.log(content);

        // Quitamos las clases de animación que ya tiene.
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        // Agregar clases para animar su salida.
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        // Volvemos a la página principal, tras una pausa de 0.6 segundos.
        setTimeout(function () {
            location.href = "/";
        }, 600);

        return false;

    })
})
