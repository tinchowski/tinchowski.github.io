// function ValidateEmail(inputText)
// {
// var mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
// if(mailformat.test(inputText))
//     {
// alert("¡Gracias por registrarse en Campo Mendoza!");
// //document.form1.email_input.focus();
// //return true;
// }
// else
// {
// alert("Correo electrónico inválido.");
// //document.form1.email_input.focus();
// //return false;
// }
// }


//-------------------------------FUNCIONA----------------------------------//

// function ValidateEmail(inputText){
// var mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
// if (campos_completos(inputText)==false){
//     alert("Por favor, complete los campos faltantes.");}
// else{
//     if(mailformat.test(inputText) & campos_completos(inputText)==true){
//         alert("¡Gracias por registrarse en Campo Mendoza!");}
//     else{alert("Correo electrónico inválido.");}
// }
// }

// function campos_completos(inputText){
//     if(document.querySelector("#date").value !='' & document.querySelector("#fullname")!='' & document.querySelector("#cant_personas").value !='' & inputText!=''){
//         return true;}
//         else{return false;}
    
// }


//-------------------------------FUNCIONA----------------------------------//

// function valida_campos(){
//     var mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
//     if (campos_completos()==false){
//         alert("Por favor, complete los campos faltantes.");}
//         else{
//             var mail = document.querySelector("#email").value
//             if(mailformat.test(mail) & campos_completos(inputText)==true){
//         alert("¡Gracias por registrarse en Campo Mendoza!");}
//         else{
//         alert("Correo electrónico inválido.");}
//     }
//     }
    
//     function campos_completos(){
//         if(document.querySelector("#date").value !='' & document.querySelector("#fullname")!='' & document.querySelector("#cant_personas")!='' & document.querySelector("#fullname")!='' & document.querySelector("#email").value!=''){
//             return true;}
//             else{return false;}
        
//    }





function ValidateEmail(inputText){
    var mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    let fecha_elegida = document.querySelector("#date").valueAsNumber;
    if (campos_completos(inputText)==false){
        alert("Por favor, complete los campos faltantes.");}
    else{
        if(mailformat.test(inputText) & campos_completos(inputText)==true){
            if(fecha_hoy() > fecha_elegida){alert("Ingrese fecha posterior a la actual.");}
            else{alert("¡Gracias por registrarse en Campo Mendoza!");}
            }
            
        else{alert("Correo electrónico inválido.");}
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