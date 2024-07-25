import { createClient } from "@supabase/supabase-js";
import erroMsg from "../module/notification.js";

export const supaBaseUrl = "gnbhqvrfvojoptozlsre";
const supaBaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(
   `https://${supaBaseUrl}.supabase.co`,
   supaBaseKey
);

const singUp = async (login, password, datas) => {
   const { data, error } = await supabase.auth.signUp({
      email: login,
      password: password,
      options: {
         data: datas
      }
   });
   if (!error) {
      window.location.href = window.location.origin + "/infoEmail.html";
   } else {
      erroMsg("Error", error);
   }
};
const singIn = async (login, password) => {
   const { data, error } = await supabase.auth.signInWithPassword({
      email: login,
      password: password
   });
   if (!error) {
      window.location.href = window.location.origin + "/";
   } else {
      const camp = document.querySelector(".msg-login");
      camp.innerHTML = "Invalid login credentials";
      camp.classList.add("active");
   }
};
const destroy = async (login, password) => {
   const { error } = await supabase.auth.signOut();
   window.localStorage.removeItem("userData");
   window.location.href = window.location.origin + "/entrada.html";
};
const resetPasswordForEmail = async () => {
   const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://example.com/update-password"
   });
};

const changePassword = async password => {
   const { data, error } = await supabase.auth.updateUser({
      password: password
   });
};
const deleteUser = async id => {
   const { data, error } = await supabase.auth.admin.deleteUser(id);
};
const getSession = async () => {
   const { data, error } = await supabase.auth.getSession();
   return { data, error };
};

const getUser = async () => {
   const { data, error } = await supabase.auth.getUser();
   let sessiond = await getSession();
   if (!error) {
      return (
         sessiond.data.session !== null &&
         sessiond.data.session.user.id === data.user.id
      );
   } else {
      localStorage.setItem("sb-" + supaBaseUrl + "-auth-token", "");
      return (window.location.href = window.location.origin + "/entrada.html");
   }
};

const selectUser = async () => {
   let sessionid = (await getSession()).data.session.user;

   const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", sessionid.id);

   error
      ? error
      : window.localStorage.setItem("userData", JSON.stringify(data[0]));
};

const updateUser = async obj => {
   let sessionid = (await getSession()).data.session.user;

   const { data, error } = await supabase
      .from("users")
      .update(obj)
      .eq("id", sessionid.id);

   error
      ? erroMsg("Error", error)
      : erroMsg("Sucesso", "Dados alterado com sucesso");
};

export {
   singIn,
   singUp,
   destroy,
   deleteUser,
   changePassword,
   resetPasswordForEmail,
   getUser,
   getSession,
   selectUser,
   updateUser
};
