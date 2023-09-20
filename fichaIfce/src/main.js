window.jsPDF = window.jspdf.jsPDF;

const nome = document.querySelector("#nome");
const curso = document.querySelector("#curso");
const data = document.querySelector("#data");

$("#button").click(event => {
  event.preventDefault();

  var doc = new jsPDF();
  doc.text(`Nome: ${nome.value}`, 10, 10);
  doc.text(`Curso: ${curso.value}`, 10, 20);
  doc.text(`Data: ${data.value}`, 10, 30);

  doc.setProperties({
    title: "Ficha"
  });
  doc.output("dataurlnewwindow");
});
