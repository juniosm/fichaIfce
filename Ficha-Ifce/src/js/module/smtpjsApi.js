export default function apiSmpt() {
  Email.send({
    SecureToken: "1ed5f6ac-9c74-4b47-b759-8ec251a0bde1",
    To: "fichaifce@gmail.com",
    From: "fichaifce@gmail.com",
    Subject: "Teste api",
    Body: "Second teste de envio"
  }).then(message => alert(message));
}
