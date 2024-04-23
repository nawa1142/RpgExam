<template>
  <header>
    <navbar :currentPath="$route.path" />
  </header>

  <head>
    <title>สมัครสมาชิก</title>
  </head>
  <div class="container mt-5 text-light">
    <div class="row">
      <div class="col-md-5 mx-auto text-center">
        <h1 class="display-3">สมัครสมาชิก</h1>
        <div class="message text-danger" v-if="errorMessage">{{ errorMessage }}</div>
      </div>
    </div>
    <div class="row">
      <div class="col-11 col-md-7 mt-5 mx-auto card">
        <div class="card-body">
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="username" class="form-label">ไอดีผู้ใช้</label>
              <input type="text" class="form-control" id="username" v-model="formData.username" required>
            </div>
            <div class="mb-3">
              <label for="firstname" class="form-label">ชื่อ</label>
              <input type="text" class="form-control" id="firstname" v-model="formData.firstname" required>
            </div>
            <div class="mb-3">
              <label for="lastname" class="form-label">นามสกุล</label>
              <input type="text" class="form-control" id="lastname" v-model="formData.lastname" required>
            </div>
            <div class="mb-3">
              <label for="age" class="form-label">อายุ</label>
              <input type="number" class="form-control" id="age" v-model="formData.age" required>
            </div>
            <div class="mb-3">
              <label for="gender" class="form-label">เพศ</label>
              <select id="gender" name="gender" v-model="selectedGender" required>
                <option value="male">ชาย</option>
                <option value="female">หญิง</option>
                <option value="other">อื่นๆ</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">อีเมล</label>
              <input type="email" class="form-control" id="email" v-model="formData.email" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">รหัสผ่าน</label>
              <input type="password" class="form-control" id="password" v-model="formData.password" required>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">สร้างไอดีผู้ใช้</button>
            </div>            
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const formData = ref({
  username: '',
  firstname: '',
  lastname: '',
  age: null,
  email: '',
  password: '',
  gender: ''
});

const selectedGender = ref('other');
const errorMessage = ref('');

const submitForm = async () => {
  try {
    formData.value.gender = selectedGender.value;
    const response = await $fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(formData.value),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const responseData = response.data;
    console.log('ส่งข้อมูลสำเร็จ!');
    console.log('ข้อมูลผู้ใช้:', responseData);
    alert('สมัครสมาชิกสำเร็จ !');
    navigateTo('/');
  } catch (error) {
    console.log(error);
    errorMessage.value = 'ชื่อผู้ใช้ หรือ อีเมลนี้มีอยู่แล้ว';
  }
};

useHead({
    title: "สมัครสมาชิก",
});
</script>

<style scoped></style>