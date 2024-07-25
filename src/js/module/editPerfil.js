import { updateUser } from "../Acess/endPoints.js";
import erroMsg from "../module/notification.js";

export default function EditPerfil() {
   const button = document.querySelector("#editPerfil");
   const formPerfil = document.querySelector("#formEditPerfil");
   const caseButtons = document.querySelectorAll(".modal button");
   const modal = document.querySelector(".modal");

   if (button && formPerfil) {
      function formCamps(forms) {
         const formData = new FormData(forms);
         let arr = [];
         for (const key of formData.keys()) {
            arr.push(formData.get(`${key}`));
         }
         return arr;
      }

      function caseChange() {
         modal.classList.add("active");
         caseButtons.forEach(element => {
            element.addEventListener("click", ({ target }) => {
               console.log(target.dataset.case);
               if (`${target.dataset.case}` === "denied") {
                  erroMsg("Cancelado", "Cancelado alteração do usuário");
                  modal.classList.remove("active");
               } else {
                  editar();
               }
            });
         });
      }

      function editar() {
         const args = formCamps(formPerfil);
         const data = {
            nome: args[0],
            cpf: args[1],
            matricula: args[2],
            curso: args[3],
            turma: args[4],
            telefone: args[5],
            email: args[args.length - 1]
         };
         updateUser(data);
         modal.classList.remove("active");
      }

      button.addEventListener("click", caseChange);
   }
}
