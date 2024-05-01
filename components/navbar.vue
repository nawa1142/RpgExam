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
                <ul class="navbar-nav me-auto mb-0 mb-lg-0">
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
                </ul>

                <!-- ส่วนปุ่มคำสั่งของผู้ใช้ -->
                <div class="nav-item">
                    <div class="d-flex">
                        <button v-if="authStore.isLogin && !isRegistry" type="button"
                            class="buttonHover btn text-danger-emphasis bg-danger-subtle me-2">
                            <NuxtLink to="UserEdit" class="text-danger-emphasis text-decoration-none">แก้ไขข้อมูล
                            </NuxtLink>
                        </button>
                        <button v-if="authStore.isLogin && isHomePage" type="button"
                            class="buttonHover btn text-danger-emphasis bg-danger-subtle me-2">
                            <NuxtLink to="characters" class="text-danger-emphasis text-decoration-none">ตัวละคร
                            </NuxtLink>
                        </button>
                        <button v-if="isDynamicRoute" type="button"
                            class="buttonHover btn text-danger-emphasis bg-danger-subtle me-2">
                            <NuxtLink to="/characters" class="text-danger-emphasis text-decoration-none">ย้อนกลับ
                            </NuxtLink>
                        </button>
                        <button v-if="authStore.isLogin" type="button"
                            class="buttonHover btn text-danger-emphasis bg-danger-subtle me-2" data-bs-toggle="modal"
                            data-bs-target="#logoutModal">
                            ออกจากระบบ
                        </button>
                        <button v-if="!authStore.isLogin" type="button"
                            class="buttonHover btn text-danger-emphasis bg-danger-subtle me-2" data-bs-toggle="modal"
                            data-bs-target="#loginModal">
                            เข้าสู่ระบบ
                        </button>
                        <button v-if="!authStore.isLogin" type="button"
                            class="buttonHover btn text-danger-emphasis bg-danger-subtle me-2">
                            <NuxtLink to="UserRegister" class="text-danger-emphasis text-decoration-none">
                                สมัครสมาชิก
                            </NuxtLink>
                        </button>
                    </div>
                </div>

                <!-- ส่วนหน้าต่างล๊อคอิน -->
                <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content border-0 p-2 text-light bg-dark">
                            <div class="modal-header ">
                                <h3 class="modal-title" id="loginModalLabel">เข้าสู่ระบบ</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form @submit.prevent="login">
                                    <div class="row mb-3">
                                        <label for="emil" class="mb-1"><b>อีเมล</b></label>
                                        <input v-model="user.email" type="email"
                                            class="input rounded-3 border-0 text-center" placeholder="Enter your E-mail"
                                            name="email" required />
                                    </div>
                                    <div class="row mb-3">
                                        <label for="password" class="mb-1"><b>พาสเวิร์ด</b></label>
                                        <input v-model="user.password" type="password"
                                            class="input rounded-3 border-0 text-center"
                                            placeholder="Enter your Password" name="password" required />
                                    </div>
                                    <div class="row">
                                        <div class="text-center mt-2">
                                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
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
                                <button type="button" class="btn btn-danger" @click="logout" data-bs-dismiss="modal">
                                    ล็อกเอาต์
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useAuthStore } from "~/stores/auth";

//route manage
const route = useRoute();
const isHomePage = route.name === "index";
const isDynamicRoute = computed(() => route.path.startsWith('/characters/'))
const isRegistry = route.name === "UserEdit";

//define store
const authStore = useAuthStore();

const user = ref({
    email: "",
    password: "",
});

//ฟังชั่นจัดการ
const login = async () => {
    try {
        await authStore.logIn(user.value);  
        if (!authStore.isLogin) {
            alert("มีข้อผิดพลาดรหัสผ่านหรืออีเมลไม่ถูกต้อง"); 
            location.reload();            
        } else {
            navigateTo("characters");
        }
    } catch (error) {
        console.error("เกิดข้อผิดพลาดในการล็อคอิน:", error);
        if (error.response) {
            console.error("ข้อผิดพลาด:", error.response.data);
        } else {
            console.error("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้");
        }
    }
};

const logout = async () => {
    try {
        authStore.logOut();
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
    width: auto;
    height: auto;
}

.buttonHover:hover {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.918);
}

@media screen and (max-width: 768px) {
    .buttonHover {
        font-size: 0.8rem;
    }

    .nav-item {
        flex-direction: column;
        align-items: flex-end;
        gap: 0.5rem;
    }
}
</style>
