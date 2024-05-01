import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  const token = useCookie("token");

  if (token.value) {
    authStore.isLogin = true;
  } else {   
    authStore.isLogin = false;
  }
});