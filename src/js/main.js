import gerarPdf from "./module/gerarPdf.js";
import ActiveMenuLeft from "./module/activeMenuLeft.js";
import MenuFicha from "./module/menuFicha.js";
import EffectEntrada from "./module/effectEntrada.js";

gerarPdf();

const buttonMenuLeft = document.querySelector(".buttonMenuLeft svg");
const tagMenuLeft = document.querySelector(".menu-left");
const bodyContent = document.querySelector(".content-page");

ActiveMenuLeft(buttonMenuLeft, tagMenuLeft, bodyContent);

const list = document.querySelectorAll(".header-content li a");
const local = document.querySelector("#requerimento");

MenuFicha(list, local);

const linkCadastro = document.querySelector(".link-cadastro");
const linkLogin = document.querySelector(".link-login");
const formEntrada = document.querySelectorAll(".form-entrada");
const ilustracao = document.querySelector(".ilustracao");

EffectEntrada(linkCadastro, linkLogin, ilustracao, formEntrada);
