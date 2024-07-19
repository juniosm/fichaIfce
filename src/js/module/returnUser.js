import { selectUser } from "../Acess/endPoints.js";

export default async function returnUser() {
   await selectUser();
   const user = JSON.parse(window.localStorage.getItem("userData"));
   if (user) {
      function selectElement(campo, valor) {
         const select = document.querySelector(campo);
         const formCamp = document.querySelector(".form-ficha");
         if (select) {
            select.value = valor;
            if (!formCamp.classList.contains("perfil")) {
               select.setAttribute("disabled", "disabled");
            }
         }
      }

      function selectCampo(campo, valor) {
         const select = document.querySelector(campo);
         if (select) {
            select.innerText = valor;
         }
      }

      if (window.location.pathname !== "/entrada.html") {
         selectCampo(".user-name", user["nome"]);

         selectElement(".dados-pessoais #nome", user["nome"]);
         selectElement(".dados-pessoais #cpf", user["cpf"]);
         selectElement(".dados-pessoais #matricula", user["matricula"]);
         selectElement(".dados-pessoais #turma", user["turma"]);
         selectElement(".dados-pessoais #curso", user["curso"]);
         selectElement(".dados-pessoais #telefone", user["telefone"]);
         selectElement(".dados-pessoais #email", user["email"]);

         selectCampo(".ficha-canvas .nome", user["nome"]);
         selectCampo(".ficha-canvas .assinatura", user["nome"]);
         selectCampo(".ficha-canvas .cpf", user["cpf"]);
         selectCampo(".ficha-canvas .matricula", user["matricula"]);
         selectCampo(".ficha-canvas .turma", user["turma"]);
         selectCampo(".ficha-canvas .curso", user["curso"]);
         selectCampo(".ficha-canvas .telefone", user["telefone"]);
         selectCampo(".ficha-canvas .email", user["email"]);
      }
   }
}
