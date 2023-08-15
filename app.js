let medicos = [];
let pacientes = new Array;
let turnos;


const nombre = document.querySelector("#nombre");
const dni = document.querySelector("#dni");
const fechaNacimiento = document.querySelector("#fechaNacimiento");
const formulario = document.querySelector("#formm");


if (localStorage.getItem("turnos") == null) {
    turnos = [];
  } else {
    turnos = JSON.parse(localStorage.getItem("turnos"));
  }
  

let formularioTurnos = document.querySelector("#formTurnos");
let contenedorTurnos = document.querySelector("#contenedorTurnos");
const servicio = document.querySelector("#servicio");
const dniMedico = document.querySelector("#dniMedico");
const dia = document.querySelector("#fechadia");
const horainicio = document.querySelector("#horainicio");
const horafin = document.querySelector("#horafin");
const frecuencia = document.querySelector("#frecuencia");


formularioTurnos.addEventListener("submit",e =>{
    e.preventDefault();

    
    const eventoNuevo = {
        id: Date.now().toString(36),
        servicio: servicio.value,
        dniMedico: dniMedico.value,
        dia: dia.value,
        horainicio: horainicio.value,
        horafin: horafin.value,
        frecuencia: frecuencia.value,
    };

    turnos.push(eventoNuevo);

    localStorage.setItem("turnos", JSON.stringify(turnos));

    mostrarTurnos();

    

    formularioTurnos.reset();
});

function mostrarTurnos(){
    
    contenedorTurnos.innerHTML = "";

    turnos.forEach((turno) => {

        let turn = document.createElement("div");
        let dia = document.createElement("p");
        dia.innerHTML = `Dia: ${turno.dia}`;
        turn.appendChild(dia);
        let servicio = document.createElement("p");
        servicio.innerHTML = `Servicio: ${turno.servicio}`;
        turn.appendChild(servicio);
        let medico = document.createElement("p");
        medico.innerHTML = `Medico: ${turno.dniMedico}`;
        turn.appendChild(medico);
        let horainicio = document.createElement("p");
        horainicio.innerHTML = `Hora inicio: ${turno.horainicio}`;
        turn.appendChild(horainicio);
        let horafin = document.createElement("p");
        horafin.innerHTML = `Hora fin: ${turno.horafin}`;
        turn.appendChild(horafin);
        let frecuencia = document.createElement("p");
        frecuencia.innerHTML = `Frecuencia de los turnos: ${turno.frecuencia} minutos.`;
        turn.classList.add("turnito");
        turn.appendChild(frecuencia);
        let boton = document.createElement("div");
        let buton = document.createElement("button");
        buton.innerHTML = "eliminar";
        buton.setAttribute("data-id", turno.id);
        buton.classList.add("bDelete");
        
        boton.appendChild(buton);
        turn.appendChild(boton);
        contenedorTurnos.appendChild(turn);

    });

};
contenedorTurnos.addEventListener("click", (e) => {
    if (e.target.classList.contains("bDelete")) {
        const id = e.target.getAttribute("data-id");
        turnos = turnos.filter(turno => turno.id !== id);
        localStorage.setItem("turnos", JSON.stringify(turnos));
        mostrarTurnos();
    }
});


mostrarTurnos();


