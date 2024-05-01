<template>
    <header>
        <navbar :currentPath="$route.path" />
        <div class="card mb-3">
            <img src="/image/events/1.jpg" class="card-img-top" style="width: 20rem;">
            <div class="card-body">
                <h5 class="card-title">Event now</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat sunt, iusto assumenda sint earum aperiam, officia tempora id vero, aliquid quaerat iste dicta ea quas ipsum sit deserunt labore!</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>        
    </header>
</template>

<script setup>
useHead({
    title: "Sword and Staft",
});
</script>

<style scoped></style>