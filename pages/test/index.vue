<template>
  <div class="text-primary">
    <div class="title">
      <h2>Login</h2>
    </div>
    <div class="container form">
      <label for="email"><b>email</b></label>
      <input v-model="payload.email" type="text" class="input" placeholder="Enter email" name="email" required />

      <label for="psw"><b>Password</b></label>
      <input v-model="payload.password" type="password" class="input" placeholder="Enter Password" name="psw"
        required />

      <button @click.prevent="login" class="button">Login</button>
      <button @click.prevent="logout" class="button">Logout</button>
      <button @click.prevent="checkState" class="button">checkState</button>
    </div>
  </div>
</template>


<script lang="ts" setup>

const payload = {
  email: "",
  password: ""
}

//ยืนยันตน
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();

const login = async () => {
  await authStore.logIn(payload);
  if (authStore.isLogin) {
    navigateTo("character");
  }
};

const checkState = () => {
    const userId = authStore._userId;
    const token = authStore.token;
    console.log(userId, token);
};

const logout = async () => {
  try {
    authStore.logOut();
    navigateTo("/");
  } catch (error) {
    console.error(error);
  }
};
</script>