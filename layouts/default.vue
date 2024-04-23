<template>
    <div>
        <!-- <header>
            <navbar :currentPath="$route.name" />
        </header> -->
        <div>
            <slot />
        </div>
    </div>    
</template>

<script>
/* export default defineComponent({
  setup () {
    const route = useRoute()
    return {
      route
    }
  }
}) */
</script>

<style scoped>
/* header {
    margin: 0;
    padding: 0;
    border: none;
}

footer {
    margin: 0;
    padding: 0;
    border: none;
    bottom: 0;
    position: absolute;
} */
</style>