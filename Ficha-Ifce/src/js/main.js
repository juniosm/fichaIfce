import gerarPdf from "./module/gerarPdf.js";
import ActiveMenuLeft from "./module/activeMenuLeft.js";
import MenuFicha from "./module/menuFicha.js";
import EffectEntrada from "./module/effectEntrada.js";

gerarPdf();

const buttonMenuLeft = document.querySelector(".buttonMenuLeft");
const tagMenuLeft = document.querySelector(".menu-left");
const bodyContent = document.querySelector(".content-page");

ActiveMenuLeft(buttonMenuLeft, tagMenuLeft, bodyContent);

const list = document.querySelectorAll(".header-content li a");
const local = document.querySelector("#requerimento");

MenuFicha(list, local);

const linkEntrada = document.querySelector(".link-cadastro");
const formEntrada = document.querySelector(".form-entrada");
const ilustracao = document.querySelector(".ilustracao");

EffectEntrada(linkEntrada, , ilustracao, formEntrada);
