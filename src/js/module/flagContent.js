export default function flagContent(setor, contentUser, form, btn, btnBack) {
   if (setor && contentUser && form && btn && btnBack) {
      setor.classList.add("active");
      contentUser.classList.add("show");
      const pageHomeChange = (element, e) => {
         setor.classList.remove("active");
         contentUser.classList.remove("show");
         form.classList.add("active");
         localStorage.setItem("email", e.dataset.email);
      };

      const backPage = () => {
         form.classList.remove("active");
         contentUser.classList.add("show");
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
