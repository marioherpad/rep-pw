// Alternar modo oscuro
const btnModoOscuro = document.getElementById('modoOscuroBtn');

btnModoOscuro.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Alternar ícono sol/luna
    const icono = btnModoOscuro.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icono.classList.remove('fa-moon');
        icono.classList.add('fa-sun');
    } else {
        icono.classList.remove('fa-sun');
        icono.classList.add('fa-moon');
    }
});

// Función que devuelve un color aleatorio de una lista
function getRandomColor() {
    const colores = [
        '#ff7043',  // naranja
        '#4db6ac',  // turquesa
        '#9575cd',  // violeta
        '#fdd835',  // amarillo
        '#81c784',  // verde claro
        '#64b5f6',  // azul
        '#ffb74d',  // naranja suave
        '#90caf9',  // azul cielo
        '#a1887f',  // marrón claro
    ];
    return colores[Math.floor(Math.random() * colores.length)];
}

// Rotar y cambiar color al hacer clic en la tarjeta
const tarjetas = document.querySelectorAll('.tarjeta');

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
        tarjeta.classList.toggle('rotar');

        // Cambia el color solo del frente para que no choque con el reverso oscuro
        const nuevoColor = getRandomColor();
        const front = tarjeta.querySelector('.tarjeta-front');
        front.style.backgroundColor = nuevoColor;
    });
});

// Validación del formulario
const formulario = document.querySelector('#contacto form');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || email === '' || mensaje === '') {
        alert('⚠️ Por favor, rellena todos los campos.');
        return;
    }

    if (!validarEmail(email)) {
        alert('❌ El correo electrónico no es válido.');
        return;
    }

    alert(`✅ Gracias por tu mensaje, ${nombre}!`);
    formulario.reset();
});

function validarEmail(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}
