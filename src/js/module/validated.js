export default function Validate() {
   $(document).ready(() => {
      $("#nome, #curso").change(function (e) {
         validaCamp(e, "text");
      });
      $("input[type='email']").change(function (e) {
         this.classList.add("escrito");
         validaCamp(e, "email");
      });
      $("input[type='password']").change(function (e) {
         validaCamp(e, "password");
      });

      $("#cpf").change(function (e) {
         validaCamp(e, "cpf");
      });

      $("#matricula").change(function (e) {
         validaCamp(e, "matricula");
      });

      $("#turma").change(function (e) {
         validaCamp(e, "turma");
      });

      $("#telefone").change(function (e) {
         validaCamp(e, "telefone");
      });

      $(".btn-register").attr("disabled", "disabled");
   });

   function validRegex(valor, props) {
      const objectRegex = {
         text: {
            regex: /^[a-záàâãéèêíïóôõöúçñ ]+$/i,
            rules: "Insira somente texto"
         },
         email: {
            regex: /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i,
            rules: "Insira um email valido"
         },
         password: {
            regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
            rules: "Insira uma senha valida, pelo menos uma letra e um número"
         },
         cpf: {
            regex: /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i,
            rules: "Insira um CPF valido"
         },
         matricula: {
            regex: /^[0-9]{13,}$/i,
            rules: "Insira uma matricula valida"
         },
         turma: {
            regex: /^[0-9]{1,1}$/i,
            rules: "Insira uma Turma valida"
         },
         telefone: {
            regex: /^\(?[1-9]{2}\)? ?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/i,
            rules: "Insira um Telefone valido"
         }
      };
      let ret = objectRegex[props].regex;
      let valido = ret.test(valor);

      return { valido, rule: objectRegex[props].rules };
   }

   function campErros(target, condicional, msg) {
      if (condicional) {
         $(`#${target.id} ~ .error-input`).removeClass("active");
         onFormUpdate(true);
         return true;
      } else {
         $(`#${target.id} ~ .error-input`).addClass("active");
         $(`#${target.id} ~ .error-input`).html(msg);
         onFormUpdate(false);
         return false;
      }
   }

   function validaCamp({ target }, camp) {
      const res = target.value;
      const validObject = validRegex(res, `${camp}`);
      return campErros(target, validObject.valido, validObject.rule);
   }

   function onFormUpdate(bool) {
      let campos = document.querySelectorAll(".valid input");
      // let arrayCampos = Object.values(campos);
      let teste = [];
      campos.forEach((e, i) => {
         if (e.value !== "") {
            return teste.push(true);
         } else {
            return teste.push(false);
         }
      });

      if (!teste.includes(false) && bool) {
         $(".btn-register").removeAttr("disabled");
      } else {
         $(".btn-register").attr("disabled");
      }
   }
}
