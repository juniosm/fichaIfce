import { singIn, singUp, destroy } from "../Acess/endPoints.js";

export default function Login() {
   const buttonLogin = document.querySelector(".btn-acess");
   const buttonRegister = document.querySelector(".btn-register");
   const offUser = document.querySelector(".off-user");
   const formLogin = document.querySelector(".form-login");
   const formRegister = document.querySelector(".form-register");

   function formCamps(forms) {
      const formData = new FormData(forms);
      let arr = [];
      for (const key of formData.keys()) {
         arr.push(formData.get(`${key}`));
      }
      return arr;
   }

   function login(forms) {
      const args = formCamps(forms);
      singIn(...args);
   }

   function cadastro(forms) {
      const args = formCamps(forms);
      const email = args[args.length - 2];
      const password = args[args.length - 1];
      const data = {
         nome: args[0],
         matricula: args[2],
         telefone: args[5],
         turma: args[4],
         curso: args[3],
         cpf: args[1]
      };
      singUp(email, password, data);
   }

   if (buttonLogin) {
      buttonLogin.addEventListener("click", e => {
         e.preventDefault();
         login(formLogin);
      });
   }

   if (buttonRegister) {
      buttonRegister.addEventListener("click", e => {
         e.preventDefault();
         cadastro(formRegister);
      });
   }

   if (offUser) {
      offUser.addEventListener("click", () => {
         destroy();
      });
   }
}
