addEventListener('DOMContentLoaded', ()=> {
    contador();
});

let contador = ()=> {
    alert("Estas por comenzar un contador");
    let clicks = 0;
    let boton = document.getElementById('boton');
    boton.addEventListener('click', ()=> {
        clicks++;
        boton.innerHTML = clicks;
        boton.style.backgroundColor = `rgb(${numeroRandom(255, 150)}, ${numeroRandom(255,150)}, ${numeroRandom(255,150)})`;
    });
}

let numeroRandom = (max, min)=> {
    numero = Math.random()*(max - min) + min;
    return numero;
}