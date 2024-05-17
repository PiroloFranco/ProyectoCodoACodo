/* Capturar las referencias a todos los input del formulario de contacto*/

const inputNombre = document.getElementById("input-nombre");
const inputApellido = document.getElementById("input-apellido");
const inputPrefijoCelular = document.getElementById("input-prefijo-celular");
const inputNumCelular = document.getElementById("input-num-celular");
const inputEmail = document.getElementById("input-email");
const inputComoNosConociste = document.getElementById("selector-conociste");
const cajaComentario = document.getElementById("caja-comentario");

/* Capturar la referencia al botón de enviar formulario*/
const btnEnviarForm = document.getElementById("btn-enviar-formulario");

//Patrones de Expresiones Regulares (regEx)

/* HAY QUE QUITAR LOS ESPACIOS DEL PRINCIPIO Y DEL FINAL ANTES DE PASARLOS POR EL REGEX !!! */

//Que empiece con una letra, seguida de al menos una letra mas, seguida de cero o ningún espacio, seguido de al menos dos letras
const nombreRegEx = /^[A-Za-zÀ-Öà-öÑñ]{2,40}(\s[A-Za-zÀ-Öà-öÑñ]{2,40})?$/ig;
const apellidoRegEx = nombreRegEx; // se usa la misma expresión regular
const prefijoRegEx = /^[1-9]\d{1,2}$/; //Empieza con un núm del 1 al 9, y termina con 1 ó 2 dígitos
const numCelularRegEx = /^[1-9]\d{6,7}$/; //Empieza con un núm del 1 al 9, seguido por 6 ó 7 dígitos
//Al validador de mails aun le falta impedir mails como jose.....luis@algo.com (no pueden haber mas de un caracter especial repetido)
const emailRegEx = /[a-z0-9][a-z0-9\-\._]{5,29}@[a-z0-9\-]{3,30}\.{1}([a-z]{2,3}|[a-z]{2,3}\.[a-z]{2})$/;


function validarFormulario(e){
    e.preventDefault();
    console.log("ALGUIEN HIZO CLICK EN EL DICHOSO BOTON!")

    const txtInputNombre = inputNombre.value.trim();
    const txtInputApellido = inputApellido.value.trim();
    const txtInputPrefijoCel = inputPrefijoCelular.value.trim();
    const txtInputNumCel = inputNumCelular.value.trim();
    const txtInputMail = inputEmail.value.trim();
    const seleccionComoNosConociste = inputComoNosConociste.value; //Ojo ! Sale opcion1,opcion 2 etc
    const txtCajaComentarios = cajaComentario.value.trim();


    console.log(`Nombre: ${txtInputNombre} Apellido: ${txtInputApellido} Celular: ${txtInputPrefijoCel} ${txtInputNumCel}`);
    console.log(`Email: ${txtInputMail} Comentario: ${txtCajaComentarios}`);
    console.log(`Nos conociste: ${seleccionComoNosConociste}`)
}




//El formulario se valida una vez que se presiona el boton "enviar"
btnEnviarForm.addEventListener("click",validarFormulario)
