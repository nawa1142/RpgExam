import { defineStore } from "pinia";

interface UserPayloadInterface {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ email, password }: UserPayloadInterface) {
      const { data, pending }: any = await useFetch("api/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: {
          email,
          password,
        },
      });
      this.loading = pending;

      if (data.value) {
        const token = useCookie("token"/* , {
          httpOnly: true,
          secure: true,
          sameSite: "strict",
          expires: new Date(Date.now() + 6 * 60 * 60 * 1000),
        } */);
        const userId = useCookie("id", /* {
          httpOnly: true,
          secure: true,
          sameSite: "strict",
          expires: new Date(Date.now() + 6 * 60 * 60 * 1000),
        } */);

        token.value = data?.value?.token;
        userId.value = data?.value?.id;
        this.authenticated = true;
      }
    },
    logUserOut() {
      const token = useCookie("token");
      const userId = useCookie("id");
      this.authenticated = false;
      token.value = null;
      userId.value = null;
    },
  },
});
