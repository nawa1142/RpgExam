<template>
    <header>
        <navbar :currentPath="$route.path" />
    </header>
    <div class="container-fluid">
        <div class="m-4 mx-auto d-flex justify-content-center align-items-center">
            <div class="card d-flex align-items-center p-3 border-primary-subtle rounded-3 shadow-lg bg-dark bg-gradient text-white"
                style="min-width: 27rem; max-width: 32rem;">
                <img :src="character.imageUrl" class="img-fluid rounded-3 " style="max-width: 16rem; min-width: 10rem;">
                <div class="card-body" style="max-width: 18rem;">
                    <h1 class="card-title mb-3">{{ character.name }}</h1>
                    <div class="card-text">
                        <p class="card-text">อายุ : {{ character.age }} ปี</p>
                        <p class="card-text">เพศ : {{ character.gender }}</p>
                        <p class="card-text">อาชีพ: {{ character.occupation }}</p>
                    </div>
                </div>
                <div class="card m-auto text-start mt-3 border-1" style="min-width: 25rem; max-width: 30rem;">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane"
                                aria-selected="true">
                                ไอเทม
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                data-bs-target="#profile-tab-pane" type="button" role="tab"
                                aria-controls="profile-tab-pane" aria-selected="false">
                                เงิน
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab"
                                data-bs-target="#contact-tab-pane" type="button" role="tab"
                                aria-controls="contact-tab-pane" aria-selected="false">
                                สกิล
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                            aria-labelledby="home-tab" tabindex="0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" v-for="item in character.items" :key="item">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                            tabindex="0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" v-for="moneyItem in character.money" :key="moneyItem.name">
                                    {{ moneyItem.name }}: {{ moneyItem.amount }}
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab"
                            tabindex="0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" v-for="skill in character.skills" :key="skill.name">
                                    {{ skill.name }}: {{ skill.amount }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const character = ref({
    name: "",
    age: 0,
    gender: "",
    occupation: "",
    imageUrl: "",
    items: [],
    money: [],
    skills: [],
});

const route = useRoute();
const name = route.params.character; //พารามิเตอร์ขึ้นอยู่กับชื่อใน [] ของชื่อไฟล์
const getCharacter = async () => {
    try {
        const result = await $fetch(`/api/character/${name}`);
        if (result.length === 0) {
            navigateTo('/characters')
        }
        character.value = result[0]; //ต้องเป็นอาเรย์ลำดับ 0 เพราะข้อมูลที่ได้มาเป็น [{}]
        console.log(result);
    } catch (err) {
        console.error(err);
    }
};
onMounted(getCharacter);

definePageMeta({
  middleware: [
    'auth',
  ],
});

useHead({
    title: "Sword and Staft",
});
</script>

<style scoped></style>
