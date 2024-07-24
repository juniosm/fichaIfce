export default function ActiveMenuLeft(button, tagClass, body) {
   if (button && tagClass && body) {
      const addClass = () => {
         tagClass.classList.toggle("active");
         body.forEach(element => {
            element.classList.toggle("active");
         });
      };

      button.addEventListener("click", addClass);
   }
}
