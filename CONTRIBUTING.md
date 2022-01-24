## Folder explanation
- `/assets`: Assets (like images) for Hoaku and your instance
- `/content`: User uploaded content
- `/frontend`: The frontend of Hoaku, powered by Nuxt.js
- `/includes`: Useful stuff that's included/required in multiple files
- `/packages`: NPM packages by Hoaku
- `/server`: The server for Hoaku, contains Express instances for both the frontend and the backend, every sub-folder in `/server` is named according to route path, like noted below

## Routes explanation
From `/server` every folder and file should be called according to the route URL path.

For example, the route `/auth/login` should be `login.js` in the folder `/server/api/auth`.

- If the file/folder is not a route, add a dollar sign ($) before the file name
- If the file is a route, but the same route has 2 methods, use this naming scheme: `name$method.js` (e.g. `settings / bio$patch.js`)
- If the file/folder is a route and has a URL param, add an underscore before the file/folder (e.g. `/posts/:id/likesa` becomes `/server/api/_id/likes.js`)