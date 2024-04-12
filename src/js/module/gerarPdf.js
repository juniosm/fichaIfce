import DOMPurify from "dompurify";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

// import apiSmpt from "./smtpjsApi";

export default function GerarPdf() {
   let formulario = document.querySelector("#bodyPdf");

   if (formulario) {
      $("#buttonPdf").click(event => {
         event.preventDefault();

         let imgData = "../../public/img/IFCE-logo.png";

         let doc = new jsPDF("p", "px", "a4");
         doc.addImage(imgData, "PNG", 20, 20, 160, 31);
         doc.html(formulario, {
            callback: function (doc) {
               doc.output("dataurlnewwindow", { filename: "FichaIfce.pdf" });
               doc.output("datauristring");
            },
            html2canvas: {
               scale: 0.48,
               letterRendering: true,
               dpi: 180,
               x: -35,
               y: -40
            }
         });
      });
   }
}
