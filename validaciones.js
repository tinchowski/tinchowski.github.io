function ValidateEmail(event, inputText){
    event.preventDefault();
    var mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    let fecha_elegida = document.querySelector("#date").valueAsNumber;
    if (campos_completos(inputText)==false){
        //const node = document.createTextNode("Por favor, complete los campos faltantes.");
        var boxMensaje = document.querySelector("#mensaje p");
        boxMensaje.textContent = "Por favor, complete los campos faltantes.";
       
        //alert("Por favor, complete los campos faltantes.");
    }
    else{
        if(mailformat.test(inputText) & campos_completos(inputText)==true){
            if(fecha_hoy() > fecha_elegida){
                //const node = document.createTextNode("Ingrese fecha posterior a la actual.");
                var boxMensaje = document.querySelector("#mensaje p");
                //boxMensaje.append("");
                //boxMensaje.append(node);
                boxMensaje.textContent = "Ingrese fecha posterior a la actual.";
                //alert("Ingrese fecha posterior a la actual.")
                ; return false;}
            else{
               //const node = document.createTextNode("¡Gracias por registrarse en Campo Mendoza!");
                var boxMensaje = document.querySelector("#mensaje p");
                //boxMensaje.append("");
               //boxMensaje.append(node);
               boxMensaje.textContent = "¡Gracias por registrarse en Campo Mendoza!";
                //alert("¡Gracias por registrarse en Campo Mendoza!");

            }
            }
            
        else{
            //const node = document.createTextNode("Correo electrónico inválido.");
            var boxMensaje = document.querySelector("#mensaje p");
            //boxMensaje.append("");
             //boxMensaje.append(node);
             boxMensaje.textContent = "Correo electrónico inválido.";
            //alert("Correo electrónico inválido.");

        }
    }
    }
    
    function campos_completos(inputText){
        if(document.querySelector("#date").value !='' & document.querySelector("#fullname")!='' & document.querySelector("#cant_personas").value !='' & inputText!='' & document.querySelector("#photo").value != ''){
            return true;}
            else{return false;}
        
    }


function fecha_hoy(){
    const date = new Date();

    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    let anio = date.getFullYear();
    
    let currentDate = Date.parse(`${anio}-${mes}-${dia}`);
    return currentDate;}


function cambia_label(){
    var texto_boton = document.querySelector("#contacto > div > div > div.form_contacto > form > label.file-label");
    var archivo_sel = document.querySelector("#photo").files;
    if (archivo_sel.length == 1){
        texto_boton.textContent = "Foto seleccionada.";
    }
}

document.querySelector("#photo").addEventListener('change',cambia_label)
