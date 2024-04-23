import bcrypt from "bcryptjs";
import userModel from "~/server/models/userDB";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const loginBody = await readBody(event);
  const userData = await userModel.findOne({ email: loginBody.email });

  if (!userData) {
    return { error: "User not found" };
  } else {
    const match = await bcrypt.compare(loginBody.password, userData.password);
    if (!match) {
      return { error: "Incorrect password" };
    } else {
      const config = useRuntimeConfig();

      const token = jwt.sign({ userId: userData._id }, config.secretKey, {
        expiresIn: "1h",
      });

      /* setCookie(event, config.cookieName, token, {
        httpOnly: true,
        path: "/",
        sameSite: "none",
        secure: process.env.NODE_ENV === "production",
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      });
       */
      return {
        id: userData._id,
        /*email: userData.email,
        loginStatus: true, */
        token,
      };
    }
  }
});
