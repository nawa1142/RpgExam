import userModel from "~/server/models/userDB";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const newUser = await userModel.create(body);
    return {
      data: newUser,
    };
  } catch (error) {
    return error;
  }
});