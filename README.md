1.ถ้าผู้ใช้สมัครสมาชิกจะเอาข้อมูลไปสร้างไว้ใน mongoDB ด้วย users/post
2.เมื่อล๊อคอินด้วย อีเมล พาส จะเอาอีเมลไปเทียบกับฐานข้อมูลถ้าไม่เจอให้แจ้งเออเรอ ถ้าเจอใช้bcrypt.compare เทียบพาสที่กรอกกับที่มีในฐานข้อมูล ถ้าไม่ตรงกันให้แจ้งเออเรอ ถ้าตรงให้สร้างและรีเทิร์นค่า โทเค่น และ _id ออกไป
3.ถ้าได้โทเค่นและไอดีออกมา stores/auth.ts จะเอาไอดีและโทเค่นบันทึกในคุ้กกี้และปรับ state ผู้ใช้
4.ถ้าล๊อคเอ้าจะล้าง state และ คุ้กกี้


# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
