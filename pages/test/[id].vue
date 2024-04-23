<template>
    <div>
        <button @click.prevent="getone" class="button">Get</button>
        <div class="result text-light">
            <span>url: {{ name }}</span>
            <p>Response Data:</p>
            <p>{{ responseData }}</p>
        </div>        
    </div>
</template>

<script setup lang="ts">
const responseData = ref(null);
const error = ref(null);

const route = useRoute()
const name = route.params.id

const getone = async () => {
    try {
        const result = await $fetch(`/api/character/${name}`);
        responseData.value = result;
    } catch (err) {
        console.error(err);
        error.value = err.message || 'Failed to fetch data';
    }
};
onMounted(getone);
</script>