import mongoose from "mongoose"

export default async () => {
  const config = useRuntimeConfig()

  const dbName = config.dbName;
  const user = config.user;
  const pass = config.pass;
  try {
    const connectionString = `mongodb+srv://${user}:${pass}@cluster0.fx0gmmi.mongodb.net/${dbName}?retryWrites=true&w=majority`;

    await mongoose.connect(connectionString);
    console.log("Server Connected by mongoose !");
  /* try {
    const DB_OPTIONS = {
      dbName: config.dbName,
      user: config.user,
      pass: config.pass,
      authSource: config.authSource,
    }
    await mongoose.connect(config.dburl, DB_OPTIONS)
    console.log("Server Connected by mongoose !")*/
  } catch (err) {
    console.log(err)
  } 
}
