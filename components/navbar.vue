<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <NuxtLink to="/" class="navbar-brand" aria-current="page"><img src="/image/gamelogo.jpg" alt="WebLogo"
                    width="50" height="50" class="d-inline-block align-text-top" /></NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- ส่วนข้อมูลหน้าเว็บหลัก -->
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav d-flex justify-content-between align-items-center">
                    <li v-if="isHomePage" class="nav-item dropdown me-3">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            แนะนำเกม
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">เนื้อเรื่องย่อ</a></li>
                            <li><a class="dropdown-item" href="#">อาชีพ</a></li>
                            <li><a class="dropdown-item" href="#">อาวุธ</a></li>
                            <li><a class="dropdown-item" href="#">เผ่าพันธ์ุ</a></li>
                        </ul>
                    </li>
                    <li v-if="isHomePage" class="nav-item dropdown me-3">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            มีเดีย
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">ภาพวาด</a></li>
                            <li><a class="dropdown-item" href="#">เพลง</a></li>
                        </ul>
                    </li>
                    <li v-if="isHomePage" class="nav-item dropdown me-3">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            คอมมูนิตี้
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Facebook</a></li>
                            <li><a class="dropdown-item" href="#">Youtube</a></li>
                        </ul>
                    </li>

                    <!-- ส่วนปุ่มคำสั่งของผู้ใช้ -->
                    <div class="nav-item position-absolute end-0">
                        <button v-if="authenticated && !isRegistry" type="button"
                            class="buttonHover btn text-danger-emphasis bg-danger-subtle me-2">
                            <NuxtLink to="UserEdit" class="text-danger-emphasis text-decoration-none">แก้ไขข้อมูล
                            </NuxtLink>
                        </button>
                        <button v-if="isHomePage && authenticated" type="button"
                            class="buttonHover btn text-danger-emphasis bg-danger-subtle me-2">
                            <NuxtLink to="characters" class="text-danger-emphasis text-decoration-none">ตัวละคร
                            </NuxtLink>
                        </button>
                        <button v-if="isDynamicRoute" type="button"
                            class="buttonHover btn text-danger-emphasis bg-danger-subtle me-2">
                            <NuxtLink to="/characters" class="text-danger-emphasis text-decoration-none">ย้อนกลับ
                            </NuxtLink>
                        </button>
                        <button v-if="authenticated" type="button"
                            class="buttonHover btn text-danger-emphasis bg-danger-subtle me-2" data-bs-toggle="modal"
                            data-bs-target="#logoutModal">
                            ออกจากระบบ
                        </button>
                        <button v-if="!authenticated" type="button"
                            class="buttonHover btn text-danger-emphasis bg-danger-subtle me-2" data-bs-toggle="modal"
                            data-bs-target="#loginModal">
                            เข้าสู่ระบบ
                        </button>
                        <button v-if="!authenticated" type="button"
                            class="buttonHover btn text-danger-emphasis bg-danger-subtle me-2">
                            <NuxtLink to="UserRegister" class="text-danger-emphasis text-decoration-none">สมัครสมาชิก
                            </NuxtLink>
                        </button>
                    </div>

                    <!-- ส่วนหน้าต่างล๊อคอิน -->
                    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h3 class="modal-title" id="loginModalLabel">เข้าสู่ระบบ</h3>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form @submit.prevent="login">
                                        <div class="row mb-3">
                                            <label for="emil"><b>อีเมล</b></label>
                                            <input v-model="user.email" type="email" class="input"
                                                placeholder="Enter E-mail" name="email" required />
                                        </div>
                                        <div class="row mb-3">
                                            <label for="password"><b>พาสเวิร์ด</b></label>
                                            <input v-model="user.password" type="password" class="input"
                                                placeholder="Enter Password" name="password" required />
                                        </div>
                                        <div class="row">
                                            <div class="text-center">
                                                <button type="submit" class="btn btn-primary">
                                                    เข้าสู่ระบบ
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- ส่วนหน้าต่างล๊อคเอ้า -->
                    <div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="logoutModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="logoutModalLabel">ออกจากระบบ</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    คุณต้องการออกจากระบบหรือไม่
                                    หากยืนยันข้อมูลที่คุณยังไม่บันทึกจะหายไป
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                        ยกเลิก
                                    </button>
                                    <button type="button" class="btn btn-danger" @click="logout">
                                        ล็อกเอาต์
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

//route manage
const route = useRoute();
const isHomePage = route.name === "index";
const isDynamicRoute = computed(() => route.path.startsWith('/characters/'))
const isRegistry = route.name === "UserEdit";

//define function
const { logUserOut } = useAuthStore();
const { authenticateUser } = useAuthStore();

//auth user
const { authenticated } = storeToRefs(useAuthStore());

const user = ref({
    email: "",
    password: "",
});

//ฟังชั่นจัดการ
const login = async () => {
    await authenticateUser(user.value);
    if (authenticated) {
        navigateTo("characters");
    }
};

const logout = async () => {
    try {
        logUserOut();
        if (route.name !== "index") {
            navigateTo("/");
        } else {
            location.reload();
        }
    } catch (error) {
        console.error(error);
    }
};
</script>

<style scoped>
.buttonHover {
    transition: box-shadow 0.3s;
}

.buttonHover:hover {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.918);
}
</style>
