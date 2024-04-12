export default function flagContent(setor, form, btn, btnBack) {
   setor.classList.add("active");
   const pageHomeChange = () => {
      setor.classList.remove("active");
      form.classList.add("active");
   };

   const backPage = () => {
      form.classList.remove("active");
      setor.classList.add("active");
   };

   btn.forEach(e => {
      e.addEventListener("click", pageHomeChange);
   });

   btnBack.addEventListener("click", backPage);
}
