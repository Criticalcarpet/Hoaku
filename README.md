<p align="center">
  <img width="100" src="https://raw.githubusercontent.com/hoaku/hoaku/master/assets/hoaku.png" />
</p>
<h1 align="center">Hoaku</h1>

# Hoaku
A self-hosted social media network.

## Setup
1. Use the .env.template file to make an env file.
2. Run `npm i`.
3. Run `node .` or `npm start` to run the application.

_If you're going to host Hoaku for production, using [pm2](https://npmjs.com/package/pm2) is recommended._

## Stack
- Node.js
- Express
- Mongo

## Routes explanation
From /routes every folder and file should be called according to the route path.

For example, the route `/auth/login` should be `login.js` in the folder `/routes/auth`.

- If the file/folder is not a route, add a dollar sign ($) before the file name
- If the file is a route, but the same route has 2 methods, use this naming scheme: `name$method.js` (e.g. `settings / bio$patch.js`)
- If the file/folder is a route and has a URL param, add an underscore before the file/folder (e.g. `/posts/:id/likesa` becomes `/routes/posts/_id/likes.js`)