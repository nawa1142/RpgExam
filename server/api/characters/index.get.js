import characterModel from "~/server/models/characterDB";

export default defineEventHandler(async (event) => {
  try {    
    const cookies = parseCookies(event);
    
    if (!cookies) {
      return { error: "cookies not found" };
    }
    const userId = cookies?.id
    const result = await characterModel.find({ userId: userId });
    return result;
  } catch (error) {
    console.log(error);
    return { error: "Authentication failed" };
  } 
});