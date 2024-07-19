export default function erroMsg(title, msg) {
   $(document).ready(() => {
      $("body").append(`
     <div class ="error-notification ">
     <h1>${title}</h1>
     <div class="details-modal-content">
       <p>
         ${msg}
       </p>
     </div>
     </div>`);

      let notification = setTimeout(() => {
         $(".error-notification").remove();
      }, 8000);
   });
}
