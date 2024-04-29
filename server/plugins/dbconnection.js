import mongoose from "mongoose"

export default async () => {
  const config = useRuntimeConfig()
  try {
    const DB_OPTIONS = {
      dbName: config.dbName,
      user: config.user,
      pass: config.pass,
      authSource: config.authSource,
    }
    /* await mongoose.connect(config.dburl, DB_OPTIONS) */
    await mongoose.connect("mongodb+srv://canaria:1234@cluster0.fx0gmmi.mongodb.net/TestAuth?retryWrites=true&w=majority")
    console.log("Server Connected by mongoose !")
  } catch (err) {
    console.log(err)
  }
}
