// https://nuxt.com/docs/api/configuration/nuxt-config
const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;

export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],

  ssr: true,

  runtimeConfig: {
    dburl: process.env.DATABASE_URL,
    dbName: process.env.DBNAME,
    user: process.env.DBUSERNAME,
    pass: process.env.DBPASSWORD,
    authSource: process.env.DBAUTHSOURCE,
    secretKey: process.env.SECRET_KEY,
    cookieName: process.env.COOKIE_NAME || "__session",
    cookieSecret: process.env.COOKIE_SECRET || "secret",
    cookieExpires: parseInt(
      process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_DAY.toString(),
      10
    ), // 1 day
    cookieRememberMeExpires: parseInt(
      process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_WEEK.toString(),
      10
    ), // 7 days
  },

  css: ["bootstrap/dist/css/bootstrap.css", "@/assets/main.css"],

  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Canaria Example Project with Nuxt.js",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
          defer: true,
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.jpg" }],
    },
  },
});
