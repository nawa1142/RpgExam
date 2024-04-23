<template>
  <section>
    <router-link :to="'/characters/' + character.name" class="text-decoration-none linkHover">
      <div class="card m-3 ps-3 text-bg-secondary border-primary" style="width: 30rem; min-width: 25rem;">
        <div class="row g-0 ">
          <div class="col-md-4 d-flex align-items-center justify-content-center">
            <img :src="character.imageUrl" class="img-fluid rounded m-3" style="width: 10rem;">
          </div>
          <div class="col-md-8 d-flex align-items-center justify-content-between">
            <div class="card-body m-3 rounded p-3 text-bg-light">
              <h5 class="card-title">{{ character.name }}</h5>
              <p>อายุ : {{ character.age }} ปี</p>
              <p>เพศ : {{ character.gender }}</p>
              <p>อาชีพ : {{ character.occupation }}</p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  
};
</script>

<style scoped>
.linkHover {
  transition: filter 0.2s ease-in-out;
}

.linkHover:hover {
  filter: brightness(100%) drop-shadow(0 0 15px rgba(0, 0, 0, 0.5));
}
</style>
