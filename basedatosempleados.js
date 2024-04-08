let empleados=Array(
    {
       id:1,
       nombre:"Manuela Sánchez",
       cargo:"Programador",
       telefono:"3225546077",
       correo:"Wendysanchez1716@gmail.com",
       salario:13000000,
       contactoEmergencia:"3122815439",
       foto:"./img/img1.jpg"
    },
    {
       id:2,
       nombre:"Manuel Garcia",
       cargo:"Contador",
       telefono:"3225546088",
       correo:"Manuel17@gmail.com",
       salario:16000000,
       contactoEmergencia:"3124617438",
       foto:"./img/img2.jpg"
    },
    {
       id:3,
       nombre:"Yuri Alzate",
       cargo:"Diseñadora",
       telefono:"3224567890",
       correo:"Yurialzate@gmail.com",
       salario:18000000,
       contactoEmergencia:"3122358478",
       foto:"./img/img3.jpg"
    },
    {
       id:4,
       nombre:"Mariany Gaviria",
       cargo:"Vendedora",
       telefono:"3228951234",
       correo:"MarianyG@gmail.com",
       salario:14000000,
       contactoEmergencia:"3122358478",
       foto:"./img/img4.jpg"
    },
    {
       id:5,
       nombre:"Mariangel Moscoso",
       cargo:"Bodeguera",
       telefono:"3224567561",
       correo:"Mariangel16@gmail.com",
       salario:12000000,
       contactoEmergencia:"3122458561",
       foto:"./img/img5.jpg"
    },
    {
       id:6,
       nombre:"Paola Sánchez",
       cargo:"Organizadora",
       telefono:"3224562884",
       correo:"Paolas15@gmail.com",
       salario:13000000,
       contactoEmergencia:"3123358478",
       foto:"./img/img6.jpg"
    },
    {
       id:7,
       nombre:"Camila Oquendo",
       cargo:"Aseadora",
       telefono:"3224567879",
       correo:"CamilaR@gmail.com",
       salario:13000000,
       contactoEmergencia:"3122354528",
       foto:"./img/img7.jpg"
    },
    {
       id:8,
       nombre:"Maximiliano Garcia",
       cargo:"Vendedor",
       telefono:"3227897890",
       correo:"Maximiliano15@gmail.com",
       salario:14000000,
       contactoEmergencia:"3122358451",
       foto:"./img/img8.jpg"
    },
    {
       id:9,
       nombre:"Antonella Garcia",
       cargo:"Diseñadora",
       telefono:"3224567562",
       correo:"Antonella120@gmail.com",
       salario:18000000,
       contactoEmergencia:"3122432478",
       foto:"./img/img9.jpg"
    },
    {
       id:10,
       nombre:"Dayana Rios",
       cargo:"Mesera",
       telefono:"3222567890",
       correo:"DayanaR@gmail.com",
       salario:12000000,
       contactoEmergencia:"3122358528",
       foto:"./img/img10.jpeg"
    },
    {
       id:11,
       nombre:"Derly Garcia",
       cargo:"Diseñadora",
       telefono:"3224547890",
       correo:"DerlyGarcia13@gmail.com",
       salario:18000000,
       contactoEmergencia:"3124598478",
       foto:"./img/img11.jpg"
    },
    {
       id:12,
       nombre:"Nicole Rios",
       cargo:"Contadora",
       telefono:"3224524590",
       correo:"Nicoler14@gmail.com",
       salario:16000000,
       contactoEmergencia:"3122356478",
       foto:"./img/img12.jpg"
    },
    {
       id:13,
       nombre:"Mary Querubin",
       cargo:"Surtidora",
       telefono:"3227894560",
       correo:"Maryq1@gmail.com",
       salario:13000000,
       contactoEmergencia:"3125218478",
       foto:"./img/img13.jpg"
    },
    {
       id:14,
       nombre:"Duvian Osorio",
       cargo:"Diseñador",
       telefono:"3225667890",
       correo:"DuvianO@gmail.com",
       salario:18000000,
       contactoEmergencia:"3122123478",
       foto:"./img/img14.jpg"
    },
    {
       id:15,
       nombre:"Camilo Londoño",
       cargo:"Bodeguero",
       telefono:"3221547890",
       correo:"CamiloLon12@gmail.com",
       salario:12000000,
       contactoEmergencia:"3122567894",
       foto:"./img/img15.jpg"
    },
    {
       id:16,
       nombre:"Juan Mejia",
       cargo:"Diseñador",
       telefono:"3227567890",
       correo:"JuanM@gmail.com",
       salario:18000000,
       contactoEmergencia:"3124758478",
       foto:"./img/img16.jpg"
    },
    {
       id:17,
       nombre:"Cindy Bohorquez",
       cargo:"Diseñadora",
       telefono:"3224567780",
       correo:"CindyB@gmail.com",
       salario:18000000,
       contactoEmergencia:"3122458478",
       foto:"./img/img17.jpg",
    },
    {
       id:18,
       nombre:"Ximena Rios",
       cargo:"Publicidad",
       telefono:"3224567789",
       correo:"XimenaRios@gmail.com",
       salario:18000000,
       contactoEmergencia:"3122548478",
       foto:"./img/img18.jpg"
    },
    {
       id:19,
       nombre:"Johana Rojas",
       cargo:"Recepcionista",
       telefono:"32245678778",
       correo:"JohanaR@gmail.com",
       salario:14000000,
       contactoEmergencia:"3122357578",
       foto:"./img/img19.jpg"
    },
    {
       id:20,
       nombre:"Manuela Alzate",
       cargo:"Recepcionista",
       telefono:"3224567889",
       correo:"ManuelaA@gmail.com",
       salario:14000000,
       contactoEmergencia:"3122345478",
       foto:"./img/img20.jpg"
       
       

    

    }
)


//creando una referencia al contenedor de empleados
let contenedor=document.getElementById("contenedor")

//pasos para crear una lista dinamica de elementos

//1. debo recorrer la base de datos del problema:
empleados.forEach(function(empleado){
    
    let columna=document.createElement("div")
    columna.classList.add("col")


    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow")


    let foto=document.createElement("img")
    foto.classList.add("img-fluid","mx-auto","d-block")
    foto.src=empleado.foto


    let nombre=document.createElement("h3")
    nombre.textContent=empleado.nombre

    let cargo=document.createElement("h3")
    cargo.textContent=empleado.cargo

    let telefono=document.createElement("h3")
    telefono.textContent=empleado.telefono

    let correo=document.createElement("h3")
    correo.textContent=empleado.correo

    let salario=document.createElement("h3")
    salario.textContent=empleado.salario


    //se asocian las estructuras en orden logico
    
    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    contenedor.appendChild(columna)
    tarjeta.appendChild(cargo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(salario)   
})
