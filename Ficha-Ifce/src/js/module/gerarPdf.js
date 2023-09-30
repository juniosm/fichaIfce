import DOMPurify from "dompurify";

import html2canvas from "html2canvas";

import { jsPDF } from "jspdf";

export default function GerarPdf() {
  let htmlPdf = ` <div><h1>teste</h1></div>`;

  $("#button").click(event => {
    event.preventDefault();

    var doc = new jsPDF();
    doc.html($("#ID-pdf").html(), {
      callback: function (doc) {
        doc.output("dataurlnewwindow");
      }
    });

    doc.setProperties({
      title: "Ficha"
    });
    // doc.output("dataurlnewwindow");
  });
}
