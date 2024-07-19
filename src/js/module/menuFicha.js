import ContentRequeriment from "./contentRequeriment.js";

export default function MenuFicha(listElement, location) {
   if (listElement && location) {
      const matriculaMenu = `            
<ul class="col-2 ">
<li>
  <label for="matriculaInstitucional">Matrícula com vínculo institucional</label>
  <input type="text" id="matriculaInstitucional" name="matriculaInstitucional" />
</li>
<li>
  <label for="tracamentoDisciplina">Trancamento de Disciplinas</label>
  <input type="text" id="tracamentoDisciplina" name="tracamentoDisciplina" />
</li>
<li>
  <label for="reabertura">Reabertura de curso</label>
  <input type="text" id="reabertura" name="reabertura" />
</li>
<li>
  <label for="matriculaEspecial">Matrícula especial</label>
  <input type="text" id="matriculaEspecial" name="matriculaEspecial" />
</li>

<li >
  <label for="trancamentoMatricula">Trancamento de matrícula de curso</label>
  <input type="text" id="trancamentoMatricula" name="trancamentoMatricula" />
</li>
<li >
  <label for="reingresso">Reingresso do curso</label>
  <input type="text" id="reingresso" name="reingresso" />
</li>
</ul>`;

      const disciplina = `            
    <ul class="col-2 ">
    <li>
    <div>
        <label for="reajusDisciplina">Reajuste de disciplinas:</label>
        <input type = "radio" name="reajuste" id='reajuste'><label for="reajuste">Inclusão</label>  
        <input type = "radio" name="reajuste" id='reajuste'><label for="reajuste">Exclusão</label> 
      </div>
      <div>
        <input type="text" id="reajusDisciplina" name="reajusDisciplina" />
      </div>
    
    </li>
    <li>
      <label for="aprovDisciplina">Aproveitamento de Disciplinas</label>
      <input type="text" id="aprovDisciplina" name="aprovDisciplina" />
    </li>
    <li>
      <label for="validDisciplina">Validação de disciplinas</label>
      <input type="text" id="validDisciplina" name="validDisciplina" />
    </li>
    <li>
      <label for="reviNota">Revisão de notas</label>
      <input type="text" id="reviNota" name="reviNota" />
    </li>
    <li>
      <label for="justFaltas">Justificativa de faltas de disciplinas</label>
      <input type="text" id="justFaltas" name="justFaltas" />
    <li>
    </ul>`;
      const editais = `            
    <ul class="col-2 ">
    <li>
    <label for="transferencia">Edital transferidos e diplomados</label>
      <div>
        <input type = "radio" name="trandip"> <label>Interna</label>
        <input type = "radio" name="trandip"> <label>Externa</label>
        <input type = "radio" name="trandip"> <label>Diplomados</label>
      </div>
      <div>
        <input type="text" id="transferencia" name="transferencia" placeholder= "Curso:" />
    </li>
    </div>
    <li>
      <label for="procesoSeletivo">Edital processo seletivo</label>
      <div>
       <input type = "radio" name="modalidade"><label>Integrado Interna</label>
       <input type = "radio" name="modalidade"><label>Subsequente Interna</label>
      </div>
      <div>
        <input type="text" id="procesoSeletivo" name="procesoSeletivo" placeholder= "Curso:" />
      </div>
      
    </li>
    <li>
      <label for="monitoriaDisiplina">Monitoria</label>
      <input type="text" id="monitoriaCurso" name="monitoriaCurso" placeholder ="Curso"/>
      <input type="text" id="monitoriaDisiplina" name="monitoriaDisiplina" placeholder="Disciplina"/>
    </li>
    </ul>`;
      const outros = `<ul class="col-2 ">
    <li>
    <input type = "checkbox" name="ensino_domiciliar" id="ensino_domiciliar" value=""/>
      <label for="ensino_domiciliar">Regime de ensino domiciliar</label>
    </li>
    <li>
    <input type = "checkbox" name="intercambio" id="intercambio" value=""/>
      <label for="intercambio">Afastamento para intercâmbio nacional ou internacional</label>
    </li>
    <li>
    <input type = "checkbox" name="ensino_domiciliar" id="colacao" value=""/>
      <label for="colacao">Colação de grau especial</label>
    </li>
  
    <li>
    <input type = "checkbox" name="certificacao" id="certificao" value=""/>
      <label for="certificao">Certificação ou ceritificacao</label>
    </li>
    <li>
    <input type = "checkbox" name="enem" id="enem" value=""/>
      <label for="enem">Certificação ou declaração de proficiência do ENEM</label>
    </li>
    <li>
    <label for="outro">Outro</label>
    <input type="text" id="outro" name="outro" placeholder="Outros"/>

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

         ContentRequeriment();
         if (link.target.href.includes("disciplina")) {
            location.innerHTML = disciplina;
            ContentRequeriment();
            return;
         } else if (link.target.href.includes("edital")) {
            location.innerHTML = editais;
            ContentRequeriment();
            return;
         } else if (link.target.href.includes("outros")) {
            location.innerHTML = outros;
            ContentRequeriment();
            return;
         }
         location.innerHTML = matriculaMenu;
         ContentRequeriment();
         return;
      };

      listElement.forEach(e => {
         e.addEventListener("click", MenuAtual);
      });
   }
}
