import DOMPurify from "dompurify";

import html2canvas from "html2canvas";

import { jsPDF } from "jspdf";

export default async function GerarPdf() {
  const formulario = document.querySelector("#bodyPdf");
  if (formulario) {
    $("#buttonPdf").click(event => {
      event.preventDefault();
      let doc = new jsPDF();
      doc.html(formulario, {
        callback: function (doc) {
          doc.output("dataurlnewwindow");
        },
        orientation: "portrait",
        unit: "in",
        format: "letter",
        margin: 10
      });
    });
  }
}

// const htpsf = `<div>
// <p>Nome:${formulario.nome.value}</p>
// <p>CPF:${formulario.cpf.value}</p>
// <p>Matricula:${formulario.matricula.value}</p>
// <p>Turma:${formulario.turma.value}</p>
// </div>`;
