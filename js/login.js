$(document).ready(function () {
    estadoInicial()
});

function login(){
    let email = $("#useremail").val()
    let password = $("#password").val()

    $.ajax({
        url: "http://129.159.51.15:8080/api/user/"+ email + "/" + password,
 
        type: 'GET',
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
        alert("No Exite el Usuario : " + nombre)
    else
        alert("Bienvenido : " + nombre)

}

function estadoInicial(){
    $("#useremail").focus()
}