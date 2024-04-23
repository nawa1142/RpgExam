export default function getUser() {
    const user = ref([]);
  
    const getUser = async () => {
      try {  
        const result = await $fetch('/api/user')        
        user.value = result[0];
      } catch (error) {        
        return { error: "Authentication failed" };
      }
    } 
  
    onMounted(getUser);
  
    return {
        user
    };
  }