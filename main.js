const firebaseConfig = {
    apiKey: "AIzaSyB3AJBzqkZE8zVLZ8gJAVRkOeLyBl1aKao",
    authDomain: "csmmobiliario.firebaseapp.com",
    databaseURL: "https://csmmobiliario-default-rtdb.firebaseio.com",
    projectId: "csmmobiliario",
    storageBucket: "csmmobiliario.appspot.com",
    messagingSenderId: "465303066360",
    appId: "1:465303066360:web:a46b8d62debb65b78b4d0d",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
var formulario = document.getElementById('Formu');
const saveCliente = (nombre, telefono, mail, mensaje) =>
    db.collection("Cliente").doc().set({
        nombre,
        telefono,
        mail,
        mensaje
    })
    // Seccion Firebase

formulario.addEventListener("submit", async(e) => {
        e.preventDefault();
        const nombre = formulario["Nombre"];
        const telefono = formulario["Telefono"];
        const mail = formulario["Mail"];
        const mensaje = formulario["Mensaje"];
        try {
            /* console.log(nombre, telefono, mail, mensaje); */
            await saveCliente(nombre.value, telefono.value, mail.value, mensaje.value);
            formulario.reset();
            alert('La información ha sido enviada correctamente');
            nombre.focus();
        } catch (error) {
            alert("No ha sido posible enviar los datos");
        }

    })
    // Termina la seccion Firebase

// Obtén el botón dropdown
var dropdown = document.querySelector('.dropdown');

// Agrega un evento de clic al botón dropdown
dropdown.addEventListener('click', function(event) {
    // Obtén el contenido del dropdown
    var dropdownContent = this.querySelector('.dropdown-content');
    // Alterna la visibilidad del contenido del dropdown
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

//Termina  Seccion Menu Hamburguesa