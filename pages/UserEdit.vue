<template>
  <header>
    <navbar :currentPath="$route.path" />
  </header>
  <div class="container">
    <div class="row">
      <div class="col-md-7 mx-auto text-center">
        <h1 class="display-3 text-bg-dark mt-3 mb-3 rounded-2">แก้ไขข้อมูลผู้ใช้</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-7 mx-auto">
        <div class="card">
          <div class="card-body bg-dark-subtle">
            <form @submit.prevent="updateData">
              <div class="form-group mt-2">
                <label for="firstname">ชื่อ:</label>
                <input type="text" class="form-control" id="firstname" v-model="userEdit.firstname"
                  :placeholder="user.firstname" required>
              </div>
              <div class="form-group mt-2">
                <label for="lastname">นามสกุล:</label>
                <input type="text" class="form-control" id="lastname" v-model="userEdit.lastname"
                  :placeholder="user.lastname" required>
              </div>
              <div class="form-group mt-2">
                <label for="age">อายุ:</label>
                <input type="number" class="form-control" id="age" v-model="userEdit.age" :placeholder="user.age"
                  required>
              </div>
              <div class="form-group mt-2">
                <label for="email">อีเมล:</label>
                <input type="email" class="form-control" id="email" v-model="userEdit.email" :placeholder="user.email"
                  disabled>
              </div>
              <div class="form-group mt-2">
                <label for="gender">เพศ:</label>
                <select class="form-control" id="gender" v-model="userEdit.gender" required>
                  <option value="other">อื่นๆ</option>
                  <option value="male">ชาย</option>
                  <option value="female">หญิง</option>
                </select>
                <div class="text-center mt-3">
                  <button type="button" class="btn btn-primary" @click="confirmSubmit">บันทึกการแก้ไข</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import getUser from "~/composables/oneUser";
const { user } = getUser();

const userEdit = ref({
  firstname: "",
  lastname: "",
  age: "",
  email: "",
  gender: ""
});

const confirmSubmit = () => {
  if (confirm('คุณแน่ใจหรือไม่ว่าต้องการบันทึกการแก้ไข?')) {
    updateData();
  }
};

const updateData = async () => {
  try {
    const response = await $fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(userEdit),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    alert("อัพเดทข้อมูลเสร็จสิ้น!")
    console.log('ส่งข้อมูลสำเร็จ ข้อมูลตอบกลับ', response)
    navigateTo("characters")
  } catch (error) {
    console.error('เกิดข้อผิดพลาดในการเรียก API:', error);
  }
};

definePageMeta({
  middleware: [
    'auth',
  ],
});

useHead({
  title: "แก้ไขข้อมูลผู้ใช้",
});
</script>

<style scoped></style>