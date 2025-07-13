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
  {
    semestre: 2,
    ramos: [
      { id: "calculo-dif", nombre: "Cálculo Diferencial", sct: 6, req: ["algebra"], abre: ["calculo-int", "fisica"] },
      { id: "quimica", nombre: "Química General", sct: 8 },
      { id: "estructuras-discretas", nombre: "Estructuras Discretas", sct: 5, abre: ["estructuras-datos"] },
      { id: "poo", nombre: "Programación O.O.", sct: 8, req: ["intro-programacion"], abre: ["estructuras-datos"] },
      { id: "formacion-2", nombre: "Formación Integral", sct: 2 },
      { id: "formacion-3", nombre: "Formación Integral", sct: 2 },
    ]
  },
  {
    semestre: 3,
    ramos: [
      { id: "calculo-int", nombre: "Cálculo Integral", sct: 6, req: ["calculo-dif"], abre: ["calculo-varias", "ecuaciones", "economia", "estadisticas", "teoria-sistemas"] },
      { id: "algebra-lineal", nombre: "Álgebra Lineal", sct: 5, req: ["algebra"], abre: ["ecuaciones"] },
      { id: "fisica", nombre: "Física Newtoniana", sct: 6, req: ["calculo-dif"], abre: ["electromagnetismo"] },
      { id: "estructuras-datos", nombre: "Estructuras de Datos", sct: 6, req: ["estructuras-discretas", "poo"], abre: ["fundamentos", "bd"] },
      { id: "ingles-1", nombre: "Inglés I", sct: 4, abre: ["ingles-2"] },
      { id: "admin-general", nombre: "Administración General", sct: 3, abre: ["gestion-contable", "teoria-sistemas", "gestion-estrategica"] },
    ]
  },
  {
    semestre: 4,
    ramos: [
      { id: "calculo-varias", nombre: "Cálculo en Varias Variables", sct: 6, req: ["calculo-int"] },
      { id: "ecuaciones", nombre: "Ecuaciones Diferenciales", sct: 5, req: ["calculo-int", "algebra-lineal"], abre: ["ondas"] },
      { id: "electromagnetismo", nombre: "Electromagnetismo", sct: 6, req: ["fisica"], abre: ["ondas"] },
      { id: "modelamiento", nombre: "Modelamiento de Procesos", sct: 7, req: ["estructuras-datos"], abre: ["bd"] },
      { id: "ingles-2", nombre: "Inglés II", sct: 4, req: ["ingles-1"], abre: ["ingles-3"] },
      { id: "formacion-4", nombre: "Formación Integral", sct: 2 },
    ]
  },
  {
    semestre: 5,
    ramos: [
      { id: "ondas", nombre: "Ondas, Óptica y Física Moderna", sct: 6, req: ["ecuaciones", "electromagnetismo"], abre: ["redes"] },
      { id: "digitales", nombre: "Sistemas Digitales", sct: 5, abre: ["arquitectura"] },
      { id: "fundamentos", nombre: "Fundamentos de la CC", sct: 6, req: ["estructuras-datos"], abre: ["algoritmos"] },
      { id: "teoria-sistemas", nombre: "Teoría de Sistemas", sct: 4, req: ["calculo-int", "admin-general"], abre: ["sistemas-info"] },
      { id: "ingles-3", nombre: "Inglés III", sct: 4, req: ["ingles-2"], abre: ["ingles-4"] },
      { id: "gestion-contable", nombre: "Gestión Contable", sct: 4, req: ["admin-general"], abre: ["gestion-financiera"] },
    ]
  },
  {
    semestre: 6,
    ramos: [
      { id: "estadisticas", nombre: "Estadística y Probabilidades", sct: 6, req: ["calculo-int"], abre: ["inv-op"] },
      { id: "economia", nombre: "Economía", sct: 4, req: ["calculo-int"] },
      { id: "algoritmos", nombre: "Análisis y Diseño de Algoritmos", sct: 5, req: ["fundamentos"], abre: ["ia", "so"] },
      { id: "bd", nombre: "Base de Datos", sct: 6, req: ["estructuras-datos", "modelamiento"], abre: ["admin-bd"] },
      { id: "ingles-4", nombre: "Inglés IV", sct: 4, req: ["ingles-3"] },
      { id: "practica-1", nombre: "Práctica Profesional I", sct: 6 },
    ]
  },
  {
    semestre: 7,
    ramos: [
      { id: "inv-op", nombre: "Investigación de Operaciones", sct: 4, req: ["estadisticas"] },
      { id: "arquitectura", nombre: "Arquitectura de Computadores", sct: 6, req: ["digitales"], abre: ["so"] },
      { id: "admin-bd", nombre: "Admin. y Program. BD", sct: 6, req: ["bd"] },
      { id: "sistemas-info", nombre: "Sistemas de Información", sct: 4, req: ["teoria-sistemas"] },
      { id: "gestion-estrategica", nombre: "Gestión Estratégica", sct: 3, req: ["admin-general"], abre: ["gestion-rrhh"] },
      { id: "gestion-financiera", nombre: "Gestión Financiera", sct: 4, req: ["gestion-contable"], abre: ["formulacion"] },
      { id: "formacion-5", nombre: "Formación Integral", sct: 2 },
    ]
  },
  {
    semestre: 8,
    ramos: [
      { id: "legislacion", nombre: "Legislación", sct: 3 },
      { id: "so", nombre: "Sistemas Operativos", sct: 6, req: ["arquitectura", "algoritmos"], abre: ["redes"] },
      { id: "ia", nombre: "Inteligencia Artificial", sct: 4, req: ["algoritmos"] },
      { id: "ingenieria-sw", nombre: "Ingeniería de Software", sct: 5, abre: ["gestion-proyectos"] },
      { id: "formulacion", nombre: "Formulación y Eval. Proyectos", sct: 4, req: ["gestion-financiera"] },
      { id: "practica-2", nombre: "Práctica Profesional II", sct: 9 },
    ]
  },
  {
    semestre: 9,
    ramos: [
      { id: "anteproyecto", nombre: "Anteproyecto de Título", sct: 4, abre: ["proyecto"] },
      { id: "redes", nombre: "Comunic. de Datos y Redes", sct: 5, req: ["so", "ondas"] },
      { id: "electivo-1", nombre: "Electivo Profesional I", sct: 5 },
      { id: "gestion-proyectos", nombre: "Gestión de Proyectos SW", sct: 4, req: ["ingenieria-sw"] },
      { id: "gestion-rrhh", nombre: "Gestión RRHH", sct: 3, req: ["gestion-estrategica"] },
      { id: "electivo-2", nombre: "Electivo Profesional II", sct: 5 },
      { id: "electivo-3", nombre: "Electivo Profesional III", sct: 5 },
    ]
  },
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

function crearMalla() {
  const malla = document.getElementById("malla");
  ramos.forEach((sem) => {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h2>Semestre ${sem.semestre}</h2><div class="ramos"></div>`;
    sem.ramos.forEach((ramo) => {
      const btn = document.createElement("button");
      btn.className = "ramo";
      btn.innerText = ramo.nombre;
      btn.id = ramo.id;
      btn.disabled = ramo.req && ramo.req.length > 0;
      btn.onclick = () => aprobarRamo(ramo);
      div.querySelector(".ramos").appendChild(btn);
    });
    malla.appendChild(div);
  });
}

function aprobarRamo(ramo) {
  const btn = document.getElementById(ramo.id);
  btn.classList.add("aprobado");
  btn.disabled = true;
  ramos.forEach((sem) => {
    sem.ramos.forEach((r) => {
      if (r.req && r.req.includes(ramo.id)) {
        r.req = r.req.filter((id) => id !== ramo.id);
        if (r.req.length === 0) {
          const desbloqueo = document.getElementById(r.id);
          if (desbloqueo) desbloqueo.disabled = false;
        }
      }
    });
  });
}

window.onload = crearMalla;
