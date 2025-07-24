// script.js

document.addEventListener("DOMContentLoaded", () => {
  const malla = document.getElementById("malla");

  const semestres = [
    {
      nombre: "Primer Semestre",
      ramos: ["Biología Celular", "Química General", "Anatomía I", "Salud Pública I"]
    },
    {
      nombre: "Segundo Semestre",
      ramos: ["Fisiología I", "Química Orgánica", "Anatomía II", "Salud Pública II"]
    }
    // Puedes agregar más semestres aquí
  ];

  semestres.forEach((semestre) => {
    const divSemestre = document.createElement("div");
    divSemestre.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = semestre.nombre;
    divSemestre.appendChild(titulo);

    const container = document.createElement("div");
    container.classList.add("ramos-container");

    semestre.ramos.forEach((ramo) => {
      const divRamo = document.createElement("div");
      divRamo.classList.add("ramo");
      divRamo.textContent = ramo;

      // Eventos para marcar como aprobado
      divRamo.addEventListener("click", () => {
        divRamo.classList.toggle("aprobado");
      });

      container.appendChild(divRamo);
    });

    divSemestre.appendChild(container);
    malla.appendChild(divSemestre);
  });
});
