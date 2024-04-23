import userModel from "~/server/models/userDB";

export default defineEventHandler(async (event) => {
  const cookies = parseCookies(event);
  const body = await readBody(event);
  const userId = cookies?.id;
  const payload = {
    firstname: body._value.firstname,
    lastname: body._value.lastname,
    age: body._value.age,
    gender: body._value.gender
  }
  try {
    const updateUser = await userModel.findByIdAndUpdate(userId, payload, {
      new: true,
    });
    return {
      updateUser,
    };
  } catch (error) {
    return error;
  }
});
