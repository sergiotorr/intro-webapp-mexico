document.getElementById('verde').addEventListener('input', function() {
    const valor = this.value;
    const colorVerde = `rgb(0, ${valor}, 0)`;  // Desde negro hasta verde brillante
    document.getElementById('color-verde').style.backgroundColor = colorVerde;
    document.getElementById('verde-hex').textContent = `#00${valor.toString(16).padStart(2, '0')}00`;  // Mostrar el valor hexadecimal
});

document.getElementById('rojo').addEventListener('input', function() {
    const valor = this.value;
    const colorRojo = `rgb(${valor}, 0, 0)`;  // Desde negro hasta rojo brillante
    document.getElementById('color-rojo').style.backgroundColor = colorRojo;
    document.getElementById('rojo-hex').textContent = `#${valor.toString(16).padStart(2, '0')}0000`;  // Mostrar el valor hexadecimal
});
