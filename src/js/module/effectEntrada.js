export default function EffectEntrada(linkc, linkl, ilustracao, form) {
  if (linkc || (linkl && ilustracao && form)) {
    const loginCadastro = a => {
      form.forEach(e => {
        e.classList.remove("active");
      });
      if (a.target.className === "link-cadastro") {
        ilustracao.style.transform = "translate(-120%, 0)";
        form[1].classList.add("active");
      } else {
        ilustracao.style.transform = "translate(0%, 0)";
        form[0].classList.add("active");
      }
    };

    linkc.addEventListener("click", loginCadastro);
    linkl.addEventListener("click", loginCadastro);
  }
}
