import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();
  const isLogin = authStore.isLogin;
  const token = useCookie("token");
  if (!isLogin || !token) {
    return navigateTo("/");
  }
});