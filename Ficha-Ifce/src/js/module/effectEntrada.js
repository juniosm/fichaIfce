export default function EffectEntrada(link, ilustracao, form) {
  const loginCadastro = () => {
    form.classList.remove("active");
    form.classList.add("active");
    ilustracao.classList.add("active");
  };

  link.addEventListener("click", loginCadastro);
}
