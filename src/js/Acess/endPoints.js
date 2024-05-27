import { createClient } from "@supabase/supabase-js";
import erroMsg from "../module/notification.js";

export const supaBaseUrl = "gnbhqvrfvojoptozlsre";
const supaBaseKey =
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduYmhxdnJmdm9qb3B0b3psc3JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyMTI1MTAsImV4cCI6MjAyODc4ODUxMH0.LuY8QU1usCh2JIRWv0RBU1xNnU4DmidHU1B3koixdRo";

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
   if (error) {
      erroMsg("Error", error);
   } else {
      window.location.href = window.location.origin + "/infoEmail.html";
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
   return (
      sessiond.data.session !== null &&
      sessiond.data.session.user.id === data.user.id
   );
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

export {
   singIn,
   singUp,
   destroy,
   deleteUser,
   changePassword,
   resetPasswordForEmail,
   getUser,
   getSession,
   selectUser
};
