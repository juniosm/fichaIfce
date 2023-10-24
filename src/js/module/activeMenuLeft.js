export default function ActiveMenuLeft(button, tagClass, body) {
  if (button && tagClass && body) {
    const addClass = () => {
      tagClass.classList.toggle("active");
      body.classList.toggle("active");
    };

    button.addEventListener("click", addClass);
  }
}
