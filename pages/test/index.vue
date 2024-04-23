<template>
  <div class="text-primary">
    <div class="title">
      <h2>Login</h2>
    </div>
    <div class="container form">
      <label for="email"><b>email</b></label>
      <input v-model="user.email" type="text" class="input" placeholder="Enter email" name="email" required />

      <label for="psw"><b>Password</b></label>
      <input v-model="user.password" type="password" class="input" placeholder="Enter Password" name="psw" required />

      <button @click.prevent="login" class="button">Login</button>
      <button @click.prevent="logout" class="button">Logout</button>
      <button @click.prevent="getUser" class="button">getuser</button>
    </div>
    <div>
      <h1>{{ user.firstname }} {{ user.lastname }}</h1>
      <p>อายุ: {{ user.age }}</p>
      <p>อีเมล: {{ user.email }}</p>
      <p>เพศ: {{ user.gender }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import getUser from "~/composables/oneUser";
const { user } = getUser();

//ยืนยันตน
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";
const { logUserOut } = useAuthStore();
const { authenticateUser } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());

const login = async () => {
  await authenticateUser(user.value);
  if (authenticated) {
    navigateTo("/");
  }
};
const logout = async () => {
  try {
    logUserOut();
    navigateTo("/login");
  } catch (error) {
    console.error(error);
  }
};
</script>
