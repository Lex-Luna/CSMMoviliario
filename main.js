/* var firebase = require('firebase/compat/app');
require('firebase/compat/firestore'); */

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



formulario.addEventListener("submit", async(e) => {
        e.preventDefault();
        const nombre = formulario["Nombre"].value;
        const telefono = formulario["Telefono"].value;
        const mail = formulario["Mail"].value;
        const mensaje = formulario["Mensaje"].value;
        /* console.log(nombre, telefono, mail, mensaje); */
        await saveCliente(nombre, telefono, mail, mensaje);
        formulario.reset();
    })
    //console.log(response);