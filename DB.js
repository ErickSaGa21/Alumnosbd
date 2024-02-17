// Mostrar el gif inicial
document.getElementById('containermenu').style.display = 'none';
document.getElementById('options').style.display = 'none';
document.getElementById('container').style.display = 'none';
// función para guardar la cuenta en localStorage
function guardarCuenta(cuenta) {
    localStorage.setItem('cuenta', JSON.stringify(cuenta));
}

// cargar la cuenta desde localStorage
function cargarCuenta() {
    const cuentaString = localStorage.getItem('cuenta');
    if (cuentaString) {
        return JSON.parse(cuentaString);
    } else {
        return null; // si no hay una cuenta almacenada
    }
}

// dTOS
const cuenta = {
    usuario: 'Nombre completo',
    contraseña: '123456789',
    correo: 'juan@123.com'
};

// guardar la cuenta
guardarCuenta(cuenta);

// Cargar la cuenta
const cuentaGuardada = cargarCuenta();
console.log(cuentaGuardada);

document.getElementById('singup').addEventListener('click', function() {

})