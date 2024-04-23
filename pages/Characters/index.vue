<template>
  <header>
    <navbar :currentPath="$route.path" />
  </header>

  <div class="container-fluid">
    <div class="d-flex flex-column align-items-center mb-3">
      <div class="text-center bg-light rounded mt-3">
        <h1 class="p-2">เลือกตัวละคร</h1>
      </div>
      <div class="text-light d-flex flex-column align-items-center justify-content-center">
        <!-- ส่วนแสดงผลตัวละครทั้งหมด เซตชื่อurl อยู่ในคอมพาเน้น CharacterCard -->
        <CharacterCard v-for="(character, index) in characters" :key="index" :character="character" />
        <!-- ส่วนไว้สร้างตัวละคร -->
        <div v-if="characters.length < 3" class="character-card create-character">
          <button type="button" class="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#CharCreateModal">
            <img src="/image/add character.svg"  />
          </button>
          <div class="modal fade" id="CharCreateModal" tabindex="-1" aria-labelledby="CharCreateModal"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content bg-dark text-light">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="CharCreateModal">
                    สร้างตัวละคร
                  </h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="createCharacter">
                    <div class="form-group">
                      <label for="name">ชื่อ:</label>
                      <input type="text" class="form-control" id="name" v-model="newCharacter.name" />
                    </div>
                    <div class="form-group">
                      <label for="name">เลือกรูปภาพ:</label>
                      <div class="d-flex flex-wrap justify-content-between">
                        <div v-for="pic in profilePics">
                          <input v-model="newCharacter.imageUrl" :value="pic.src" type="radio" class="btn-check"
                            name="options" :id="pic.id" autocomplete="off" />
                          <label
                            class="btn btn-outline-secondary picHover border border-0 d-flex align-items-center justify-content-center my-1 mx-1"
                            :for="pic.id">
                            <img class="rounded" :src="pic.src" width="120" height="120" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="age">อายุ:</label>
                      <input type="number" class="form-control" id="age" v-model="newCharacter.age" />
                    </div>
                    <div class="form-group">
                      <label for="gender">เพศ:</label>
                      <select class="form-control" id="gender" v-model="newCharacter.gender" required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="occupation">อาชีพ:</label>
                      <select class="form-control" id="occupation" v-model="newCharacter.occupation" required>
                        <option value="swordman">นักดาบ</option>
                        <option value="mage">นักเวทย์</option>
                        <option value="archer">นักธนู</option>
                        <option value="thief">โจร</option>
                        <option value="healer">ผู้รักษา</option>
                      </select>
                    </div>
                    <button type="submit" class="btn btn-primary mt-2">
                      สร้างตัวละคร
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useCharacters from "~/composables/allCharacters";

const { characters } = useCharacters();

const showModal = ref(false);

const newCharacter = ref({
  name: "",
  age: null,
  gender: "other",
  occupation: "",
  imageUrl: "",
});

const profilePics = [
  { id: "option1", src: "/image/profilePic/1.png" },
  { id: "option2", src: "/image/profilePic/2.png" },
  { id: "option3", src: "/image/profilePic/3.png" },
  { id: "option4", src: "/image/profilePic/4.png" },
  { id: "option5", src: "/image/profilePic/5.png" },
  { id: "option6", src: "/image/profilePic/6.png" },
  { id: "option7", src: "/image/profilePic/7.png" },
];

const createCharacter = async () => {
  try {
    const userId = useCookie("id").value;
    const startSkill = [{ name: "Basic Skill", amount: 1 }];
    const startMoney = [{ name: "Gold", amount: 1000 }];
    const startItems = ["Starterkit"];
    const CharacterData = {
      ...newCharacter.value,
      userId,
      skills: startSkill,
      money: startMoney,
      items: startItems,
    };

    const response = await $fetch("/api/characters", {
      method: "POST",
      body: JSON.stringify(CharacterData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = response.data;
    console.log("สร้างตัวละครสำเร็จ!");
    console.log("ข้อมูลตัวละคร:", responseData);
    alert("สร้างตัวละครเสร็จสิ้น");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

definePageMeta({
  middleware: [
    'auth',
  ],
});

useHead({
  title: "Sword and Staft",
});
</script>

<style scoped>
.picHover {
  transition: filter 0.2s ease-in-out;
}
.picHover:hover {
  filter: brightness(100%) drop-shadow(0 0 10px rgba(161, 161, 223, 0.5));
}
</style>