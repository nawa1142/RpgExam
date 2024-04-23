import characterModel from "~/server/models/characterDB";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const newCharacter = await characterModel.create(body);
    return {
      data: newCharacter,
    };
  } catch (error) {
    return error;
  }
});