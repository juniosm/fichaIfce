export default function MenuFicha(listElement, location) {
  if (listElement && location) {
    const matriculaMenu = `            
<ul class="col-2 ">
<li>
  <label>Matrícula com vínculo institucional</label></input>
  <input type="text" id="name2" name="name2" />
</li>
<li>
  <label>Trancamento de Disciplinas</label></input>
  <input type="text" id="name2" name="name2" />
</li>
<li>
  <label>Reabertura de curso</label></input>
  <input type="text" id="name2" name="name2" />
</li>
<li>
  <label>Matrícula especial</label></input>
  <input type="text" id="name2" name="name2" />
</li>
<li>
  <label>Matrícula especial</label></input>
  <input type="text" id="name2" name="name2" />
<li>
  <label>Trancamento de matrícula de curso</label></input>
  <input type="text" id="name2" name="name2" />
</li>
<li class="col-2">
  <label>Reingresso do curso</label></input>
  <input type="text" id="name2" name="name2" />
</li>
</ul>`;

    const disciplina = ``;
    const editais = ``;
    const outros = ``;

    location.innerHTML = matriculaMenu;
    listElement[0].classList.add("active");

    const MenuAtivo = link => {
      listElement.forEach(e => {
        e.classList.remove("active");
      });
      link.classList.add("active");
    };

    const MenuAtual = link => {
      MenuAtivo(link.target);
      if (link.target.href.includes("disciplina")) {
        return (location.innerHTML = disciplina);
      } else if (link.target.href.includes("edital")) {
        return (location.innerHTML = editais);
      } else if (link.target.href.includes("outros")) {
        return (location.innerHTML = outros);
      }

      return (location.innerHTML = matriculaMenu);
    };

    listElement.forEach(e => {
      e.addEventListener("click", MenuAtual);
    });
  }
}
