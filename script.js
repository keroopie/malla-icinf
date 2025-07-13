const ramos = [
  // PRIMER AÑO
  {
    semestre: 1,
    ramos: [
      { id: "algebra", nombre: "Álgebra y Trigonometría", sct: 8, abre: ["calculo-dif", "algebra-lineal"] },
      { id: "intro-ingenieria", nombre: "Intro. a la Ingeniería", sct: 6 },
      { id: "comunicacion", nombre: "Comunicación Oral y Escrita", sct: 4 },
      { id: "intro-programacion", nombre: "Intro. a la Programación", sct: 9, abre: ["poo"] },
      { id: "formacion-1", nombre: "Formación Integral", sct: 2 },
    ]
  },
  // ... (Todos los demás semestres igual que en tu versión original)
  // SEMESTRE 10
  {
    semestre: 10,
    ramos: [
      { id: "proyecto", nombre: "Proyecto de Título", sct: 10, req: ["anteproyecto"] },
      { id: "seguridad", nombre: "Seguridad Informática", sct: 4 },
      { id: "electivo-4", nombre: "Electivo Profesional IV", sct: 5 },
      { id: "electivo-5", nombre: "Electivo Profesional V", sct: 5 },
      { id: "electivo-6", nombre: "Electivo Profesional VI", sct: 5 },
    ]
  },
];

// Cargar estado guardado
let estadoAprobados = JSON.parse(localStorage.getItem('ramosAprobados')) || {};

function crearMalla() {
  const malla = document.getElementById("malla");
  
  if (!malla) {
    console.error("No se encontró el elemento con ID 'malla'");
    return;
  }

  ramos.forEach((sem) => {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h2>Semestre ${sem.semestre}</h2><div class="ramos"></div>`;
    
    sem.ramos.forEach((ramo) => {
      const btn = document.createElement("button");
      btn.className = "ramo";
      btn.innerHTML = `
        <div class="nombre-ramo">${acortarNombre(ramo.nombre)}</div>
        <div class="sct-ramo">${ramo.sct} créditos</div>
      `;
      btn.id = ramo.id;
      
      // Verificar si ya estaba aprobado
      if (estadoAprobados[ramo.id]) {
        btn.classList.add("aprobado");
        btn.disabled = true;
      } else {
        btn.disabled = deberiaEstarDeshabilitado(ramo);
      }
      
      btn.onclick = () => aprobarRamo(ramo);
      div.querySelector(".ramos").appendChild(btn);
    });
    
    malla.appendChild(div);
  });
}

function deberiaEstarDeshabilitado(ramo) {
  if (!ramo.req || ramo.req.length === 0) return false;
  return ramo.req.some(id => !estadoAprobados[id]);
}

function acortarNombre(nombre) {
  const abreviaciones = {
    "Intro.": "Introducción",
    "Comunic.": "Comunicación",
    "Admin.": "Administración",
    "Gestión": "Gest.",
    "Profesional": "Prof."
  };
  
  return nombre.split(' ').map(palabra => 
    abreviaciones[palabra] || palabra
  ).join(' ');
}

function aprobarRamo(ramo) {
  const btn = document.getElementById(ramo.id);
  btn.classList.add("aprobado");
  btn.disabled = true;
  
  // Guardar en localStorage
  estadoAprobados[ramo.id] = true;
  localStorage.setItem('ramosAprobados', JSON.stringify(estadoAprobados));
  
  // Desbloquear ramos dependientes
  desbloquearRamosDependientes(ramo.id);
}

function desbloquearRamosDependientes(ramoId) {
  ramos.forEach((sem) => {
    sem.ramos.forEach((r) => {
      if (r.req && r.req.includes(ramoId)) {
        r.req = r.req.filter((id) => id !== ramoId);
        if (r.req.length === 0 && !estadoAprobados[r.id]) {
          const desbloqueo = document.getElementById(r.id);
          if (desbloqueo) {
            desbloqueo.disabled = false;
            desbloqueo.classList.add("desbloqueado");
            setTimeout(() => desbloqueo.classList.remove("desbloqueado"), 1000);
          }
        }
      }
    });
  });
}

function resetearProgreso() {
  if (confirm("¿Estás seguro de borrar todo tu progreso?")) {
    localStorage.removeItem('ramosAprobados');
    estadoAprobados = {};
    location.reload();
  }
}

// Inicialización
document.addEventListener("DOMContentLoaded", crearMalla);
