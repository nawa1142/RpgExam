import userModel from "~/server/models/userDB";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  try {
    const cookies = parseCookies(event);
    const config = useRuntimeConfig();

    if (!cookies) {
      return { error: "cookies not found" };
    }
    const token = cookies?.token;
    const user = jwt.verify(token, config.secretKey);
    const userId = user.userId;
    const result = await userModel.find({ _id: String(userId) });
    return result;
  } catch (error) {
    console.log(error);
    return { error: "Authentication failed" };
  }
});
