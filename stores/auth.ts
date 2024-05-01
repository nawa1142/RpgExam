import { defineStore } from "pinia";

interface UserPayloadInterface {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    isLogin: false,
    _userId: null,
    token: null,
  }),
  actions: {
    async logIn({ email, password }: UserPayloadInterface) {
      try {
        const { data, error }: any = await useFetch("api/login", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            email,
            password,
          },
        });
        if (data) {
          const token = useCookie("token");
          const userId = useCookie("id");
          token.value = data?.value?.token;
          userId.value = data?.value?.id;

          this.isLogin = true;
          this._userId = data?.value?.id;
          this.token = data?.value?.token;
        }
      } catch (error) {
        return error;
      }
    },
    logOut() {
      this.isLogin = false;
      this._userId = null;
      this.token = null;
      const token = useCookie("token");
      const userId = useCookie("id");

      token.value = null;
      userId.value = null;

      this.$reset();
    },
  },
});
