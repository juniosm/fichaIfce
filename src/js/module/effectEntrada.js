export default function EffectEntrada(linkc, linkl, ilustracao, form) {
   if (linkc || (linkl && ilustracao && form)) {
      const loginCadastro = a => {
         form.forEach(e => {
            e.classList.remove("active");
         });
         if (a.target.className === "link-cadastro") {
            ilustracao.classList.remove("right");
            ilustracao.classList.add("left");
            form[1].classList.add("active");
         } else {
            ilustracao.classList.remove("left");
            ilustracao.classList.add("right");
            form[0].classList.add("active");
         }
      };

      linkc.addEventListener("click", loginCadastro);
      linkl.addEventListener("click", loginCadastro);
   }
}
