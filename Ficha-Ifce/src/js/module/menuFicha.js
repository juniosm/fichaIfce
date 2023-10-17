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

    const disciplina = `            
    <ul class="col-2 ">
    <li>
      <label>Reajuste de disciplinas</label></input>
      <input type = "radio" name="reajuste">Inclusão</input>
      <input type = "radio" name="reajuste">Exclusão</input>
      <input type="text" id="name2" name="name2" />
      
    </li>
    <li>
      <label>Aproveitamento de Disciplinas</label></input>
      <input type="text" id="name2" name="name2" />
    </li>
    <li>
      <label>Validação de disciplinas</label></input>
      <input type="text" id="name2" name="name2" />
    </li>
    <li>
      <label>Revisão de notas</label></input>
      <input type="text" id="name2" name="name2" />
    </li>
    <li>
      <label>Justificativa de faltas de disciplinas</label></input>
      <input type="text" id="name2" name="name2" />
      <input type= "file"/>
    <li>
    </ul>`;
    const editais = `            
    <ul class="col-2 ">
    <li>
      <label>Edital transferidos e diplomados</label></input>
      <br>
      <input type = "radio" name="trandip">Interna</input>
      <input type = "radio" name="trandip">Externa</input>
      <input type = "radio" name="trandip">Diplomados</input>
      <input type="text" id="name2" name="name2" placeholder= "Curso:" />
    </li>
    <li>
      <label>Edital processo seletivo</label></input>
      <br>
      <label>Modalidade:</label>
      <input type = "radio" name="modalidade">Integrado</input>
      <input type = "radio" name="modalidade">Subsequente</input>
      <input type="text" id="name2" name="name2" placeholder= "Curso:" />
    </li>
    <li>
      <label>Monitoria</label></input>
      <input type="text" id="name2" name="name2" placeholder = "Curso"/>
      <input type= "text" placeholder = "Disciplina"/>
    </li>
    </ul>`;
    const outros = `<ul class="col-2 ">
    <li>
      <label>Regime de ensino domiciliar</label></input>
      <input type = "checkbox" name="ensino_domiciliar"/>
      <input type="text" id="name2" name="name2" />
    </li>
    <li>
      <label>Afastamento para intercâmbio nacional ou internacional</label></input>
      <input type = "checkbox" name="intercambio"/>
      <input type="text" id="name2" name="name2" />
    </li>
    <li>
      <label>Colação de grau especial</label></input>
      <input type = "checkbox" name="ensino_domiciliar"/>
      <input type="text" id="name2" name="name2" />
    </li>
  
    <li>
      <label>Certificação ou ceritificacao</label></input>
      <input type = "checkbox" name="certificacao"/>
      <input type="text" id="name2" name="name2" />
      <input type = "file">
    </li>
    <li>
      <label>Certificação ou declaração de proficiência do ENEM</label></input>
      <input type = "checkbox" name="enem"/>
      <input type="text" id="name2" name="name2" />
      <input type = "file">
    </li>
    <li>
      <label>Outro</label></input>
      <input type = "checkbox" name="outro"/>
      <input type="text" id="name2" name="name2" />
  </li>

    </ul>`;

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
