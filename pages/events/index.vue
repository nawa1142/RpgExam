<template>
    <header>
        <navbar :currentPath="$route.path" />
    </header>   
</template>

<script setup>
useHead({
    title: "Sword and Staft",
});
</script>

<style scoped></style>