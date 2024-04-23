import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to) => {
    const { authenticated } = storeToRefs(useAuthStore());
    const token = useCookie('token');
        
    if (authenticated.value !== true || !token ) {
     
      return navigateTo('/');
    }
  });
  