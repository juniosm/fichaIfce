export default function flagContent(setor, form, btn, btnBack) {
   if (setor && form && btn && btnBack) {
      setor.classList.add("active");
      const pageHomeChange = (element, e) => {
         setor.classList.remove("active");
         form.classList.add("active");
         localStorage.setItem("email", e.dataset.email);
      };

      const backPage = () => {
         form.classList.remove("active");
         setor.classList.add("active");
      };

      btn.forEach(e => {
         e.addEventListener("click", element => {
            pageHomeChange(element, e);
         });
      });

      btnBack.addEventListener("click", backPage);
   }
}
