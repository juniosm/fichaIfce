import DOMPurify from "dompurify";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import erroMsg from "./notification";
import ContentRequeriment from "./contentRequeriment";

// import apiSmpt from "./smtpjsApi";

export default function GerarPdf() {
   $("#pdfView").click(e => {
      if (!ContentRequeriment()) {
         erroMsg("Inválido", "Prencha o campo desejado para avançar");
      } else {
         $(".ficha-canvas").addClass("active");
      }
   });

   $(".ficha-canvas").click(({ target }) => {
      if (target !== $(".ficha-inner")[0]) {
         target.classList.remove("active");
      }
   });
   let formulario = document.querySelector("#bodyPdf");

   if (formulario) {
      $("#buttonPdf").click(event => {
         event.preventDefault();
         $(".flex-check div").addClass("active");

         let imgData = "../../public/img/IFCE-logo.png";

         let doc = new jsPDF("p", "px", "a4");
         doc.setProperties({
            title: "SolicitaçãoIfceCrato.pdf"
         }).html(formulario, {
            callback: function (doc) {
               // doc.addImage(imgData, "PNG", 20, 20, 160, 31);
               doc.output("dataurlnewwindow", { filename: "FichaIfce.pdf" });
               // doc.output("datauristring");
            },
            html2canvas: {
               scale: 0.48,
               letterRendering: true,
               allowTaint: true,
               dpi: 180,
               x: -35,
               y: 80
            }
         });
         $(".ficha-canvas").removeClass("active");
      });
      $(".flex-check div").removeClass("active");
   }
}
