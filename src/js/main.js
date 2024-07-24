import gerarPdf from "./module/gerarPdf.js";
import ActiveMenuLeft from "./module/activeMenuLeft.js";
import MenuFicha from "./module/menuFicha.js";
import EffectEntrada from "./module/effectEntrada.js";
import FlagContent from "./module/flagContent.js";
import Login from "./module/login.js";
import ReturnUser from "./module/returnUser.js";
import ContentRequeriment from "./module/contentRequeriment.js";
import Validate from "./module/validated.js";
import EditPerfil from "./module/editPerfil.js";

Validate();

Login();

ReturnUser();

gerarPdf();

const buttonMenuLeft = document.querySelector(".buttonMenuLeft svg");
const tagMenuLeft = document.querySelector(".menu-left");
const bodyContent = document.querySelectorAll(".content-page");

ActiveMenuLeft(buttonMenuLeft, tagMenuLeft, bodyContent);

const list = document.querySelectorAll(".header-content li a");
const local = document.querySelector("#requerimento");

MenuFicha(list, local);

const linkCadastro = document.querySelector(".link-cadastro");
const linkLogin = document.querySelector(".link-login");
const formEntrada = document.querySelectorAll(".form-entrada");
const ilustracao = document.querySelector(".ilustracao");

EffectEntrada(linkCadastro, linkLogin, ilustracao, formEntrada);

const flagSetor = document.querySelector(".flag-setores");
const contentUser = document.querySelector(".content-page.user");
const flagForm = document.querySelector(".flag-form");
const btnsSetores = document.querySelectorAll(".setores li");
const btnBack = document.querySelector(".btnBack");

FlagContent(flagSetor, contentUser, flagForm, btnsSetores, btnBack);

ContentRequeriment();

EditPerfil();
