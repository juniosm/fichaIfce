export default function apiSmpt(arquivo) {
   Email.send({
      SecureToken: "1ed5f6ac-9c74-4b47-b759-8ec251a0bde1",
      To: "juniosousa120@gmail.com",
      From: "fichaifce@gmail.com ",
      Subject: "Teste api deas",
      Body: "Second teste de envio",
      Attachments: [
         {
            name: "FichaIfce.pdf",
            data: arquivo
         }
      ]
   }).then(message => alert(message));
}
