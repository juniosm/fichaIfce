export default function ContentRequeriment() {
   const requerimento = document.querySelectorAll(
      "#requerimento input[type='text'], #requerimento input[type='checkbox'] "
   );
   const btnmodal = document.querySelector("#pdfView");
   const campResult = document.querySelector(".itens-request");
   if (requerimento && btnmodal && campResult) {
      const authButton = () => {
         let arr = [];
         requerimento.forEach(e => {
            if (e.value !== "" || e.checked !== false) {
               arr.push(true);
            } else {
               arr.push(false);
            }
         });
         if (arr.includes(true)) {
            return true;
            // btnmodal.removeAttribute("disabled");
         } else {
            return false;
         }
      };

      const insertValue = () => {
         campResult.innerHTML = "";
         requerimento.forEach(e => {
            if (e.value !== "") {
               campResult.innerHTML += `
            <li class="item-result">
            <span>${e.labels[0].textContent} </span>
            <p>${e.value}</p>
            </li>`;
            } else if (e.checked === true) {
               campResult.innerHTML += `
            <li class="item-result flex-check">
            <span class="creat-checkbox"></span>
            <div>${e.labels[0].textContent} </div>
            </li>`;
            }
         });
      };

      btnmodal.addEventListener("click", e => {
         insertValue();
      });
      requerimento.forEach(e => {
         e.addEventListener("change", authButton);
      });

      return authButton();
   }
}
