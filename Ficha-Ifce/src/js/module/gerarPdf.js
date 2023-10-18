import DOMPurify from "dompurify";

import html2canvas from "html2canvas";

import { jsPDF } from "jspdf";

import apiSmpt from "./smtpjsApi";

export default function GerarPdf() {
  let formulario = document.querySelector("#bodyPdf");

  if (formulario) {
    $("#buttonPdf").click(event => {
      event.preventDefault();

      const htpsf = `<div ">
      <p >Nome:<span>${formulario.nome.value} </span></p>
      <p>CPF:${formulario.cpf.value}</p>
      <p>Matricula:${formulario.matricula.value}</p>
      <p>Turma:${formulario.turma.value}</p>
      </div>`;

      let doc = new jsPDF("p", "px", "a4");
      doc.setFontSize(5);
      doc.html(htpsf, {
        callback: function (doc) {
          doc.output("dataurlnewwindow");
        },

        margin: 15
      });
      apiSmpt();
    });
  }
}
