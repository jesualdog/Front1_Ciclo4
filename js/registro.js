$(document).ready(function () {
    estadoInicial()
});

function registrar(){
    let name = $("#username").val()
    let email = $("#useremail").val()
    let password = $("#password").val()
    let repeatpassword = $("#passwordrepeat").val()

    let datos={
        email : $("#useremail").val(),
        password : $("#password").val(),
        name : $("#username").val()
    }

    let datosPeticion = JSON.stringify(datos)

    $.ajax({
        url: "http://129.159.51.15:8080/api/user/new",
        type: 'POST',
        data: datosPeticion,
        contentType: "application/JSON",
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta);
            resultado(respuesta)	
        },

        error: function (xhr, status) {		
            console.log("Error! algo Falló");	
        },

        complete: function (xhr, status) {
            console.log("Operacion exitosa"  + status);
        }
    });
}

function resultado(respuesta){
    let id = respuesta.id
    let nombre= respuesta.name

    if (id==null)
        alert("Usuario no Registrado : " + nombre)
    else
        alert("Bienvenido : " + nombre)

}

function estadoInicial(){
    $("#username").focus()
}
