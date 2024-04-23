export default function useCharacters() {
    const characters = ref([]);
  
    const getCharacters = async () => {
      try {  
        const result = await $fetch('/api/characters')        
        characters.value = result;
      } catch (error) {
        console.log(error);
        return { error: "Authentication failed" };
      }
    } 
  
    onMounted(getCharacters);
  
    return {
      characters
    };
  }