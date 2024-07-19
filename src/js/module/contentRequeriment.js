export default function ContentRequeriment() {
   const requerimento = document.querySelectorAll(
      "#requerimento input[type='text'], #requerimento input[type='checkbox'], #requerimento input[type='radio']"
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
            if (e.value !== "" && e.type !== "radio") {
               campResult.innerHTML += `
            <li class="item-result">
            <span>${e.labels[0].textContent} </span>
            <p>${e.value}</p>
            </li>`;
            } else if (e.checked === true && e.type !== "radio") {
               campResult.innerHTML += `
            <li class="item-result flex-check">
            <span class="creat-checkbox"></span>
            <div>${e.labels[0].textContent} </div>
            </li>`;
            } else if (e.type === "radio") {
               const text = document.querySelector(
                  "#requerimento input[type='text']"
               );
               campResult.innerHTML += `
               <li class="item-result ">
               <span>${text.labels[0].textContent}</span>
               <p>${text.value}</p>
               <div class="flex-check">
               <span class="creat-checkbox"></span>
               <div>${e.labels[0].textContent} </div>
               </div>
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
