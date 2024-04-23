import characterModel from "~/server/models/characterDB";

export default defineEventHandler(async (event) => {
  try {
    const cookies = parseCookies(event);

    if (!cookies) {
      return { error: "cookies not found" };
    }
    const userId = cookies?.id;
    const name = event.context.params.name;
    const query = {
      userId: userId,
      name: name,
    };
    const result = await characterModel
      .find(query)
      .collation({ locale: "en", strength: 2 });
    return result;
  } catch (error) {
    console.log(error);
    return { error: "failed to get data" };
  }
});
