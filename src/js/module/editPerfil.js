import { updateUser } from "../Acess/endPoints.js";

export default function EditPerfil() {
   const button = document.querySelector("#editPerfil");
   const formPerfil = document.querySelector("#formEditPerfil");

   function formCamps(forms) {
      const formData = new FormData(forms);
      let arr = [];
      for (const key of formData.keys()) {
         arr.push(formData.get(`${key}`));
      }
      return arr;
   }

   function editar(e) {
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
   }

   button.addEventListener("click", editar);
}
