# sbii

Deploy script
```
pm2 kill
cd ~/sbii
git pull
npm i
pm2 start bun --name "\Bun: SBII\" index.js

"scripts": {
    "start": "bun ./src/index.ts",
    "build": "bun bun ./src/index.ts ./src/index.html ./src/db.ts && ./node_modules.bun > node_modules.js",
    "deploy": "npm install -g pm2 && pm2 start bun --name \"bun_in_production\" -- start"
}
```
