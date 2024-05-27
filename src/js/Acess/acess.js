import { getUser, getSession, supaBaseUrl } from "./endPoints.js";

const url = window.location.origin;
const link = window.location.href;

async function routeAcess() {
   if (
      link !== url + "/entrada.html" &&
      !localStorage.getItem("sb-" + supaBaseUrl + "-auth-token") &&
      !(await getUser())
   ) {
      window.location.href = url + "/entrada.html";
   }
}
routeAcess();
